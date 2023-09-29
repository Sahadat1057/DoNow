function createParagraph() {
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("q")
    para1.textContent = "I once felt uninspired";
    para2.textContent = "But my brain got rewired/";
    para3.textContent = "uwgfhjnwgu";
    para4.textContent = "i8gujwogh9uwj";
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
    document.body.appendChild(para4);

}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    const numberOfClicks = 
    button.addEventListener("click", createParagraph);
}
