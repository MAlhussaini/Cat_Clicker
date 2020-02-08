let img = "img/Carton/kitten.png";
let tag = "kitten";
let totalCats = 5;


(function creatingTheDom(totalCats, img, tag) {
    newUnsortedList = document.createElement("ul");

    for (let i = 1; i <= totalCats; i++) {
        // Make a counter variable for each div cat
        let clickCounter = 0;

        // Create a list of all the cats
        newListElement = document.createElement("li");
        newListTitle = document.createElement("h3");
        newListTitle.textContent = tag + i
        newListElement.setAttribute("id", tag+i);
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

        // Add eventListener to each cat img to add counting functionality
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
        // Append new list item to unsorted list collection
        newUnsortedList.appendChild(newListElement);

        // Append new cat container to the body
        document.body.appendChild(newDivElement);
    }
    // document.body.appendChild(newUnsortedList);
    document.body.insertAdjacentHTML('afterbegin', newUnsortedList.outerHTML);
    
    catsArr = document.getElementsByClassName("catItem");
    containersArr = document.getElementsByClassName("catContainer");

    for (i=0; i < totalCats; i++){
        catsArr[i].addEventListener("click", (function (catContainer) {
            return function () {
                if (document.querySelector(".unhide") !== null) {
                    document.querySelector(".unhide").classList.remove("unhide")
                }
                catContainer.setAttribute("class", "unhide")
            }
        })(containersArr[i]))
    }

})(totalCats, img, tag);