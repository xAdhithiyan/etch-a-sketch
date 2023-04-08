function creatingGrids(num,h1,w1) {
    //creating rows of grids
    for(let i = 0; i < h1; i++){
        //creating a div for one row of grids
        const oneRowGrid = document.createElement("div");
        oneRowGrid.classList.add(`gridRow${i}`)
        const main = document.querySelector(".basee");
        main.appendChild(oneRowGrid)

        //creating one grid
        for(let j = 0; j < num; j++){
            const grid = document.createElement("div");
            grid.style.cssText = `height:${w1}px;width:${w1}px;`;
            grid.classList.add("dummy");
            grid.addEventListener("mouseover", function() {
                if(color != "rainbow"){
                    this.style.backgroundColor = `${color}`;
                    this.style.transition = "all 0.4s"
                }else{
                    this.style.backgroundColor = `${gettingRainbowColor()}`;
                    this.style.transition = "all 0.4s";
                }
            }, false);
            oneRowGrid.appendChild(grid);
        }
        oneRowGrid.style.cssText = "display:flex;";
    }
}

//happens only when the slider is used/clear button
function creatingBase(num = 40){
    let h = window.innerHeight;
    let w = window.innerWidth;  

    //taking 80 percent of screen height and width
    h = Math.floor((h * 65) / 100);
    w = Math.floor((w * 75) / 100);

    // number of grids in the width direction
    let w1 = w / num; // size of each grid
    let h1 = Math.floor(h / w1); // number of rows

    // adjusting the height w.r.t to width and grid size
    h = h - (h%w1)

    //customising buttons
    const btns = document.querySelectorAll("button");
    btns.forEach(function(n){n.style.cssText = `height:50px; width:${ (w * 17) / 100}px`})

    const body = document.querySelector("body")
    const base = document.createElement("div");
    base.style.cssText = `height:${h}px;width:${w}px;`;
    base.classList.add("basee")
    body.insertBefore(base,body.childNodes[2])

    creatingGrids(num,h1,w1);

}



//user changing number of grids(repeatable process)
function sliderInput(){
    creatingBase(sliderValue);
    let slider = document.querySelector(".slider");
    slider.addEventListener("input", function(){
        color = "black";
        const body = document.querySelector("body");
        const mainDiv = document.querySelector(".basee");
        body.removeChild(mainDiv);
        //changing slider value gui
        const slider1 = document.querySelector(".slider2");
        slider1.textContent = `${slider.value}`;
        sliderValue = slider.value;
        creatingBase(slider.value);
    });
}

//for changing color(repeatable process)
function changingColor(){
    let col = document.querySelector(".color");
    col.addEventListener("input" ,function(n){
        color = n.target.value;
    });

}

//for earsing color(repeatable process)
function erasingColor(){
    let eraser = document.querySelector(".eraser");
    eraser.addEventListener("click",function(){
        color = "white";
    })
}

//for clearing all the color(repeatable process)
function clearingColor(){
    let clear = document.querySelector(".clear");
    clear.addEventListener("click",function(){
        const body = document.querySelector("body");
        const mainDiv = document.querySelector(".basee");
        body.removeChild(mainDiv);
        color = "black";
        sliderInput();
    })
}

//initializing rainbow color
function rainbowColor(){
    let rainbow = document.querySelector(".rainbow");
    rainbow.addEventListener("click",function(){
        color = "rainbow"; 
    });
}

//getting random rainbow color
function gettingRainbowColor(){
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}


// all the used functions
function allFunctions(){
    rainbowColor();
    clearingColor();
    erasingColor();
    changingColor();
    sliderInput();
}


//just in case if the board resets the value of slider is still intact
let sliderValue = 40;
//defualt grid color(global variable)
let color = "black";
allFunctions();