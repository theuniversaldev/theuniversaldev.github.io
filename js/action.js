$(document).ready(function() {
     $(".menu").click(function(e) {
          e.stopPropagation();
          $(".navigation").toggleClass("active");
     });
});
