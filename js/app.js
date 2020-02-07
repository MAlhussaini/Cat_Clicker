let img = "img/Carton/kitten.png";
let tag = "kitten";

for (let i = 1; i <= 5; i++) {
    // Make a counter variable for each div cat
    let clickCounter = 0;

    // Create the div container of each cat
    newDivElement = document.createElement("div");

    // Create the title tag and append it to the div continuer
    newTagElement = document.createElement("h1");
    newTagElement.textContent = tag;
    newDivElement.appendChild(newTagElement);

    // Create the cat's img and append it to the div continuer
    newImgElement = document.createElement("img");
    newImgElement.setAttribute("src", img);
    newImgElement.setAttribute("class", "kitten");
    newImgElement.setAttribute("alt", "cat img");
    newDivElement.appendChild(newImgElement);

    // Create the counter and append it to the div continuer
    newCounterElement = document.createElement("h1");
    newCounterElement.setAttribute("id", "numOfClicks");
    newCounterElement.textContent = "00";
    newDivElement.appendChild(newCounterElement);

    newImgElement.addEventListener("click", (function() {
        return function() {
        clickCounter++;
        if (clickCounter < 10) {
            clickCounter = "0" + clickCounter;
        }
        newCounterElement.innerHTML = clickCounter;
    }})())

    document.body.appendChild(newDivElement);
}