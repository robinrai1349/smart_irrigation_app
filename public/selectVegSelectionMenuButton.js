document.addEventListener('DOMContentLoaded', () => {
    const anchor = document.querySelector("div.vegSelection > div:nth-child(8) > a");
    const vegSelectionDiv = document.querySelector('.vegSelection');
    
    const handleClick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Hide all elements within the div with class "vegSelection"
        const children = vegSelectionDiv.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('hidden');
        }

        // Fetch the HTML for the vegetable selection menu and insert it into the div
        fetch('vegSelectionMenu.html')
            .then(response => response.text())
            .then(data => {
                vegSelectionDiv.innerHTML += data;
                attachVegSelectionListeners(); // Attach listeners to new elements
            })
            .catch(error => {
                console.error('Error fetching the HTML:', error);
            });
    };

    if (anchor) {
        anchor.addEventListener('click', handleClick);
    }
});

const attachVegSelectionListeners = () => {
    const vegOptions = document.querySelectorAll('.vegSelectionMenu .selectedVeg');
    
    vegOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedVegName = option.parentElement.querySelector('h4').innerText;
            const selectedVegImgSrc = option.querySelector('img').getAttribute('src');
            const selectedVegImgAlt = option.querySelector('img').getAttribute('alt');

            addNewCrop(selectedVegName, selectedVegImgSrc, selectedVegImgAlt);
        });
    });
};

const addNewCrop = (name, imgSrc, imgAlt) => {
    const vegSelectionDiv = document.querySelector('.vegSelection');
    
    // Create new crop elements
    const newCropH3 = document.createElement('h3');
    newCropH3.innerHTML = `Crop ${vegSelectionDiv.querySelectorAll('.selectedVegContainer').length}`;
    const newCrop = document.createElement('div');
    newCrop.classList.add('selectedVegContainer');
    newCrop.innerHTML = `
        <div class="selectedVegContainer" style="grid-template-row-start: ">
            <div class="selectedVeg">
                <img src="${imgSrc}" alt="${imgAlt}">
            </div>
            <input placeholder="${name}">
            <a href="#">
                <img src="/images/svgs/Settings.svg" alt="Settings">
            </a>
        </div>
    `;

    // Remove the veg selection menu
    const vegSelectionMenu = document.querySelector('.vegSelectionMenu');
    if (vegSelectionMenu) {
        vegSelectionMenu.remove();
    }

    // Remove 'hidden' class from the existing elements
    const children = vegSelectionDiv.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('hidden');
    }

    // Remove add new crop button and title
    const newCropButton = document.querySelector("body > div.vegSelection > h3:nth-child(7)");
    const addNewButton = document.querySelector("body > div.vegSelection > div:nth-child(8) > a");

    // Append the new crop to the vegSelectionDiv
    vegSelectionDiv.insertBefore(newCropH3, vegSelectionDiv.lastElementChild); // Insert before the "Add more" button
    vegSelectionDiv.insertBefore(newCrop, vegSelectionDiv.lastElementChild); // Insert before the "Add more" button


    // Remove add more option
    newCropButton.remove();
    addNewButton.remove();
};
