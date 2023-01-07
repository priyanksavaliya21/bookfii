
$( window ).resize(function() {
    //Function
  
});


$(document).ready(function(){

     //Menu Js
     $('.menu_trigger').click(function(){
        $('body').toggleClass('sidebar_reduced');
        $('html').toggleClass('cm_overflow');

        tooltipshow();
    }); 

    $('.close_trigger, .cm-overlay').click(function(){
        $('body').removeClass('sidebar_reduced');
        $('html').removeClass('cm_overflow');
    }); 

    // $('.sidebar_menu ul li').click(function(){
    //   $('.sidebar_menu ul li').removeClass('active');
    //   $(this).addClass('active');
    // });


    
    // Toogle button redirect to another page
    document.getElementById('c_testing').onchange = function(){
        if(this.checked){
            window.location.href ='index.html';
        } else{
            window.location.href ='dashboard.html';
        }
      };


});









