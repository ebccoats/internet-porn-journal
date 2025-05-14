const targetOrigin = "*" //replace this with the actual domain

const tattleTarget = document.getElementById("tattle-target");
tattleTarget.addEventListener('mouseup', () => {
    const highlightedText = window.getSelection();
    if (highlightedText) {
        window.parent.postMessage(highlightedText.toString(), targetOrigin);
    }
})