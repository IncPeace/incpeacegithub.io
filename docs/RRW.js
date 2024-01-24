// Add an event listener to run the function when the window is resized.
window.addEventListener("resize", checkViewportSize);

// Call the function initially to check the viewport size when the page loads.
checkViewportSize();

function checkViewportSize() {
    const windowWidth = window.innerWidth
    if (windowWidth < 1500) {
        // Perform an action when the viewport width is below 768 pixels
        // You can replace the console.log with your desired action.
        console.log("Viewport width is below 768 pixels.");
    }
    console.log("Viewport width is " + windowWidth.toString() + "pixels.");
}


function toggleTransparencyOn(elementIds) {
    elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            // if (element.id === elementId) {
                const currentOpacity = parseFloat(window.getComputedStyle(element).opacity);
                if (currentOpacity < 1) {
                    element.style.opacity = "1";
                }
            // }
        }
    });
}

function toggleTransparencyOff(elementIds) {
    elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const currentOpacity = parseFloat(window.getComputedStyle(element).opacity);
            if (currentOpacity === 1) {
                element.style.opacity = "0.0"; // You can set the desired opacity here
            }
        }
    });
}

function myClickHandler(whateverinput) {
    // const inputString = whateverinput.toString(); // Convert to string
    // console.log("console input string" + inputString + "gives the result:" + whateverinput);
    console.log("console result:" + whateverinput);
}


function toggleDisplayOn(elementIds) {
    const changelist = [];
    elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            // console.log("inline-block display now on for this exact:" + toString(element));
            const currentDisplay = window.getComputedStyle(element).display;
            element.style.display = currentDisplay === "none" ? "inline-block" : "inline-block";

            // Toggle child elements
            const childElements = element.getElementsByTagName('*');
            for (let i = 0; i < childElements.length; i++) {
                const child = childElements[i];
                const childDisplay = window.getComputedStyle(child).display;
                child.style.display = childDisplay === "none" ? "inline-block" : "inline-block";
            }
        // Add the element name to the changelist array
        changelist.push(element);
        }
    });
    // console.log("inline-block display now on for (input):" + elementIds);
    // console.log("inline-block display now on for (new):" + changelist.join(', ')); // Join the array elements with a comma and space
}



function toggleDisplayBlock(elementIds) {
    const changelist = [];
    elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const currentDisplay = window.getComputedStyle(element).display;
            element.style.display = currentDisplay === "none" ? "block" : "block";

            // Toggle child elements
            const childElements = element.getElementsByTagName('*');
            for (let i = 0; i < childElements.length; i++) {
                const child = childElements[i];
                const childDisplay = window.getComputedStyle(child).display;
                child.style.display = childDisplay === "none" ? "block" : "block";
            }
        // Add the element name to the changelist array
        changelist.push(element);
        }
    });
    // console.log("block display now on for (inputs):" + elementIds);
    // console.log("block display now on for:" + toString(changelist));
}


function toggleDisplayOff(elementIds) {
    const changelist = [];
    elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const currentDisplay = window.getComputedStyle(element).display;
            element.style.display = currentDisplay ===  "inline-block" ? "none" : "none" //"none" ? "block" : "none"; //
            // Toggle child elements
            const childElements = element.getElementsByTagName('*');
            for (let i = 0; i < childElements.length; i++) {
                const child = childElements[i];
                const currentDisplay = window.getComputedStyle(child).display;
                child.style.display =  currentDisplay === "inline-block" ? "none" : "none";
                // console.log("display now off  for child:" + child);
            }
            // Add the element name to the changelist array
            changelist.push(toString(element));
        }
    });
    // console.log("elements input: " + elementIds);
    // console.log("display now off  for elements:" + toString(changelist));
}

function toggleAlignment() {
    const navItems = document.querySelectorAll('.nav li');

    navItems.forEach((item) => {
        if (item.style.float === '' || item.style.float === 'left') {
            item.style.float = 'none';
            item.style.margin = '0 auto'; // Center alignment
        } else {
            item.style.float = 'left'; // Left alignment
            item.style.margin = ''; // Reset margin
        }
    });
}
                                                // This section contains my get array of elements functions

function getArrayofElementsWithPrefixExcluding(prefix, ...idsToExclude) {
    const elements = document.querySelectorAll('[id^="' + prefix + '"]');
    const elementIds = [];
    elements.forEach((element) => {
        const elementId = element.id;
        if (!idsToExclude.includes(elementId)) {
            elementIds.push(elementId);
        }
    });
    return elementIds;
}


