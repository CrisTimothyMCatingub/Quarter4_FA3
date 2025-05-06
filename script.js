// Shape Printer Elements
const shapeOutput = document.getElementById('shapeOutput');

// Contact List Elements
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const contactListElement = document.getElementById('contactList');
const contacts = [];
const maxContacts = 7;

// Shape Printer Functionality (triggered by prompt on page load)
function generateShapeFromPrompt() {
    let userInput;

    while (true) {
        userInput = prompt("Enter a number to generate a shape:");
        if (!isNaN(userInput) && userInput !== null && userInput.trim() !== "") {
            const number = parseInt(userInput);
            if (number > 0) {
                shapeOutput.innerHTML = ''; // Clear any previous output
                const heading = document.createElement('h3');
                heading.textContent = `Number inputted: ${number}`;
                shapeOutput.appendChild(heading);

                for (let i = number; i >= 1; i--) {
                    const paragraph = document.createElement('p');
                    let row = "";
                    for (let j = 0; j < i; j++) {
                        row += i + "&nbsp;";
                    }
                    paragraph.innerHTML = row;
                    shapeOutput.appendChild(paragraph);
                }
                break; // Exit the loop after a valid number is processed
            } else {
                alert("Please enter a positive number.");
            }
        } else if (userInput === null) {
            // User cancelled the prompt
            break;
        } else {
            alert("Invalid input. Please enter a number.");
        }
    }
}

// Contact List Functionality
function displayContacts() {
    contactListElement.innerHTML = '';
    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = contact;
        contactListElement.appendChild(listItem);
    });
}

addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name !== '') {
        contacts.push(name);
        if (contacts.length > maxContacts) {
            contacts.shift(); // Remove the oldest contact
        }
        displayContacts();
        nameInput.value = ''; // Clear the input field
    }
});

removeButton.addEventListener('click', () => {
    if (contacts.length > 0) {
        contacts.pop(); // Remove the last contact
        displayContacts();
    }
});

// Trigger the shape generation prompt when the script loads
generateShapeFromPrompt();

// Initial display of contacts
displayContacts();