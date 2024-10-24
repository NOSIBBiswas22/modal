// Coding by Nosib Biswas
// Copyright 2024. All right reseved.
// https://nosibbiswas22.github.io/nosibbiswas/

let icon, iconColor, modalSize, modalDataContent, modalHeader, headerAlign, buttonCount, yesButtonText, noButtonText, yesButtonColor, noButtonColor, buttonLayout, yesAction, noAction, buttonWidth; // Add headerAlign for header text alignment

// Function to add CSS styles for the modal
function addModalStyles() {
    if (!document.getElementById("modalStyles")) {
        const styles = `
/* Modal styles */
            .modal {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
            }

            .modal-content {
                background-color: white;
                margin: auto;
                padding: 20px;
                border-radius: 5px;
                width: 80%;
                max-width: 500px;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }

            .modal-content.small { max-width: 300px; }

            .modal-header {
                font-weight: bold;
                font-size: 17px;
                color: #00796b;
                margin-bottom: 0;
                text-align: center; /* Default center for larger modals */
            }
                
            .modal-header span {
                text-align: center;
            }
            .modal-header.left { text-align: left; } /* Left alignment */
            .modal-header.right { text-align: right; } /* Right alignment */
            .modal-close {
                color: #333;
                float: right;
                font-size: 1.8em;
                font-weight: bolder;
                cursor: pointer;
            }

            .modal-button {
                background-color: #00796b;
                color: white;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
                font-size: 1.1em;
                margin: 10px 0;
            }

            .modal-button:hover {
                background-color: #004d40;
            }

            .modal-button-container {
                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            .modal-button-container-horizontal {
                flex-direction: row;
                justify-content: center;
            }

            .modal-button-container-horizontal .modal-button {
                margin-right: 10px;
            }

            .modal-button-container-horizontal .modal-button:last-child {
                margin-right: 0;
            }

            .modal-button.full {
                width: 100%; /* Full width for full option */
            }

            .modal-button.half {
                width: 48%; /* Half width for half option */
            }

            .modal-button.half-left {
                margin-right: auto; /* Align button to left */
            }

            .modal-button.half-right {
                margin-left: auto; /* Align button to right */
            }

            .modal-button.half-center {
                margin: 0 auto; /* Center align the button */
            }

            .modal-button.shift-right {
                margin-left: auto;
            }

            .modal-header span i {
                font-size: 40px;
                color: #c9302c;
                display: block;
                margin: auto 10px 10px 10px;
            }

            /* Custom styles for modalData content */
            .modal-data {
                margin: 8px;
                font-size: 16px;
                text-align: center;
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.id = "modalStyles"; // Add ID to prevent multiple injections
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }
}

// Create and append modal dynamically
function createModal() {
    // Ensure styles are added only once
    if (!document.getElementById("modalStyles")) {
        addModalStyles();
    }

    const modalDiv = document.createElement('div');
    modalDiv.id = "permModal";
    modalDiv.className = "modal";

    const modalContent = document.createElement('div');
    modalContent.className = "modal-content";

    const closeButton = document.createElement('span');
    closeButton.className = "modal-close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = closeModal;

    const modalHeaderElement = document.createElement('div');
    modalHeaderElement.className = `modal-header ${headerAlign}`; // Add alignment class to modal header

    // Create icon element
    const iconElement = document.createElement('span');
    iconElement.innerHTML = icon;  // Use the dynamic icon class
    iconElement.style.color = iconColor; // Set icon color

    // Append icon and text to the header
    modalHeaderElement.appendChild(iconElement);
    modalHeaderElement.appendChild(document.createTextNode(modalHeader)); // Append text after icon

    const modalDataElement = document.createElement('div');
    modalDataElement.className = 'modal-data'; // Style it for modalData content
    modalDataElement.innerHTML = modalDataContent; // Set the dynamic modal data content

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "modal-button-container";

    // Set layout for buttons
    if (buttonLayout === 'horizontal') {
        buttonContainer.classList.add('modal-button-container-horizontal');
    }

    if (buttonCount === 1) {
        const yesButton = document.createElement('button');
        yesButton.className = `modal-button ${buttonWidth}`; // Apply width based on buttonWidth option
        yesButton.innerText = yesButtonText;
        yesButton.style.backgroundColor = yesButtonColor;
        yesButton.onclick = function() { 
            yesAction(); // Execute the provided yesAction
            closeModal(); // Close modal after action
        };
        buttonContainer.appendChild(yesButton);
    } else if (buttonCount === 2) {
        const yesButton = document.createElement('button');
        yesButton.className = `modal-button ${buttonWidth}`; // Apply width based on buttonWidth option
        yesButton.innerText = yesButtonText;
        yesButton.style.backgroundColor = yesButtonColor;
        yesButton.onclick = function() { 
            yesAction(); // Execute the provided yesAction
            closeModal(); // Close modal after action
        };

        const noButton = document.createElement('button');
        noButton.className = `modal-button ${buttonWidth}`; // Apply width based on buttonWidth option
        noButton.innerText = noButtonText;
        noButton.style.backgroundColor = noButtonColor;
        noButton.onclick = function() { 
            noAction(); // Execute the provided noAction
            closeModal(); // Close modal after action
        };

        buttonContainer.appendChild(yesButton);
        buttonContainer.appendChild(noButton);
    }

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalHeaderElement);
    modalContent.appendChild(modalDataElement);
    modalContent.appendChild(buttonContainer);
    modalDiv.appendChild(modalContent);

    document.body.appendChild(modalDiv);
}

// Modal functions
function openModal(
    modalIcon, 
    modalIconColor,
    modalSize,
    modalData,
    header, 
    headerAlignment,
    count, 
    buttonWidthOption, 
    yesText, 
    noText, 
    yesColor, 
    noColor, 
    layout, 
    yesCallback, 
    noCallback
) {
    // Default values for each option
    icon             = modalIcon;                             // Set icon class
    iconColor        = modalIconColor;                        // Set icon color
    modalSize        = modalSize || 'medium';                 // set modal size
    modalDataContent = modalData || '';                       // Set modal data content dynamically
    modalHeader      = header;                                // Set modal header
    headerAlign      = headerAlignment || 'center';           // Set default header alignment
    buttonCount      = count;                                 // Set number of buttons. Option(0,1,2)
    buttonWidth      = buttonWidthOption || 'full';           // Set the button width option (full, half, half-left, half-right, half-center)
    yesButtonText    = yesText || 'Yes';                      // Set yes button text
    noButtonText     = noText || 'No';                        // Set no button text
    yesButtonColor   = yesColor || '#00796b';                 // Set yes button color
    noButtonColor    = noColor || '#c9302c';                  // Set no button color
    buttonLayout     = layout || 'vertical';                  // Set button layout type. Option(vertical, horizontal)
    yesAction        = yesCallback || closeModal;             // Set the yes button action
    noAction         = noCallback || closeModal;              // Set the no button action

    createModal();                                            // Create modal with the specified parameters
    // Apply size class to modal content
    const modalContentElement = document.querySelector('.modal-content');
    modalContentElement.classList.add(modalSize);  // Add size class
    document.getElementById("permModal").style.display = "block";  // Show the modal
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById("permModal").style.display = "none";
    // Remove modal from DOM to avoid duplication
    const modal = document.getElementById("permModal");
    if (modal) {
        modal.remove();
        document.body.style.overflow = ''; // Reset
    }
}

// Allow the modal to be closed when the "Escape" key is pressed.
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});