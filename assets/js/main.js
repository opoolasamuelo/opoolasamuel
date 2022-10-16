
            
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("header_sticky_sticky")
  } else {
    navbar.classList.remove("header_sticky_sticky");
  }
}



function scroll_to_element(element,time= 1000){


    $(document).ready(function(){

              $('html, body').animate({ 
            scrollTop: $(element).offset().top 
            }, 1000);

        });

    
}

$('#submit_form').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var subject ="Porfolio Contact";
        var body = $('#form_input_text').val();
        $('#form_input_text').val("")


        window.open("mailto:opoolasamuelo@gmail.com&subject="+ encodeURI(subject) + "&body=" + encodeURI(body),"_blank" );
       // setTimeout(function() {
       //      location.href = "index.html";
       //  }, 500);
        
});

     
