


class Floaties {
    pornmoji = [
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
    ]; 
    activeFloaties = [];
    timing = 100; //milliseconds
    intervalId;
    parent;
    constructor (parent) {
        this.parent = parent.parentElement;
        this.intervalId = setInterval(() => {
            this.updateFloaties();
        }, this.timing);
    }
    
    getRandomPornmoji() {
        const index = Math.floor(Math.random() * this.pornmoji.length);
        return this.pornmoji[index]; 
    }

    makeFloatie = (x, y) => {
       const randomPornmoji = this.getRandomPornmoji();
       const randomLife = Math.floor(Math.random() * 50);
       
       function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
       }

       const newFloatie = document.createElement("div");
       newFloatie.textContent = randomPornmoji;
       newFloatie.style.position = "absolute";
       newFloatie.className = "drifting-obscenity";
       newFloatie.classList.add("museum-card");
       newFloatie.style.width = "fit-content";
       this.parent.appendChild(newFloatie);
       const newFloatieObject = {
        div: newFloatie,
        x: x,
        y: y,
        driftX: getRandomArbitrary(-0.9, 0.9),
        driftY: getRandomArbitrary(-0.9, 0.9),
        amplitude: 10,
        frequency: 10,
        speed: getRandomArbitrary(10, 30),
        lifespan: randomLife
       }
       newFloatie.style.transition = ".4s";
       newFloatie.style.top = `${y}px`;
       newFloatie.style.left = `${x}px`;

       this.activeFloaties.push(newFloatieObject);

    }

    updateFloaties = () => {
        for (const item of this.activeFloaties) {
            const timeFactor = item.speed * (performance.now() * item.lifespan) / 1000;
            item.y = item.y + item.amplitude * Math.sin(item.frequency * timeFactor) * item.driftY;
            item.x = item.x + (item.speed * item.driftX);
 
            

            item.div.style.top = `${item.y}px`;
            item.div.style.left = `${item.x}px`;

            if (item.lifespan <= 0) {
                //destroy the div element
                item.div.remove();

            } else {
                item.lifespan = item.lifespan - 1;
                item.div.style.opacity = item.lifespan * 0.9;
            }


        }
    }

    

}

let floaties = null;

let mainTitle = null;



window.onload = function() {
    mainTitle = document.getElementById("logo-title");
    console.log(mainTitle);
    if (mainTitle) {
        floaties = new Floaties(mainTitle);
        mainTitle.onclick = function(event) {
            const x = event.pageX;
            const y = event.pageY;
            floaties.makeFloatie(x, y);
        }
    }
    
}