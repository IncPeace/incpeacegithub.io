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
    elementIds.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const currentDisplay = window.getComputedStyle(element).display;
            element.style.display = currentDisplay === "none" ? "inline-block" : "inline-block";

            // Toggle child elements
            const childElements = element.getElementsByTagName('*');
            for (let i = 0; i < childElements.length; i++) {
                const child = childElements[i];
                const childDisplay = window.getComputedStyle(child).display;
                child.style.display = childDisplay === "none" ? "inline-block" : "inline-block";
            }
        }
    });
    console.log("inline-block display now on for:" + elementIds);
}



function toggleDisplayBlock(elementIds) {
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
        }
    });
    console.log("block display now on for:" + elementIds);
}


function toggleDisplayOff(elementIds) {
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
                child.style.display = currentDisplay === "inline-block" ? "none" : "none";
            }
        }
    });
    console.log("display now off  for:" + elementIds);
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

// function getElementsWithPrefixExcluding(prefix, idToExclude) {
//     const elementsWithPrefix = [];
//     const allElements = document.getElementsByTagName('*'); // Get all elements on the page
//
//     for (let i = 0; i < allElements.length; i++) {
//         const element = allElements[i];
//         if (element.id && element.id.startsWith(prefix) && element.id !== idToExclude) {
//             elementsWithPrefix.push(element);
//         }
//     }
//
//     return elementsWithPrefix;
// }

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
}

document.addEventListener("DOMContentLoaded", function () {
    const expandableSections = document.querySelectorAll(".expandable-section");

    expandableSections.forEach(function (section) {
        section.addEventListener("click", function () {
            const heading = this.querySelector(".expandable-heading");
            const content = this.querySelector(".expandable-content");

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

// document.addEventListener("DOMContentLoaded", function () {
//     const headings = document.querySelectorAll(".expandable-heading");
//     headings.forEach(function (heading) {
//         heading.addEventListener("click", function () {
//             const content = this.nextElementSibling;
//             if (content.style.display === "none" || content.style.display === "") {
//                 content.style.display = "block";
//             } else {
//                 content.style.display = "none";
//             }
//         });
//     });
// });


// function togglesubordinatestatus(elementIds) {
//     elementIds.forEach((elementId) => {
//         const element = document.getElementById(elementId);
//         if (element) {
//             element.classList.toggle("transparent");
//         }
//     });
// }
