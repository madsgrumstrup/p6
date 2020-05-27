
const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;
console.log(progress);


document.getElementById('switch').onclick = function() {addProgressBtnPdf()};

function addProgressBtnPdf(){
  console.log (progress.style.width);
  if(progress.style.width = 0 + '%'){
    progress.style.width = 100 + '%';
  }
//Her ville jeg lave et else statement, det virker dog ikke som det skal
//else {
  //progress.style.width = 100 + '%'){
//  progress.style.width = 0 + '%';
//}
console.log("hej")

}

var colors = ["red", "#4caf50","grey", "yellow"];
function changeColor(element, color){
  element.style.backgroundColor = color;
}

alert(document.getElementById('alertfunction').innerHTML);
console.log(progress);
