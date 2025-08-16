// we find the vieport with and container height to scale our grid the best we can
const viewportWidth = window.innerWidth;
const container = document.querySelector(".content-container");
const containerHeight = container.clientHeight;
console.log("🚀 ~ containerHeight:", containerHeight)

// we define a cell size 
// that way we can scale the grid to be as close as we can to 100% width and height of the container
const CELL_SIZE_IN_PX = 10;
const GRID_HEIGHT = containerHeight/CELL_SIZE_IN_PX;
const GRID_WIDTH = viewportWidth/CELL_SIZE_IN_PX;

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    gridReset();
})

// lets build our grid array
let grid = [];

for(let i = 0; i < GRID_HEIGHT; i++) {
    grid[i] = [];
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j = 0; j < GRID_WIDTH; j++) {
        const gridItem = document.createElement("div");

        gridItem.style.height = `${CELL_SIZE_IN_PX}px`;
        gridItem.style.width = `${CELL_SIZE_IN_PX}px`;
        gridItem.style.backgroundColor = "rgb(0, 0, 0)";
        gridItem.style.opacity = "0";
        
        grid[i][j] = gridItem;
        grid[i][j].addEventListener("mouseover", (event) => {
            changeCellBgColor(event.target);
        })

        row.appendChild(grid[i][j]);
    }

    container.appendChild(row);
}

function changeCellBgColor(cell) {
    let opacity = Number(cell.style.opacity);
    opacity += 0.15;

    cell.style.opacity = opacity.toString();
}

function gridReset() {
    for(let i = 0; i < GRID_WIDTH; i++) {
        for(let j = 0; j < GRID_WIDTH; j++) {
            grid[i][j].style.opacity = "0";
        }
    }
}