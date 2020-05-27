function addExtraBox() { // Deklarer funktionen (opretter den)
  let parent = document.getElementById('parentBox'); // Definerer variablen parent og henter det element som har det id
  let count = parent.childElementCount + 1; // Definerer variablen count og bruger variablen fra tidligere for at finde ud af hvor mange børn den har
  let firstChild = parent.firstElementChild; // definerer variablen firstchild og henter det første barn under parent
  let date = firstChild.querySelector(".hisitem1date p").innerHTML; // Definerer variablen date og henter det første barn, hvor man indenunder den vil finde id og p
  let oldMonth = parseInt(date.substr(3, 2)) + 1; // Definer variablen oldmonth og trækker først måneden ud for derefter at kunne konventerer streng til et tal og derefter +1
  let oldYear = date.substr(6, 2); // Definer oldyear og og trækker de tal elementer ud man gerne vil arbejde med
  let newMonth; // Definer newmonth for at sikre at de er der til senere
  let newYear; // Definer newyear for at sikre at de er der til senere

//Måned
  if (oldMonth < 10) { // Hvis oldmonth er mindre end 10
    newMonth = '0' + oldMonth // Så smider den 0 + måndeden som er forøget med 1, fordi vi har parseInt "heltal" (konverter til et tal uden 0)
  } else {
    newMonth = oldMonth.toString(); // Hvis ikke, så konverter den den gamle måned med til en sterng, som tidligere er forøjet med 1
  }

//År
  if (oldMonth > 12) { // Hvis den gamle måned er større end 12
    let tempYear = parseInt(oldYear) + 1 // Så konverter man det gamle år til et tal og +1
    newYear = tempYear.toString(); // Her konverter man det midlertidlige år til en streng og tildeler den til newyear
    newMonth = '01'; // Her sætter man variablen newmonth til at starte med 01
  } else {
    newYear = oldYear; // Hvis ikke, så bruges samme år
  }

  let newDate = '01/' + newMonth + '/' + newYear; // Definer variablen newdate og opretter den nye visnings streng som skal smides ud i kasserne i browseren
  let html = '<div class="hisitem1nt"><div class="hisitemname"><h1>ID ' + count + '</h1></div><div class="hisitemtype"></div></div><div class="hisitem1date"><i class="fas fa-tools"></i><p>' + newDate + '</p></div>'; // Definer variablen html og opretter den nye kasse, hvor id numre er dynamisk genereret (count) og datoen blier også dynamisk genereret (newdate)
  let box = document.createElement('div'); // definer variablen box som egentlig er parent og opretter et DOM element som er et div element
  box.className = "hisitem" // clas'en på box kommer til at hedde reitem 14
  box.innerHTML = html; // Her fortæller den at alt indhold til div kassen skal flyttes ind som er defineret oppe i html variablen (også kaldet child)

  parent.prepend(box); //I parent element går den ind og tilføjer den nye box som første child element
}

//Forklaring ud over projektet, hvad der kunne gøres i stedet for
function forklaring() { // Så den ikke kører koden når man kalder den i browseren
  let array = [ // Laver et array
    [
      'Overskrift1',
      '01/01/20'
    ],
    [
      'Overskrift2',
      '01/02/20'
    ],
    [
      'Overskrift3',
      '01/03/20'
    ],
  ]; // Hver [] er et item

  //Et for loop har du kontrol og styrer hvor mange gange dit loop skal kører igennem.
  for (i = 0; i < 2; i++) { // Så her siger den at 1 = 0, så så længe i er mindre end 2, udføres koden for hver gennemløb skal i forøjes med 1
    console.log(array[i][0]); // i er hvert lille array og 0 er overskrifterne som den spytter ud
  }

  //Foreach løber alle "rækker" igennem. Her har du IKKE kontrol, men du vil vise alt i dit array/object
  array.forEach((item, i) => { // Her siger den at for hvert index (lille array) udføres koden
    console.log(item[0]); // Her spytter den alle overskrifter ud, da der ikke er nogen tæller på
  });

  //Er det samme som onclick="functions navn()" i html
  document.getElementById('knap').addEventListener('click', function () {
    addExtraBox();
  });
}
