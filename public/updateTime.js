function updateTime() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('currentTime').textContent = hours + ':' + minutes;
}

setInterval(updateTime, 1000); // Update every minute