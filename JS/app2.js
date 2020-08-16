document.querySelector('.Layton_info');

document.addEventListener('click', toggleDivDisplay);
function toggleDivDisplay() {
  var x = document.querySelector('.animals_Layton');
  var maptogel = document.querySelector('maps_list');
  if (x.style.display === 'none' && maptogel.style.display === 'block') {
    x.style.display = 'block';
    maptogel.style.display === 'none';
  } else {
    x.style.display = 'none';
  }
}
