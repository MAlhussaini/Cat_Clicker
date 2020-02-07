let img = "img/Carton/kitten.png";
let tag = "kitten";
let clickCounter = 0;

for (let i = 1; i <= 5; i++) {
    newDivElement = document.createElement("div");

    newTagElement = document.createElement("h1");
    newTagElement.textContent = tag;
    newDivElement.appendChild(newTagElement);

    newImgElement = document.createElement("img");
    newImgElement.setAttribute("src", img);
    newImgElement.setAttribute("class", "kitten");
    newImgElement.setAttribute("alt", "cat img");
    newDivElement.appendChild(newImgElement);

    newCounterElement = document.createElement("h1");
    newCounterElement.setAttribute("id", "numOfClicks");
    newCounterElement.textContent = "00";
    newDivElement.appendChild(newCounterElement);

    newImgElement.addEventListener("click", function() {
        clickCounter++;
        if (clickCounter < 10) {
            clickCounter = "0" + clickCounter;
        }
        newCounterElement.innerHTML = clickCounter;
    })

    document.body.appendChild(newDivElement);
}