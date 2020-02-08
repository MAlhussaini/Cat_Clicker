let img = "img/Carton/kitten.png";
let tag = "kitten";
let totalCats = 5;


(function creatingTheDom(totalCats, img, tag) {
    // Create the container of the cats list
    newUnsortedList = document.createElement("ul");

    // Loop for the total cats and create DOM for each one
    for (let i = 1; i <= totalCats; i++) {
        // Make a counter variable for each div cat
        let clickCounter = 0;

        // Create a list item of each cat
        newListElement = document.createElement("li");
        newListTitle = document.createElement("h3");
        newListTitle.textContent = tag + i
        newListElement.setAttribute("id", tag + i);
        newListElement.setAttribute("class", "catItem");
        newListElement.appendChild(newListTitle);


        // Create the div container of each cat
        newDivElement = document.createElement("div");
        newDivElement.setAttribute("class", "catContainer");

        // Create the title tag and append it to the div continuer
        newTagElement = document.createElement("h1");
        newTagElement.textContent = tag + i;
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

        // Add counting functionality to each cat img
        newImgElement.addEventListener("click", (function (counterDomElement) {
            return function () {
                clickCounter++;
                if (clickCounter < 10) {
                    clickCounter = "0" + clickCounter;
                }
                counterDomElement.innerHTML = clickCounter;
            }
        })(newCounterElement))
        /* 
                // !Add eventListener to each list item to show cats
                console.log(newListElement)
                newListElement.addEventListener("click", (function (catContainer) {
                    console.log('I am here ')
                    console.log(catContainer)
                    return function () {
                        console.log(catContainer);
                        console.log(tag + i);
                        catContainer.setAttribute("class", "unhide");
                    }
                })(newDivElement))    
         */
        // Append new cat item to unsorted list collection
        newUnsortedList.appendChild(newListElement);

        // Append the container of each cat to the end of the body
        document.body.appendChild(newDivElement);
    }
    // Append the list to the begging of the page
    document.body.insertAdjacentHTML('afterbegin', newUnsortedList.outerHTML);

    // Create an array that hold the cats list items
    let catsArr = document.getElementsByClassName("catItem");
    // Create an array that hold the cats container
    let containersArr = document.getElementsByClassName("catContainer");

    // Loop to add clicking functionality to each list item
    for (i = 0; i < totalCats; i++) {
        catsArr[i].addEventListener("click", (function (catContainer) {
            return function () {
                // Check for elements on screen
                if (document.querySelector(".unhide") !== null) {
                    // Hide the cat from the page
                    document.querySelector(".unhide").classList.remove("unhide")
                }
                // Show the cat to the page
                catContainer.setAttribute("class", "unhide")
            }
        })(containersArr[i]))
    }

})(totalCats, img, tag);