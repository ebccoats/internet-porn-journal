

const dialogPopup = document.getElementById("dialog-popup");

const dialogButton = document.getElementById("dialog-button");
dialogButton.addEventListener("click", function(event) {
    dialogPopup.close();
});

const popupButton = document.getElementById("popup");
popupButton.addEventListener("click", function(event) {
    dialogPopup.showModal();

});


// stateful curator
let curatorState = {
    annoyance: 0,
    dialog: {
        0: "Please refrain from clicking the button; the wear and tear piles up quickly.",
        1: "It is a fascinating button, but please do not touch the works in this exhibit.",
        2: "Look with your eyes not your cursor THANK YOU :)",
        3: "Stop clicking the button.",
        4: "You don't care about ruining this historical button. You hardly deserve the privilege of seeing it.",
        5: "This is your last chance to stop clicking the button. Look at the rest of the page or else.",
        6: "Your button-clicking privileges have been revoked. The button is now closed for clicking." 
    },
    state_display: {
        0: "not annoyed",
        1: "miffed",
        2: "irritated",
        3: "seriously offended",
        4: "so over it",
        5: "kicking you out",
        6: "you have been kicked out, you have lost the privilege of clicking the historical button"
    }
}

const curatorStateDisplay = document.getElementById("state-display");

const stateDialog = document.createElement('dialog');
document.body.appendChild(stateDialog);

const stateDialogButton = document.createElement('button');
stateDialogButton.innerHTML = "OK";
stateDialogButton.addEventListener("click", function(event) {
    stateDialog.close();
})

const annoyCurator = document.getElementById("state");
annoyCurator.addEventListener("click", function(event) {
    if (curatorState.annoyance === Object.keys(curatorState.dialog).length) {
        return;
    }
    stateDialog.innerHTML = `<p>${curatorState.dialog[curatorState.annoyance]}</p>`;
    stateDialog.appendChild(stateDialogButton);
    stateDialog.showModal();
    curatorStateDisplay.innerHTML = `Curator state: ${curatorState.state_display[curatorState.annoyance]}`;
    curatorState.annoyance += 1;
    
});

// highlight selection code
const selectDisplay = document.getElementById("select-display");
const displaySelect = document.getElementById("display-select");

const selectTarget = document.getElementById("select-target");
selectTarget.addEventListener('mouseup', () => {
    const highlightedText = window.getSelection();
    if (highlightedText) {
        selectDisplay.innerHTML = highlightedText;
        displaySelect.innerHTML = highlightedText;
    }
})


// parental tattle-receiving code
const parentDisplay = document.getElementById("parent-display");

function receiveMessage(event) {
    const expectedOrigin = "*"; // be very careful using this
    //  make this your domain
    if (expectedOrigin !== "*" && event.origin !== expectedOrigin) {
        console.warn("Received message from untrusted origin:", event.origin);
        return; // crucial security step.
    }

    const receivedData = event.data;
    parentDisplay.innerHTML = receivedData;
}

window.addEventListener("message", receiveMessage, false);