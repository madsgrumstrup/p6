let listID = ["ID 14", "ID 13", "ID 12", "ID 11", "ID 10", "ID 9", "ID 8", "ID 7", "ID 6", "ID 5", "ID 4", "ID 3", "ID 2", "ID 1"];
for (let l in listID) {
    let newElement = document.createElement('div');
    newElement.id = listID[l];
    newElement.className = "blabla";
    newElement.innerHTML = listID[l];
    document.getElementById('remainbox').appendchild(newElement);

}


let remainbox = document.getElementById ("remainbox");
remainbox.appendChild(newElement);
