function addExtraBox() {
  let parent = document.getElementById('parentBox');
  let count = parent.childElementCount + 1;
  let firstChild = parent.firstElementChild;
  let date = firstChild.querySelector(".hisitem1date p").innerHTML;
  let oldMonth = parseInt(date.substr(3, 2)) + 1;
  let oldYear = date.substr(6, 2);
  let newMonth;
  let newYear;

//Måned
  if (oldMonth < 10) {
    newMonth = '0' + oldMonth
  } else {
    newMonth = oldMonth.toString();
  }

//År
  if (oldMonth > 12) {
    let tempYear = parseInt(oldYear) + 1
    newYear = tempYear.toString();
    newMonth = '01';
  } else {
    newYear = oldYear;
  }

  let newDate = '01/' + newMonth + '/' + newYear;
  let html = '<div class="hisitem1nt"><div class="hisitemname"><h1>ID ' + count + '</h1></div><div class="hisitemtype"></div></div><div class="hisitem1date"><i class="fas fa-tools"></i><p>' + newDate + '</p></div>';
  let box = document.createElement('div');
  box.className = "hisitem"
  box.innerHTML = html;

  parent.prepend(box);
}
