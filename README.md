# Documentation for dynamic modal generator

## Overview
`modal.js` is a JavaScript module that provides a reusable dynamic modal dialog for web applications. The modal supports various configurations, such as custom content, button actions, header alignment, icon usage, different layouts, styles, and actions.

![Static Badge](https://img.shields.io/badge/Developed%20By-Nosib%20Biswas-blue)
![Static Badge](https://img.shields.io/badge/version-1.0.1-red)
---

## Features
- Customizable Modal Size: Choose from various size options (small, medium, large) to fit your design needs.

- Dynamic Content: Easily set the modal content, including text and HTML elements, making it flexible for various use cases.

- Icon Support: Add icons to the modal header for better visual appeal using customizable icon classes and colors.

- Flexible Button Layout: Choose between vertical and horizontal button arrangements, with options for full-width or half-width buttons.

- Callback Functions: Specify actions for the "Yes" and "No" buttons, allowing for customizable behavior when users interact with the modal.

- Header Text Alignment: Align the modal header text to the left, right, or center to match your UI design.

- Easy Integration: Simple to integrate into any project with just a few lines of JavaScript.

- Accessibility Features: Includes keyboard accessibility, allowing users to close the modal with the "Escape" key and by clicking outside the modal.

- CSS Styles: Comes with built-in CSS styles for easy customization, or you can override them as needed to match your project’s design.

- Lightweight: Minimal JavaScript footprint, ensuring fast loading times and performance.

Feel free to add, modify, or remove any features to match your vision for the modal.js library!

## Live Demo
- Website: (https://nosibbiswas22.github.io/modal/)

## Getting Started

### 1. Installation
To use `modal.js` without downloding, include it in your HTML file:

```html
<script src="https://nosibbiswas22.github.io/modal/modal.js"></script>
```


### 2. OR Include `modal.js` in Your Project
To use the modal,first download the modal.js then include the `modal.js` file in your HTML document:

```html
<script src="path/to/modal.js"></script>
```

### 3. Add Icon Library
To use icons in the modal, you need to include an icon library in your HTML document. Popular choices include:

### Using Icons

You can use any HTML icon in the modal header. For instance, if you are using [FontAwesome](https://fontawesome.com/),  [Boxicons](https://boxicons.com/) include the link to the FontAwesome CSS in your HTML head:

#### Font Awesome
To use Font Awesome icons, include the following link in the `<head>` section of your HTML:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```

#### Boxicons
To use Boxicons icons, include the following link in the `<head>` section of your HTML:
```html
<link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>
```

#### Material Icons
To use Material Icons, include the following link for FontAwesome or boxicons in the `<head>` section of your HTML:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

### 4. Call the `openModal` Function
To display the modal, call the `openModal` function with the desired parameters. Here’s the syntax:

```javascript
openModal(
    modalIcon,        // String: HTML or class for the icon
    modalIconColor,   // String: Color for the icon (e.g., '#ffffff')
    modalSize,        // String: Size of the modal (e.g., 'small', 'medium', 'large')
    modalData,        // String: Content to display in the modal in html formet
    header,           // String: Header text of the modal
    headerAlignment,  // String: Alignment of the header ('left', 'center', 'right')
    count,            // Number: Number of buttons (0, 1, or 2)
    buttonWidthOption,// String: Button width option ('full', 'half', 'half-left', 'half-right', 'half-center')
    yesText,          // String: Text for the Yes button
    noText,           // String: Text for the No button
    yesColor,         // String: Background color for the Yes button
    noColor,          // String: Background color for the No button
    layout,           // String: Button layout type ('vertical', 'horizontal')
    yesCallback,      // Function: Callback for Yes button action
    noCallback        // Function: Callback for No button action
);
```

### 5. Example Usage
Here's an example of how to implement the modal in your code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://nosibbiswas22.github.io/modal/modal.js"></script>
    <title>Modal Example</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .showButton {
            padding: 12px 24px;
            background-color: #00796b;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .showButton:hover {
            background-color: #004d40; /* Darker shade on hover */
        }
    </style>
</head>
<body>
    <!-- Modal HTML -->
    <div id="modal"></div>

    <button class="showButton" onclick="showModal()">Show Modal</button>

    <script>
    function showModal() {
        openModal(
            '<i class="fas fa-info-circle"></i>', // Example icon (Font Awesome)
            '#00796b',                            // Icon color
            'medium',                              // Modal size
            'This is a dynamic content message.<br><a href="https://example.com">Learn more</a>', // Content with link
            'Information',                         // Header
            'center',                              // Header alignment
            2,                                     // Number of buttons
            'half',                                // Button width
            'Yes',                                 // Yes button text
            'No',                                  // No button text
            '#00796b',                             // Yes button color
            '#c9302c',                             // No button color
            'horizontal',                          // Button layout
            function() { alert('You clicked Yes!'); }, // Yes button action
            function() { alert('You clicked No!'); }   // No button action
        );
    }
    </script>
</body>
</html>

```

### 6. Using Icons
You can customize the icon in the modal header by passing the HTML for the icon as a string in the `modalIcon` parameter. For example, if you are using Font Awesome:

```javascript
modalIcon: '<i class="fas fa-info-circle"></i>' // Font Awesome icon for info
```

### 7. Adding Links
To include links in the modal content, simply add HTML anchor tags (`<a>`) within the `modalData` parameter. For example:

```javascript
modalData: 'Click here to <a href="https://example.com" target="_blank">learn more</a>.'
```

This will create a clickable link that opens in a new tab.

### 8. Default Values
The `openModal` function has default values for several parameters. If not specified, the following defaults will be used:
- `modalSize`: `'medium'`
- `modalData`: `''` (empty)
- `headerAlignment`: `'center'`
- `buttonWidthOption`: `'full'`
- `yesButtonText`: `'Yes'`
- `noButtonText`: `'No'`
- `yesButtonColor`: `'#00796b'`
- `noButtonColor`: `'#c9302c'`
- `buttonLayout`: `'vertical'`
- `yesAction`: `closeModal`
- `noAction`: `closeModal`

## Modal CSS
The modal's CSS styles are defined in the script and are automatically injected into the document when the modal is created. You can customize these styles directly in the `addModalStyles` function if needed.

## Closing the Modal
The modal can be closed in several ways:
- By clicking the close (×) button.
- By pressing the "Escape" key.

## Important Notes
- Ensure that the icons used are properly loaded (e.g., Font Awesome) in your project if you choose to use icon classes.
- The modal is dynamically created and added to the DOM. It will be removed once closed to prevent duplication.

## Conclusion
`modal.js` provides a flexible and reusable modal component for your web applications. You can easily customize its appearance and functionality based on your needs, including the use of icons and links.

## Contact

For any questions or contributions, please feel free to reach out via [GitHub](https://github.com/NOSIBBiswas22/).
 [Facebook](https://www.facebook.com/nosib.biswas.227).
 [Website](https://nosibbiswas22.github.io/nosibbiswas/).

## Date

Last updated: October 24, 2024

## License

Copyright (c) [2024] [Nosib Biswas]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
