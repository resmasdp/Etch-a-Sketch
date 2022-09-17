//Html selectors

const body = document.getElementById("gridContainer");


//create container
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "container");
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";
newDiv.style.width = "100%" ;
newDiv.style.height = "100%";




document.getElementById("submit").addEventListener("click", makeGrid);



//create 16 divs with class grid
function makeGrid(){
    
    newDiv.innerHTML = "";
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    console.log(rows * columns);

    for (let row = 0; row < rows; row++) {

        const gridRow = document.createElement("div");
        gridRow.setAttribute("id", "row" + row);
        gridRow.style.display = "flex";
        gridRow.style.width = "100%" ;
        gridRow.style.height = 100/rows + "%" ;
    
    
        for (let column = 0; column < columns; column++) {
    
            const gridColumn = document.createElement("div");
            gridColumn.setAttribute("id", row + "x" + column);
            gridColumn.setAttribute("class", "grid");
            gridColumn.style.height = "100%"
            gridColumn.style.width = 100/columns + "%";
            gridColumn.style.border = "solid 1px";
            gridColumn.addEventListener('mouseover', turnblack);
            gridRow.appendChild(gridColumn);
        }
        newDiv.appendChild(gridRow);
              
    }
    //add everything to html
    body.appendChild(newDiv);
}

//sets a class that has background-color: black
function turnblack(e){
    const toTurnBlack = document.getElementById(e.target.id);
    toTurnBlack.style.backgroundColor = "black";
    

}
