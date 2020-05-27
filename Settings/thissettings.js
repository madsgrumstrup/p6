// dot_nav
// $('.dots li').click(function(){
//   $('.active').removeClass('active');
//   $(this).addClass('active');
// });
// dot_nav

// JS til pile smooth scrool

function scroll_to(all_arrows) {
      document.documentElement.style.scrollBehavior = 'smooth';
      element = document.createElement('a');
      element.setAttribute('href', id);
      element.click();
  }
  document.getElementById("first_arrow").addEventListener('click', () => {
  scroll_to('#second_arrow');
  });
  document.getElementById("second_arrow").addEventListener('click', () => {
    scroll_to('#overallnav_to_set');
    });
  document.getElementById("third_arrow").addEventListener('click', () => {
    scroll_to('#fourth_arrow');
    });

  document.getElementById("fourth_arrow").addEventListener('click', () => {
    scroll_to('#second_arrow');
    });

  document.getElementById("fif_arrow").addEventListener('click', () => {
    scroll_to('#six_arrow');
    });

   document.getElementById("six_arrow").addEventListener('click', () => {
    scroll_to('#fourth_arrow');
    });


// pensum lavet her: DOM, JS, Events,Operator, Funktioner
// Jeg mangler if statements, loops og list i form af arrays
// JS pile smooth scrool done
