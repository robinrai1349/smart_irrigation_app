document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons on the page
    const buttons = document.querySelectorAll('button');

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Check if any button is in 'Stop' state
            let isAnyPumpRunning = Array.from(buttons).some(btn => btn.innerHTML.includes('Stop'));

            if (isAnyPumpRunning && this.innerHTML.includes('Start')) {
                // If any pump is running, prevent starting another pump
                alert('A pump is already running. Please stop it before starting another pump.');
                return;
            }

            // Toggle the button text and corresponding command
            if (this.innerHTML.includes('Start')) {
                this.innerHTML = this.innerHTML.replace('Start', 'Stop');
                this.setAttribute('onclick', this.getAttribute('onclick').replace('START', 'STOP'));
                this.style.backgroundColor = 'red'; // Change to red when stopping

                // Disable all buttons except the one that was clicked
                buttons.forEach(btn => {
                    if (btn !== this) {
                        btn.disabled = true;
                    }
                });
            } else {
                this.innerHTML = this.innerHTML.replace('Stop', 'Start');
                this.setAttribute('onclick', this.getAttribute('onclick').replace('STOP', 'START'));
                this.style.backgroundColor = 'white'; // Change back to green when starting

                // Enable all buttons
                buttons.forEach(btn => {
                    btn.disabled = false;
                });
            }
        });
    });
});
