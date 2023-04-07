function creatingGrids() {
    const body = document.querySelector("body");
    const h = window.innerHeight;
    const w = window.innerWidth;

    //creating rows of grids
    for(let i = 0; i < (h/16) ; i++){
        //creating a div for one row of grids
        const oneRowGrid = document.createElement("div");
        oneRowGrid.classList.add(`gridRow${i}`)
        body.appendChild(oneRowGrid)

        //creating one grid
        for(let j = 0; j < (w/16); j++){
            const grid = document.createElement("div");
            grid.style.cssText = "height: 16px;width: 16px;";
            oneRowGrid.appendChild(grid);
        }
        oneRowGrid.style.cssText = "display:flex;";
        
    }
}

creatingGrids();
