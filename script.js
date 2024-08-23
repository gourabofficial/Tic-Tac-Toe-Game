let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset'); 

let player0 = true;

const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (player0) {
            box.innerHTML = "O";
            player0 = false;
        } else {
            box.innerHTML = "X";
            player0 = true;
        }
        box.disabled = true;
    })
})