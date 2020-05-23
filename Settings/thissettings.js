$('.dots li').click(function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
});





// JS til pile smooth scrool

function scroll_to(first_arrow) {
      document.documentElement.style.scrollBehavior = 'smooth';
      element = document.createElement('a');
      element.setAttribute('href', id);
      element.click();
  }
  document.getElementById("first_arrow").addEventListener('click', () => {
  scroll_to('#7');
  });

  function scroll_to(second_arrow) {
        document.documentElement.style.scrollBehavior = 'smooth';
        element = document.createElement('a');
        element.setAttribute('href', id);
        element.click();
    }
    document.getElementById("second_arrow").addEventListener('click', () => {
    scroll_to('#7');
    });

    function scroll_to(third_arrow) {
          document.documentElement.style.scrollBehavior = 'smooth';
          element = document.createElement('a');
          element.setAttribute('href', id);
          element.click();
      }
      document.getElementById("third_arrow").addEventListener('click', () => {
      scroll_to('#7');
      });

      function scroll_to(fourth_arrow) {
            document.documentElement.style.scrollBehavior = 'smooth';
            element = document.createElement('a');
            element.setAttribute('href', id);
            element.click();
        }
        document.getElementById("fourth_arrow").addEventListener('click', () => {
        scroll_to('#7');
        });

        function scroll_to(fif_arrow) {
              document.documentElement.style.scrollBehavior = 'smooth';
              element = document.createElement('a');
              element.setAttribute('href', id);
              element.click();
          }
          document.getElementById("fif_arrow").addEventListener('click', () => {
          scroll_to('#7');
          });

          function scroll_to(six_arrow) {
                document.documentElement.style.scrollBehavior = 'smooth';
                element = document.createElement('a');
                element.setAttribute('href', id);
                element.click();
            }
            document.getElementById("six_arrow").addEventListener('click', () => {
            scroll_to('#7');
            });

// JS pile smooth scrool done
