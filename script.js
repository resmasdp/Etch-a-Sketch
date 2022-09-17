//Html selectors

const body = document.getElementById("gridContainer");


//create container
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "container");
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";
newDiv.style.width = "100%" ;
newDiv.style.height = "100%";
newDiv.innerHTML = "";


//create 16 divs with class grid
function makeGrid(rows,columns){


    for (let row = 0; row < rows; row++) {

        const gridRow = document.createElement("div");
        gridRow.setAttribute("id", "row" + row);
        gridRow.style.display = "flex";
        gridRow.style.width = "100%/rows" ;
        gridRow.style.height = (100/rows)% ;
    
    
        for (let column = 0; column < columns; column++) {
    
            const gridColumn = document.createElement("div");
            gridColumn.setAttribute("id", row + "x" + column);
            gridColumn.setAttribute("class", "grid");
            gridColumn.style.height = "100%"
            gridColumn.style.width = "6.25%"
            gridColumn.style.border = "solid 1px";
            gridColumn.addEventListener('mouseover', turnblack);
            gridRow.appendChild(gridColumn);
        }
        newDiv.appendChild(gridRow);
        
    }
    //add everything to html
    body.appendChild(newDiv);
}







function turnblack(e){
    const toTurnBlack = document.getElementById(e.target.id);
    toTurnBlack.style.backgroundColor = "black";
    

}
