var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dgram = require('dgram');  // Add the dgram module

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Define UDP server details
const UDP_HOST = '192.168.137.116'; 
const UDP_PORT = 4210; 

// Function to send UDP commands
function sendUdpCommand(command, res) {
    const message = Buffer.from(command);
    const client = dgram.createSocket('udp4');
    client.send(message, UDP_PORT, UDP_HOST, (err) => {
        client.close();
        if (err) {
            console.error(`Failed to send command: ${command}`, err);
            res.status(500).send(`Failed to send command: ${command}`);
        } else {
            console.log(`Command sent: ${command}`);
            res.status(200).send(`Command sent: ${command}`);
        }
    });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Endpoint to handle commands from the front end
app.post('/send-command', (req, res) => {
    const { command } = req.body;
    if (command) {
        sendUdpCommand(command, res);
    } else {
        res.status(400).send('No command provided');
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
    console.log(`\nServer is running on http://${HOST}:${PORT}\n`);
});

module.exports = app;
