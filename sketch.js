const container = document.querySelector("#container");

const addBox = function() {
    const box = document.createElement("div");
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "#DDE6ED";
    })
    return box;
}
const createCanvas = function(size) {
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);` + 
    `grid-template-rows: repeat(${size}, 1fr);` +
    `gap: 2px;`
    );

    for (let index = 0; index < size*size; index++) {
        container.appendChild(addBox());
    }
}

const popup = function() {
    let sz = prompt("Enter size", "16");
    let text;
    if (sz == null || sz == "") {
        // empty
    } else if (Number(sz) >= 100) {
        deleteCanvas();
        createCanvas(64);
    } else {
        // text = "New grid size is " + sz; 
        size = Number(sz);
        deleteCanvas();
        createCanvas(size);
    }
}

const deleteCanvas = function() {
    let boxes = Array.from(container.childNodes);
    boxes.forEach((box) => box.remove());
}

const resetCanvasButton = document.querySelector("button");
resetCanvasButton.addEventListener("click", popup);

createCanvas(16);
