document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons on the page
    const buttons = document.querySelectorAll('button');

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalColor = this.style.backgroundColor; // Store the original color
            this.style.backgroundColor = 'green'; // Change the clicked button's color to green

            // Revert the color back to the original after 200 milliseconds
            setTimeout(() => {
                this.style.backgroundColor = originalColor;
            }, 500);
        });
    });
});