function getElementsWithPrefixExcluding(prefix, idToExclude) {
    const elements = document.querySelectorAll('[id^="' + prefix + '"]');
    const elementIds = [];
    elements.forEach((element) => {
        const elementId = element.id;
        if (elementId !== idToExclude) {
            elementIds.push(elementId);
        }
    });
    return elementIds;
    // console.log("array of element Ids: " + elementIds);
}

                                                // This section contains my expandable content functions

// This is my expandable sections function for my hidden container box

document.addEventListener("DOMContentLoaded", function () {
    const expandableSections = document.querySelectorAll(".expandable-section");

    expandableSections.forEach(function (section) {
        const heading = section.querySelector(".expandable-heading");
        const content = section.querySelector(".expandable-content");

        heading.addEventListener("click", function () {
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                heading.style.display = "block";
            } else {
                content.style.display = "none";
                heading.style.display = "block"; // You can adjust this to your preferred behavior
            }
        });
    });
});


// This is my pop-up box function
document.addEventListener("DOMContentLoaded", function () {
    const triggerLinks = document.querySelectorAll(".trigger-link");
    triggerLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default behavior of links
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                //                 // Toggle the visibility of the target element
                if (targetElement.style.visibility === "hidden" || targetElement.style.visibility === "") {
                    targetElement.style.visibility = "visible";
                    targetElement.style.display = "block";
                } else {
                    targetElement.style.visibility = "hidden";
                }
                const contentElements = targetElement.querySelectorAll(".content");
                contentElements.forEach(function (contentElement, index) {
                    const contentId = contentElement.id;
                    if (index === 0 || contentId.includes("-1")) {
                        contentElement.style.display = "block";
                    } else {
                        contentElement.style.display = "none";
                    }
                });

            }

            // Hide other content elements
            const otherContentElements = document.querySelectorAll(".content:not([id*='-1'])");
            otherContentElements.forEach(function (contentElement) {
                contentElement.style.display = "none";
            });

            // Hide other popup-elements
            const popupElements = document.querySelectorAll(".popup-element");
            popupElements.forEach(function (popupElement) {
                if (popupElement !== targetElement) {
                    popupElement.style.display = "none";
                }
            });
        });
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const triggerLinks = document.querySelectorAll(".trigger-link");
//     triggerLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent the default behavior of links
//             const targetId = this.getAttribute("data-target");
//             const targetElement = document.getElementById(targetId);
//
//             if (targetElement) {
//                 const popupElements = document.querySelectorAll(".popup-element");
//                 popupElements.forEach(function (popupElement) {
//                     if (popupElement !== targetElement) {
//                         popupElement.style.visibility = "hidden";
//                         popupElement.style.display = "none";
//                     }
//                 });
//
//                 // Toggle the visibility of the target element
//                 if (targetElement.style.visibility === "hidden" || targetElement.style.visibility === "") {
//                     targetElement.style.visibility = "visible";
//                     targetElement.style.display = "block";
//                 } else {
//                     targetElement.style.visibility = "hidden";
//                 }
//             }
//         });
//     });
// });

//  This is my close box function

document.addEventListener("DOMContentLoaded", function () {
    // Function to hide a popup element by its ID
    function hidePopupElement(elementId) {
        console.log(`Hiding element with ID: ${elementId}`);
        const popupElement = document.querySelector(`#${elementId}`);
        if (popupElement) {
            popupElement.style.visibility = "hidden";
            popupElement.style.display = "none";
        }
    }

    const closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            console.log(`Button clicked, targetId: ${targetId}`);
            hidePopupElement(targetId);
            console.log("button pressed");
        });
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const closeButton = document.querySelector(".close-button");
//
//     closeButton.addEventListener("click", function () {
//         const popupElements = document.querySelectorAll(".popup-element");
//         popupElements.forEach(function (popupElement) {
//             popupElement.style.visibility = "hidden";
//             popupElement.style.display = "none";
//         });
//         console.log("button pressed");
//     });
//
//     // You can also add an event listener to display the popup when needed.
//     // For example, when a button with class "open-popup-button" is clicked:
//     // const openPopupButton = document.querySelector(".open-popup-button");
//     // openPopupButton.addEventListener("click", function () {
//     //     popupElement.style.display = "block";
//     // });
// });

function toggleContent(setNumber) {
    let currentIndex = 1; // Initialize with the first content
    console.log(`Button clicked!`);

    return function () {
        const currentContent = document.getElementById(`content${setNumber}-${currentIndex}`);
        currentContent.style.display = "none"; // Hide the current content

        currentIndex = currentIndex === 3 ? 1 : currentIndex + 1; // Toggle to next content or wrap to the first
        const nextContent = document.getElementById(`content${setNumber}-${currentIndex}`);
        nextContent.style.display = "block"; // Show the next content

        console.log(`Button clicked, targetId: ${setNumber} - ${currentIndex} `);
    };
}

