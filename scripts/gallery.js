let mainTitle = null;

window.onload = function() {
    mainTitle = document.getElementById("logo-title");
    console.log(mainTitle); 
    if (mainTitle) {
        setupClick();
    }
    
}

const randoPixels = ["10px", "-10px"]
const floaties = [];
let floaties_floating = false;

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function setupClick() {
    mainTitle.onclick = function() {
        makeFloatie();
    }
}

function makeFloatie() {

    const pornmoji = [
        "( ͜. ㅅ ͜. )",
        "( • )( • )",
        "( ๏ 人 ๏ )",
        "({})",
        ")(i)(",
        "(‿ㅅ‿)",
        "8===D",
        "с=3",
        "ूाीू",
        "╰⋃╯"
    ]

    const randomPornmoji = getRandomItem(pornmoji);
    const newDiv = document.createElement("div");
    newDiv.classList.add("drifting-obscenity");

    const newContent = document.createTextNode(randomPornmoji);
    newDiv.appendChild(newContent);
    console.log("main title", mainTitle);
    floaties.push(newDiv);
    newDiv.style.top = "10px";
    newDiv.style.left = "10px";
    newDiv.style.opacity = 1;
    mainTitle.parentElement.insertBefore(newDiv, mainTitle);
    console.log(newDiv);
    floaties_floating = true;

    float();

}

function float() {
    for (i in floaties) {
        const x = floaties[i].style.left;
        const y = floaties[i].style.top;
        console.log("x, y:", x, y);

        const opacity = floaties[i].style.opacity;

        let changeBy = getRandomItem(randoPixels);
        console.log(changeBy);
        floaties[i].style.left = addPixels(changeBy, floaties[i].style.left);
        changeBy = getRandomItem(randoPixels);
        floaties[i].style.top = addPixels(changeBy, floaties[i].style.top); 

        if (floaties[i].style.opacity >= 0.1) {
            floaties[i].remove();
            floaties.splice(i, 1); // 2nd parameter means remove one item only
        } else {
            floaties[i].style.opacity = floaties[i].style.opacity - 0.1;
        }
        console.log("x, y:", x, y);
    }
}

function addPixels(original_pixels, pixels_to_add) {
    const originalPixels = original_pixels.slice(0, -2);
    const oPixelsNumber = parseInt(originalPixels, 10);

    const addPixels = pixels_to_add.slice(0, -2);
    const aPixelsNumber = parseInt(addPixels, 10);

    const addedPixels = String(aPixelsNumber + oPixelsNumber) + "px";

    console.log(addedPixels)
    return addedPixels;
  
}




