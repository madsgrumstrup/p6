// JavaScript Document
let ressourceitems = ['maskine 1', 'maskine 2', 'maskfdfdine 3', 'maskine 4', 'maskine 5', 'maskine 6', 'maskine 7', 'maskine 8', 'maskine 9', 'maskine 10',  'maskine 11',  'maskine 12',  'maskine 13',  'maskine 14'];
let ardates = ['No date'];
let RIArrayLength = ressourceitems.length;
let today = new Date(); 
let date = today.getFullYear()+'-'+(today.getMonth()+2)+'-'+today.getDate();

//RESSOURCE 1
function dateprogress1() {
	let prog = document.getElementById('itemprogress');
	let percent = document.getElementById('indidate');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 250 && count == 50){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 150 + '%';
			percent.innerHTML = count + '%';
			
		
		}

	}
}

//RESSOURCE 2
function dateprogress2() {
	let prog = document.getElementById('itemprogress2');
	let percent = document.getElementById('indidate2');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 225 && count == 45){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 135 + '%';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}

//RESSOURCE 3
function dateprogress3() {
	let prog = document.getElementById('itemprogress3');
	let percent = document.getElementById('indidate3');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 200 && count == 40){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 120 + '%';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}
//RESSOURCE 4
function dateprogress4() {
	let prog = document.getElementById('itemprogress4');
	let percent = document.getElementById('indidate4');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 200 && count == 40){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 120 + '%';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}
//RESSOURCE 5

function dateprogress5() {
	let prog = document.getElementById('itemprogress5');
	let percent = document.getElementById('indidate5');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 175 && count == 35){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress  - 110 + '%';
			percent.innerHTML = count + '%';
			
		
		}
	
	}
}
//RESSOURCE 6
function dateprogress6() {
	let prog = document.getElementById('itemprogress6');
	let percent = document.getElementById('indidate6');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 150 && count == 30){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 90 + '%';
		
			
		
		}
	
		
	}
}
//RESSOURCE 7
function dateprogress7() {
	let prog = document.getElementById('itemprogress7');
	let percent = document.getElementById('indidate7');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 125 && count == 25){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 65 + '%' ;
		
			
		
		}
		
	}
}
//RESSOURCE 8
function dateprogress8() {
	let prog = document.getElementById('itemprogress8');
	let percent = document.getElementById('indidate8');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 125 && count == 25){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress - 40 + 'px';
			
			
		
		}
		
	}
}
//RESSOURCE 9
function dateprogress9() {
	let prog = document.getElementById('itemprogress9');
	let percent = document.getElementById('indidate9');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
		if (progress == 100 && count == 20){
			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress -15 + 'px';
			
			
		
		}
		
	}
}
//RESSOURCE 10
function dateprogress10() {
	let prog = document.getElementById('itemprogress10');
	let percent = document.getElementById('indidate10');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
	function progframe() {
			if (progress == 100 && count == 20){

			clearInterval(id);
			
		}
		else {
			progress += 5;
			count +=1;
			prog.style.width = progress -15 + 'px';
			
			
		
		}
		
	}
}
//RESSOURCE 11
function dateprogress11() {
	let prog = document.getElementById('itemprogress11');
	let percent = document.getElementById('indidate11');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
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
	let prog = document.getElementById('itemprogress12');
	let percent = document.getElementById('indidate12');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
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
	let prog = document.getElementById('itemprogress13');
	let percent = document.getElementById('indidate13');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
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
	let prog = document.getElementById('itemprogress14');
	let percent = document.getElementById('indidate14');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
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
	let prog = document.getElementById('itemprogress15');
	let percent = document.getElementById('indidate15');
	let count =1;
	let progress =5;
	let id = setInterval(progframe,30);
	
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

function additemfun(){
	document.getElementById("item15name").innerHTML = ressourceitems[14];
	document.getElementById("reitem15date").innerHTML =ardates[1];
	console.log (today);
}

for ( let i in ressourceitems) {
	let newDiv = document.createElement('div');
	   newDiv.id = ressourceitems[i]; newDiv.className = "newressourceitem";
	document.body.appendChild(newDiv);
	
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


