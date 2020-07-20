$("#open").click(function(){
        $("ul.nav").toggleClass("on");
 });

 $(".close").click(function(){
    $("ul.nav").removeClass("on");
});



$('button.btn-link').click(function(){
    $('button.btn-link').toggleClass('open');
});





















// $(document).ready(function(){
//     // Add minus icon for collapse element which is open by default
//     $(".collapse.show").each(function(){
//         $(this).prev(".card-header").find("img.plus").addClass("d-none").removeClass("d-block");
//         $(this).prev(".card-header").find("img.minus").addClass("d-block").removeClass("d-none");
//     });
    
//     // Toggle plus minus icon on show hide of collapse element
//     $(".collapse").on('show.bs.collapse', function(){
//         $(this).prev(".card-header").find("img.plus").removeClass("d-none").addClass("d-block");
//     }).on('hide.bs.collapse', function(){
//         $(this).prev(".card-header").find("img.minus").removeClass("d-block").addClass("d-none");
//     });
// });
