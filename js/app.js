
let clickCounter = 0;
let displayedCount = document.getElementById("numOfClicks");
let clicker = document.getElementById("kitten");

clicker.addEventListener("click", function() {
    clickCounter++;
    if (clickCounter < 10) {
        clickCounter = "0" + clickCounter;
    }
    displayedCount.innerHTML = clickCounter;
})