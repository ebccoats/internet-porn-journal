const ladyImage = document.getElementById("sexylady");
ladyImage.style.visibility = 'hidden';

const showLady = document.getElementById("activate-sexy-lady");
showLady.onclick = function() {
    ladyImage.style.visibility = 'visible';
    ladyImage.src = "journal-assets/lil-nudie.png";
}

const asciiLady = document.getElementById("asciivate-sexy-lady");
asciiLady.onclick = function() {
    ladyImage.style.visibility = 'visible';
    ladyImage.src = "journal-assets/ascii-art.png";
} 