
function counterFunction(displayedCountID, clickerID) {
    let clickCounter = 0;
    let displayedCount = document.getElementById(displayedCountID);
    let clicker = document.getElementById(clickerID);

    clicker.addEventListener("click", function() {
        clickCounter++;
        if (clickCounter < 10) {
            clickCounter = "0" + clickCounter;
        }
        displayedCount.innerHTML = clickCounter;
        
    
    })    
}

counterFunction("kittenClicks1", "kitten1");
counterFunction("kittenClicks2", "kitten2");
