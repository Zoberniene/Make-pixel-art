
const grid = document.querySelector('#table');
const button = document.querySelector('button');

button.addEventListener('click', makeGrid);

function makeGrid() {
   const row = parseInt(document.querySelector('#row').value);
   const col = parseInt(document.querySelector('#column').value);

   for (let i = 0; i < row; i++) {
      const el = document.createElement('tr');
      grid.append(el);
      for (let j = 0; j < col; j++) {
         const data = document.createElement('td');
         el.append(data);
      }
   }
}
