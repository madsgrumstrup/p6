// JavaScript Document
var cars = 'Saab,Volvo,BMW,GMC,Nissan,Ford, flfl'.split(',');
for (var c in cars) {
    var newElement = document.createElement('remainboxressources');
    newElement.id = cars[c]; newElement.className = "car";
    newElement.innerHTML = cars[c];
    document.body.appendChild(newElement);
} 
