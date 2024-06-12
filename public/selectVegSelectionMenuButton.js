document.addEventListener('DOMContentLoaded', () => {
    const anchor = document.querySelector("div.vegSelection > div:nth-child(8) > a");
    
    const handleClick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Hide all elements within the div with class "vegSelection"
        const vegSelectionDiv = document.querySelector('.vegSelection');
        const children = vegSelectionDiv.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('hidden');
        }

        // Fetch the HTML from the external file and insert it into the div
        fetch('vegSelectionMenu.html')
            .then(response => response.text())
            .then(data => {
                vegSelectionDiv.innerHTML += data;
            })
            .catch(error => {
                console.error('Error fetching the HTML:', error);
            });
    };

    if (anchor) {
        anchor.addEventListener('click', handleClick);
    }

    selectedVegDivs.forEach(div => {
        div.addEventListener('click', handleClick);
    });
});