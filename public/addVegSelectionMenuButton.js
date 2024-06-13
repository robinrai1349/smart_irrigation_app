document.addEventListener('DOMContentLoaded', () => {
    const vegSelectionMenuDivs = document.querySelectorAll('.vegSelectionMenu div');
    const vegSelectionDiv = document.querySelector('.vegSelection');
    const h3Element = document.querySelector('div.vegSelection > h3:nth-child(7)');

    vegSelectionMenuDivs.forEach(div => {
        div.addEventListener('click', (event) => {
            event.preventDefault();

            console.log('Div clicked:', div); // Log to check if click event is detected

            // Hide vegSelectionMenu div
            const vegSelectionMenu = document.querySelector('.vegSelectionMenu');
            vegSelectionMenu.classList.add('hidden');

            // Show children of vegSelection div
            const children = vegSelectionDiv.children;
            for (let i = 0; i < children.length; i++) {
                children[i].classList.remove('hidden');
            }

            // Update h3 element with inner HTML of clicked h4
            const h4Text = event.currentTarget.querySelector('h4').innerHTML;
            h3Element.innerHTML = h4Text;

            // Remove existing elements in selectedVegContainer
            const selectedVegContainer = document.querySelector('.selectedVegContainer');
            if (selectedVegContainer) {
                selectedVegContainer.remove();
            }

            // Construct new HTML content
            const svgSrc = event.currentTarget.querySelector('img').getAttribute('src');
            const newSelectedVegContainer = document.createElement('div');
            newSelectedVegContainer.classList.add('selectedVegContainer');

            const selectedVegDiv = document.createElement('div');
            selectedVegDiv.classList.add('selectedVeg');
            selectedVegDiv.innerHTML = `<img src="${svgSrc}" alt="${h4Text}">`;

            const inputElement = document.createElement('input');
            inputElement.setAttribute('placeholder', h4Text);

            const settingsLink = document.createElement('a');
            settingsLink.setAttribute('href', '#');

            const settingsImg = document.createElement('img');
            settingsImg.setAttribute('src', '/images/svgs/Settings.svg');
            settingsImg.setAttribute('alt', 'Settings');

            settingsLink.appendChild(settingsImg);
            newSelectedVegContainer.appendChild(selectedVegDiv);
            newSelectedVegContainer.appendChild(inputElement);
            newSelectedVegContainer.appendChild(settingsLink);

            // Insert new HTML content
            vegSelectionDiv.appendChild(newSelectedVegContainer);
        });
    });
});
