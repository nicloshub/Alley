$(document).on("scroll", function(){
    
    if ($(document).scrollTop()>100) {
        $("contenedor_logo").removeClass("logo_grande").addClass("logo");
	} else {
		$("contenedor_logo").removeClass("logo").addClass("logo_grande");
    }
});