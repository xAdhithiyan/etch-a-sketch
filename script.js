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
            grid.addEventListener("mouseover", function() {
                this.classList.add("blackhov")
            }, false);

            oneRowGrid.appendChild(grid);
        }
        
        oneRowGrid.style.cssText = "display:flex;";
    

    }
}

function creatingBase(){
    let h = window.innerHeight;
    let w = window.innerWidth;  

    //taking 80 percent of screen height and width
    h = Math.floor((h * 70) / 100);
    w = Math.floor((w * 75) / 100);

    let num = 16; // number of grids in the width direction
    let w1 = w / num; // size of each grid
    let h1 = Math.floor(h / w1); // number of rows

    // adjusting the height w.r.t to width and grid size
    h = h - (h%w1)

    const body = document.querySelector("body");
    const base = document.createElement("div");
    base.style.cssText = `height:${h}px;width:${w}px;`;
    base.classList.add("basee")
    body.appendChild(base);

    creatingGrids(num,h1,w1);

}
creatingBase();