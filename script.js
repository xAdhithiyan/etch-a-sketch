function creatingGrids(h,w) {
    //creating rows of grids
    for(let i = 0; i < (h/16) ; i++){
        //creating a div for one row of grids
        const oneRowGrid = document.createElement("div");
        oneRowGrid.classList.add(`gridRow${i}`)
        const main = document.querySelector(".basee");
        main.appendChild(oneRowGrid)

        //creating one grid
        for(let j = 0; j < (w/16); j++){
            const grid = document.createElement("div");
            grid.style.cssText = "height: 16px;width: 16px;q";
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
    h = Math.floor((h * 75) / 100);
    w = Math.floor((w * 80) / 100);
    console.log(h,w)
    const body = document.querySelector("body");
    const base = document.createElement("div");
    base.style.cssText = `height:${h}px;width:${w}px;`;
    base.classList.add("basee")
    body.appendChild(base);

    creatingGrids(h-2,w-4)
}
creatingBase();