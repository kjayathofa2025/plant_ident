$(document).ready(function() {
  var loader = $('#loader');
  loader.hide();
});


// sticky navbar here //
var win = $(window),
nav = $("header"),
pos = nav.offset().top,
sticky = function () {
  win.scrollTop() > pos ? nav.addClass("sticky") : nav.removeClass("sticky");
};

win.scroll(sticky);

// $('.owl-carousel').owlCarousel({
  
  (function ($) {
    var handleMatchMedia = function (mediaQuery) {
      if (mediaQuery.matches) {
        $(".container").removeClass("sections_container");
      } else {
        $(".container").addClass("sections_container");
      }
      },
      mql = window.matchMedia("all and (max-width: 1199px)");
      
      handleMatchMedia(mql);
      mql.addListener(handleMatchMedia);
    })(jQuery);
    (function ($) {
      // Begin jQuery
      $(function () {
        // DOM ready
        
        // Toggle open and close nav styles on click
        $("#nav-toggle").click(function () {
          $("nav ul").slideToggle();
        });
        // Hamburger to X toggle
        $("#nav-toggle").on("click", function () {
          this.classList.toggle("active");
        });
      }); // end DOM ready
    })(jQuery); // end jQuery
    
    // tooltip here  //
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const elements = document.querySelectorAll('.about-img-block');
    const offset = 300;
    
    function handleScroll() {
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
        // Check if class has been added before
        if (!element.classList.contains(`${element.classList[1]}-animated`)) {
          if (window.scrollY + window.innerHeight >= elementPosition + offset) {
            element.classList.add(`${element.classList[1]}-animated`);
          }
        }
      });
    }
    
    window.addEventListener('scroll', handleScroll);
    

// contact us page

function showModal() {
  var reasonSelect = document.getElementById('reason');
  var deleteMsg = document.getElementById('delete-msg');
  var cMessage = document.getElementById('c_message');
  // let user_query = $('#reason').val();


  if (reasonSelect.value === 'deleteaccount') {
      cMessage.style.display = 'none';
      deleteMsg.style.display = 'block';
  }
  else{
      cMessage.style.display = 'block';
      deleteMsg.style.display = 'none';
  }
  const originalUrl = new URL(window.location.href);
  const selectedReason = reasonSelect.value;
  const currentUrl = new URL(window.location.href);
  currentUrl.search = new URLSearchParams({ 'q': selectedReason }).toString();
  window.history.replaceState({}, document.title, currentUrl.href);
  
  
  window.addEventListener('beforeunload', function() {
    window.history.replaceState({}, document.title, originalUrl.href);
  });

  }

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".trynow-btn").addEventListener("click", function() {
      document.getElementById("home").scrollIntoView({
        behavior: "smooth"
      });
    });
  });
 
 
 


