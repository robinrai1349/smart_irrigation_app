function sendCommand(command) {
    fetch('/send-command', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert(data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send command');
    });
}