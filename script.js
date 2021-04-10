'use strict'

//To Do: fix max value in the grid

const grid = document.querySelector('#grid');
const form = document.querySelector('#sizePicker');
const submit = document.querySelector('#submit');
const row = document.querySelector('#row');
const col = document.querySelector('#column');


submit.addEventListener('click', e => {
   grid.innerHTML = '';
   e.preventDefault();
   makeGrid();
   form.reset(); //empty form for grid size
});


function makeGrid() {
   const r = parseInt(row.value);
   const c = parseInt(col.value);
   for (let i = 0; i < r; i++) {
      const r = document.createElement('tr');
      grid.append(r);
      for (let j = 0; j < c; j++) {
         const c = document.createElement('td');
         r.append(c);
      }
   }
}

// change cell color on click
grid.addEventListener('click', e => {
   //color defined here, because JS checks whether user has changed color with each new click on cell
   const color = document.querySelector('#colorPicker').value;
   e.target.style.backgroundColor = color;
});

// drag and draw. When mouse is pressed, then color cells
let isColoring = false;
grid.addEventListener('mousedown', e => {
   const color = document.querySelector('#colorPicker').value;
   e.target.style.backgroundColor = color;
   isColoring = true;
});

grid.addEventListener('mousemove', e => {
   if (isColoring === true) {
      const color = document.querySelector('#colorPicker').value;
      e.target.style.backgroundColor = color;
   }
});

grid.addEventListener('mouseup', e => {
   if (isColoring === true) {
      isColoring = false;
   }
});

// clear cell color on double click
grid.addEventListener('dblclick', e => {
   e.target.style.backgroundColor = null;
});
