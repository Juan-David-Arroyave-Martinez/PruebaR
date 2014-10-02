$(document).ready(function(e) {
    
$("nav ul li").eq(0).click(function(){
	
	$("nav ul li").eq(0).addClass("insectn");
	$("nav ul li").eq(1).removeClass();
	$("nav ul li").eq(2).removeClass();
	$("nav ul li").eq(3).removeClass();
	$("#Bienvenida").fadeOut("fast");
	$("#Camisetas").fadeOut("fast");
	$("#Pantalones").fadeOut("fast");
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").fadeOut("fast");
	$("#confirmar").fadeOut("fast");
	$("#Camisas").fadeIn(2500);
	
	});	
	
$("nav ul li").eq(1).click(function(){
	
	$("nav ul li").eq(0).removeClass();
	$("nav ul li").eq(1).addClass("insectn");
	$("nav ul li").eq(2).removeClass();
	$("nav ul li").eq(3).removeClass();
	$("#Bienvenida").fadeOut("fast");
	$("#Camisas").fadeOut("fast");
	$("#Pantalones").fadeOut("fast");
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").fadeOut("fast");
	$("#confirmar").fadeOut("fast");
	$("#Camisetas").fadeIn(2500);
	
	});	
	
$("nav ul li").eq(2).click(function(){
	
	$("nav ul li").eq(0).removeClass();
	$("nav ul li").eq(1).removeClass();
	$("nav ul li").eq(2).addClass("insectn");
	$("nav ul li").eq(3).removeClass();
	$("#Bienvenida").fadeOut("fast");
	$("#Camisas").fadeOut("fast");
	$("#Camisetas").fadeOut("fast");
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").fadeOut("fast");
	$("#confirmar").fadeOut("fast");
	$("#Pantalones").fadeIn(2500);
	
	});	
	
$("nav ul li").eq(3).click(function(){
	
	$("nav ul li").eq(0).removeClass();
	$("nav ul li").eq(1).removeClass();
	$("nav ul li").eq(2).removeClass();
	$("nav ul li").eq(3).addClass("insectn");
	$("#Bienvenida").fadeOut("fast");
	$("#Camisas").fadeOut("fast");
	$("#Camisetas").fadeOut("fast");
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").fadeOut("fast");
	$("#confirmar").fadeOut("fast");
	$("#Zapatos").fadeIn(2500);
	
	});
	
	
	$("#camisa1").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa1-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa1");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa2").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa2-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa2");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa3").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa3-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa3");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa4").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa4-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa4");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa5").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa5-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa5");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa6").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa6-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa6");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa7").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa7-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa7");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa8").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa8-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa8");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa9").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa9-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa9");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa10").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa10-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa10");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camisa11").click(function(){
	
	$("#Camisas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camisa11-sl");
	$("#item-seleccionado h3").html("$19.900");
	$("#item-seleccionado h1").html("Camisa11");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta1").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta1-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta1");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta2").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta2-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta2");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta3").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta3-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta3");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta4").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta4-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta4");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta5").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta5-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta5");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta6").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta6-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta6");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta7").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta7-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta7");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta8").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta8-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta8");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta9").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta9-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta9");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta10").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta10-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta10");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#camiseta11").click(function(){
	
	$("#Camisetas").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("camiseta11-sl");
	$("#item-seleccionado h3").html("$29.900");
	$("#item-seleccionado h1").html("Camiseta11");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon1").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon1-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon1");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon2").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon2-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon2");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon3").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon3-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon3");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon4").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon4-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon4");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon5").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon5-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon5");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon6").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon6-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon6");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon7").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon7-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon7");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon8").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon8-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon8");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon9").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon9-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon9");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon10").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon10-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon10");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#pantalon11").click(function(){
	
	$("#Pantalones").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("pantalon11-sl");
	$("#item-seleccionado h3").html("$49.900");
	$("#item-seleccionado h1").html("Pantalon11");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato1").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato1-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato1");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato2").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato2-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato2");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato3").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato3-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato3");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato4").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato4-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato4");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato5").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato5-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato5");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato6").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato6-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato6");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato7").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato7-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato7");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato8").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato8-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato8");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato9").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato9-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato9");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato10").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato10-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato10");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	$("#zapato11").click(function(){
	
	$("#Zapatos").fadeOut("fast");
	$("#item-seleccionado").removeClass();
	$("#item-seleccionado").addClass("zapato11-sl");
	$("#item-seleccionado h3").html("$99.900");
	$("#item-seleccionado h1").html("Zapato11");
	$("#item-seleccionado p").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 			    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.    	    persona que se dedica a la imprenta).");
	$("#item-seleccionado").fadeIn(2500);
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	$("#enbiarp").click(function(){
		
		$("#item-seleccionado").fadeOut();
		$("#confirmar").slideDown(2500);
		
		});
	
	
	
$("#item-seleccionado ul li").eq(0).click(function(){
	
	$("#item-seleccionado ul li").eq(0).css("background-color","rgba(49,43,187,1.00)");
	$("#item-seleccionado ul li").eq(1).css("background-color","none");
	$("#item-seleccionado ul li").eq(2).css("background-color","none");
	$("#item-seleccionado ul li").eq(3).css("background-color","none");
	});
	
$("#item-seleccionado ul li").eq(1).click(function(){
	
	$("#item-seleccionado ul li").eq(1).css("background-color","rgba(223,49,49,1.00)");
	$("#item-seleccionado ul li").eq(0).css("background-color","none");
	$("#item-seleccionado ul li").eq(2).css("background-color","none");
	$("#item-seleccionado ul li").eq(3).css("background-color","none");
	});
	
$("#item-seleccionado ul li").eq(2).click(function(){
	
	$("#item-seleccionado ul li").eq(2).css("background-color","rgba(255,255,255,1.00)");
	$("#item-seleccionado ul li").eq(0).css("background-color","none");
	$("#item-seleccionado ul li").eq(1).css("background-color","none");
	$("#item-seleccionado ul li").eq(3).css("background-color","none");
	});	
	
$("#item-seleccionado ul li").eq(3).click(function(){
	
	$("#item-seleccionado ul li").eq(3).css("background-color","rgba(0,0,0,1.00)");
	$("#item-seleccionado ul li").eq(0).css("background-color","none");
	$("#item-seleccionado ul li").eq(1).css("background-color","none");
	$("#item-seleccionado ul li").eq(2).css("background-color","none");
	});	
	
});