const button = document.querySelector('button');
  button.addEventListener('click', function(evt){
  alert('Element ' + evt.currentTarget.tagname + ' was clicked');
});