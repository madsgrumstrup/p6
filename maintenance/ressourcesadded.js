// JavaScript Document
var ressourceitems = ['maskine 1', 'maskine 2', 'maskine 3', 'maskine 4', 'maskine 5', 'maskine 6', 'maskine 7', 'maskine 8', 'maskine 9', 'maskine 10',  'maskine 11',  'maskine 12',  'maskine 13',  'maskine 14'];
var ardates = ['dd'];
1
var today = new Date(); 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//RESSOURCE 1
function dateprogress1() {
	var prog = document.getElementById('itemprogress');
	var percent = document.getElementById('indidate');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 250 && count == 50){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}

	}
}

//RESSOURCE 2
function dateprogress2() {
	var prog = document.getElementById('itemprogress2');
	var percent = document.getElementById('indidate2');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 225 && count == 45){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}

//RESSOURCE 3
function dateprogress3() {
	var prog = document.getElementById('itemprogress3');
	var percent = document.getElementById('indidate3');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 200 && count == 40){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}
//RESSOURCE 4
function dateprogress4() {
	var prog = document.getElementById('itemprogress4');
	var percent = document.getElementById('indidate4');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 200 && count == 40){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}
//RESSOURCE 5

function dateprogress5() {
	var prog = document.getElementById('itemprogress5');
	var percent = document.getElementById('indidate5');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 175 && count == 35){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}
//RESSOURCE 6
function dateprogress6() {
	var prog = document.getElementById('itemprogress6');
	var percent = document.getElementById('indidate6');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 150 && count == 30){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
	
		
	}
}
//RESSOURCE 7
function dateprogress7() {
	var prog = document.getElementById('itemprogress7');
	var percent = document.getElementById('indidate7');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 125 && count == 25){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 8
function dateprogress8() {
	var prog = document.getElementById('itemprogress8');
	var percent = document.getElementById('indidate8');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 125 && count == 25){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 9
function dateprogress9() {
	var prog = document.getElementById('itemprogress9');
	var percent = document.getElementById('indidate9');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 100 && count == 20){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 10
function dateprogress10() {
	var prog = document.getElementById('itemprogress10');
	var percent = document.getElementById('indidate10');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
			if (progress == 100 && count == 20){

			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 11
function dateprogress11() {
	var prog = document.getElementById('itemprogress11');
	var percent = document.getElementById('indidate11');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
				if (progress == 75 && count == 15){

			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 12
function dateprogress12() {
	var prog = document.getElementById('itemprogress12');
	var percent = document.getElementById('indidate12');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 75 && count == 15){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 13
function dateprogress13() {
	var prog = document.getElementById('itemprogress13');
	var percent = document.getElementById('indidate13');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 50 && count == 10){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 14
function dateprogress14() {
	var prog = document.getElementById('itemprogress14');
	var percent = document.getElementById('indidate14');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 25 && count == 5){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		
		}
		
	}
}
//RESSOURCE 15
function dateprogress15() {
	var prog = document.getElementById('itemprogress15');
	var percent = document.getElementById('indidate15');
	var count =1;
	var progress =5;
	var id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 5 && count == 1){
			clearInterval(id);
			prog.style.backgroundColor= "#fffffe"; 
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress + 'px';
			percent.innerHTML = count + '%';
			
		}
	
	}
}
dateprogress1();
dateprogress2();
dateprogress3();
dateprogress4();
dateprogress5();
dateprogress6();
dateprogress7();
dateprogress8();
dateprogress9();
dateprogress10();
dateprogress11();
dateprogress12();
dateprogress13();
dateprogress14();
dateprogress15();
//adds names from array into the h1 places in HTML

ardates.push(date)
document.getElementById("addrebut").onclick = function() {additemfun()};
function additemfun(){
	ressourceitems.push('Maskine 15');
	document.getElementById("item15name").innerHTML = ressourceitems[14];
	document.getElementById("reitem15date").innerHTML =ardates[1];
	
	
	console.log (today);
}

document.getElementById("item1name").innerHTML = ressourceitems[0];
document.getElementById("item2name").innerHTML = ressourceitems[1];
document.getElementById("item3name").innerHTML = ressourceitems[2];
document.getElementById("item4name").innerHTML = ressourceitems[3];
document.getElementById("item5name").innerHTML = ressourceitems[4];
document.getElementById("item6name").innerHTML = ressourceitems[5];
document.getElementById("item7name").innerHTML = ressourceitems[6];
document.getElementById("item8name").innerHTML = ressourceitems[7];
document.getElementById("item9name").innerHTML = ressourceitems[8];
document.getElementById("item10name").innerHTML = ressourceitems[9];
document.getElementById("item11name").innerHTML = ressourceitems[10];
document.getElementById("item12name").innerHTML = ressourceitems[11];
document.getElementById("item13name").innerHTML = ressourceitems[12];
document.getElementById("item14name").innerHTML = ressourceitems[13];


