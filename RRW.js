
// window.onload = function () {
document.addEventListener("DOMContentLoaded", function () {
    const element1 = document.getElementById("element1");
    const element2 = document.getElementById("element2");
    const line = document.createElement("div");
    line.id = "line";

    // Calculate coordinates for the line
    const x1 = element1.getBoundingClientRect().left + element1.offsetWidth / 2;
    const y1 = element1.getBoundingClientRect().bottom;
    const x2 = element2.getBoundingClientRect().left + element2.offsetWidth / 2;
    const y2 = element2.getBoundingClientRect().top;

    // Create the line element
    // const line = document.createElement("div");
    line.classList.add("line");
    line.style.position = "absolute";
    line.style.width = "2px"; // Adjust line width as needed
    line.style.height = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + "px";
    line.style.transformOrigin = "top left";
    line.style.transform = `translate(${x1}px, ${y1}px) rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;


    // // Calculate the positions of the elements
    // const rect1 = element1.getBoundingClientRect();
    // const rect2 = element2.getBoundingClientRect();
    //
    // // Calculate the line's position and dimensions
    // const left = rect1.left + rect1.width / 2;
    // const top = rect1.top + rect1.height;
    // const width = Math.abs(rect2.left - rect1.left);
    // const height = 2; // Line thickness
    //
    // // Set the line's position and dimensions
    // line.style.position = "absolute";
    // line.style.left = left + "px";
    // line.style.top = top + "px";
    // line.style.width = width + "px";
    // line.style.height = height + "px";

    // Append the line to the body
    document.body.appendChild(line);
});
// };
