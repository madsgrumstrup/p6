// dot_nav
$('.dots li').click(function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
});
// dot_nav

// JS til pile smooth scrool

function scroll_to(all_arrows) {
      document.documentElement.style.scrollBehavior = 'smooth';
      element = document.createElement('a');
      element.setAttribute('href', id);
      element.click();
  }
  document.getElementById("first_arrow").addEventListener('click', () => {
  scroll_to('#7');
  });


    document.getElementById("second_arrow").addEventListener('click', () => {
    scroll_to('#7');
    });


      document.getElementById("third_arrow").addEventListener('click', () => {
      scroll_to('#7');
      });


        document.getElementById("fourth_arrow").addEventListener('click', () => {
        scroll_to('#7');
        });


          document.getElementById("fif_arrow").addEventListener('click', () => {
          scroll_to('#7');
          });


            document.getElementById("six_arrow").addEventListener('click', () => {
            scroll_to('#7');
            });


// pensum lavet her: DOM, JS, Events,Operator, Funktioner
// Jeg mangler if statements, loops og list i form af arrays
// JS pile smooth scrool done

function loopFunktioner(arrayfuncions){
	var errorSection = false; // Error section peger på det første sted der er fejl på siden. Den er som udgangspunkt ikke sand.
	var errors = 0; // Antal fejl
	// Loop alle funktioner, og gem første fejlsektion, hvis der er en.
	var run = null;
	for (i = 0; i < arrayfuncions.length; i++) {
		run = arrayfuncions[i]();
		if(run != 0 & !errorSection){
			errorSection = run;
			errors++;
		} else if(run != 0){
			errors++;
		}
		run = null;
	}
	console.log("Der var " + errors + " fejl.");

	return([errorSection, errors]);
}
