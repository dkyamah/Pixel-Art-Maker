const table = $('#pixelCanvas');
const color = $('#colorPicker');
const gridHeight = $('#inputHeight');
const gridWidth = $('#inputWidth');

$('#submit').on('click', function(event) {
   event.preventDefault();
   makeGrid();
});

function makeGrid() {
  table.find('tbody').remove();
  let tableHeight = gridWidth.val();
  let tableWidth = gridHeight.val();
  table.append('<tbody></tbody>');
  for (let x = 1; x <= tableWidth; x++) {
  table.find('tbody').append('<tr></tr>');
  }
  for (let y = 1; y <= tableHeight; y++) {
  table.find('tr').append('<td></td>');
  }
}

table.on('click', 'td', function() {
    let gridColor = color.val();
   $(this).css('background-color', gridColor);
});
