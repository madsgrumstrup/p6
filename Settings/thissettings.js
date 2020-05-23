$('.dots li').click(function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
});

let setUpToolTip = function() {
  let tooltip = "",
  toolTipDiv = document.querySelector(".div-ask_name_text"),
  toolTipElements = Array.from(document.querySelectorAll(".hover-reveal"));

let displayTooltip = function(e, obj) {
  tooltip = obj.dataset.tooltip;
  toolTipDiv.innerHTML = tooltip;
  toolTipDiv.style.top = e.pageY + "px";
  toolTipDiv.style.left = e.pageX + "px";
  toolTipDiv.style.opacity = 1;
};

toolTipElements.forEach(function(elem){
  elem.addEventListerner("mouseenter", function(e) {
    displayTooltip(e, this);
  });
});
};

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
