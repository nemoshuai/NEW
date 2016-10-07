$(document).ready(function(){
	//top-l font
	$("a.site-touch1").mouseover(function () {
	// body...
		$("a.site-touch1").css("color"," #f22e00");
	});

	$("a.site-touch1").mouseout(function(){
 		$("a.site-touch1").css("color","#6c6c6c");
	});

	$("a.site-touch2").mouseover(function () {
	// body...
		$("a.site-touch2").css("color"," #f22e00");
	});

	$("a.site-touch2").mouseout(function(){
 		$("a.site-touch2").css("color","#6c6c6c");
	});
	//我的淘宝
	$("#myTaobao").mouseover(function(){
		$("ul.myTbMean").show();
		$("a.myTbMean-color").css("background-color","#ffffff");
		$("#myTaobao .arrow").css("background-color","#ffffff");
	});
	$("#myTaobao").mouseout(function(){
		$("ul.myTbMean").hide();
		$("a.myTbMean-color").css("background-color","#f5f5f5");
		$("#myTaobao .arrow").css("background-color","#f5f5f5");
	});

	$(".myTbMean .TbMean-1").mouseover(function(){
		$(".myTbMean .TbMean-1").css("background-color","#f5f5f5");
	})
	$(".myTbMean .TbMean-1").mouseout(function(){
		$(".myTbMean .TbMean-1").css("background-color","#ffffff");
	})
	$(".myTbMean .TbMean-2").mouseover(function(){
		$(".myTbMean .TbMean-2").css("background-color","#f5f5f5");
	})
	$(".myTbMean .TbMean-2").mouseout(function(){
		$(".myTbMean .TbMean-2").css("background-color","#ffffff");
	})


	$(".myTbMean-color").mouseover(function(){
		$(".myTbMean-color").css("color","#f22e00");
	});

	$(".myTbMean-color").mouseout(function(){
		$(".myTbMean-color").css("color","#6c6c6c");
	});

	//购物车
	$("a.car1").mouseover(function(){
		$("a.car1").css("color","#f22e00");
	});
	$("a.car1").mouseout(function(){
		$("a.car1").css("color","#6c6c6c");
	});
//收藏夹
	$("#favourite").mouseover(function(){
		$("ul.collect").show();
		$("a.collectbag").css("background-color","#ffffff");
		$("#myFavour .arrow").css("background-color","#ffffff");
	});

	$("#favourite").mouseout(function(){
		$("ul.collect").hide();
		$("a.collectbag").css("background-color","#f5f5f5");
		$("#myFavour .arrow").css("background-color","#f5f5f5");
	});

	$("a.collectbag").mouseover(function(){
		$("a.collectbag").css("color","#f22e00");
	});
	$("a.collectbag").mouseout(function(){
		$("a.collectbag").css("color","#6c6c6c");
	});
//商品分类
	
	$("a.sort-c").mouseover(function(){
		$("a.sort-c").css("color","#f22e00");
	});
	$("a.sort-c").mouseout(function(){
		$("a.sort-c").css("color","#6c6c6c");
	});
//卖家中心
	$("#saler").mouseover(function(){
		$("ul.salerList").show();
		$("a.salerhotel").css("background-color","#ffffff");
		$("#saler .arrow").css("background-color","#ffffff");
	});
	$("#saler").mouseout(function(){
		$("ul.salerList").hide();
		$("a.salerhotel").css("background-color","#f5f5f5");
		$("#saler .arrow").css("background-color","#f5f5f5");
	});
	$("a.salerhotel").mouseover(function(){
		$("a.salerhotel").css("color","#f22e00");
	});
	$("a.salerhotel").mouseout(function(){
		$("a.salerhotel").css("color","#6c6c6c");
	});

	$(".salerList .salerL1").mouseover(function(){
		$(".salerList .salerL1").css("background-color","#f5f5f5");
	})
	$(".salerList .salerL1").mouseout(function(){
		$(".salerList .salerL1").css("background-color","#ffffff");
	})
	$(".salerList .salerL2").mouseover(function(){
		$(".salerList .salerL2").css("background-color","#f5f5f5");
	})
	$(".salerList .salerL2").mouseout(function(){
		$(".salerList .salerL2").css("background-color","#ffffff");
	})
	$(".salerList .salerL3").mouseover(function(){
		$(".salerList .salerL3").css("background-color","#f5f5f5");
	})
	$(".salerList .salerL3").mouseout(function(){
		$(".salerList .salerL3").css("background-color","#ffffff");
	})
	$(".salerList .salerL4").mouseover(function(){
		$(".salerList .salerL4").css("background-color","#f5f5f5");
	})
	$(".salerList .salerL4").mouseout(function(){
		$(".salerList .salerL4").css("background-color","#ffffff");
	})
	$(".salerList .salerL5").mouseover(function(){
		$(".salerList .salerL5").css("background-color","#f5f5f5");
	})
	$(".salerList .salerL5").mouseout(function(){
		$(".salerList .salerL5").css("background-color","#ffffff");
	})
	$(".salerList .salerL6").mouseover(function(){
		$(".salerList .salerL6").css("background-color","#f5f5f5");
	})
	$(".salerList .salerL6").mouseout(function(){
		$(".salerList .salerL6").css("background-color","#ffffff");
	})

	//联系客服

	$("#contact").mouseover(function(){
		$("ul.contantList").show();
		$("a.contactServive").css("background-color","#ffffff");
		$("#contact .arrow").css("background-color","#ffffff");
	});
	$("#contact").mouseout(function(){
		$("ul.contantList").hide();
		$("a.contactServive").css("background-color","#f5f5f5");
		$("#contact .arrow").css("background-color","#f5f5f5");
	});

	$(".contantList .buyerChat").mouseover(function(){
		$(".contantList .buyerChat").css("background-color","#f5f5f5");
	})
	$(".contantList .buyerChat").mouseout(function(){
		$(".contantList .buyerChat").css("background-color","#ffffff");
	})
	$(".contantList .salerChat").mouseover(function(){
		$(".contantList .salerChat").css("background-color","#f5f5f5");
	})
	$(".contantList.salerChat").mouseout(function(){
		$(".contantList .salerChat").css("background-color","#ffffff");
	})


	$(".contactServive").mouseover(function(){
		$(".contactServive").css("color","#f22e00");
	});

	$(".contactServive").mouseout(function(){
		$(".contactServive").css("color","#6c6c6c");
	});
	//网站导航
	$("#webNavigate").mouseover(function(){
		$("ul.web-nav-l").show();
		$("a.web-nav").css("background-color","#ffffff");
		$("#webNavigate .arrow").css("background-color","#ffffff");
	});
	$("#webNavigate").mouseout(function(){
		$("ul.web-nav-l").hide();
		$("a.web-nav").css("background-color","#f5f5f5");
		$("#webNavigate.arrow").css("background-color","#f5f5f5");
	});
	$("a.web-nav").mouseover(function(){
		$("a.web-nav").css("color","#f22e00");
	});
	$("a.web-nav").mouseout(function(){
		$("a.web-nav").css("color","#6c6c6c");
	});
//标签页
	$(".container-hide").mouseout(function(){
		$(".container-hide").removeClass("select");
	});

	$(".cl-m-l-c.c1").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box1").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$("li.c1").addClass("active");
	});
	$(".cl-m-l-c.c2").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box2").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c2").addClass("active");
	});
	$(".cl-m-l-c.c3").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box3").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c3").addClass("active");
	});
	$(".cl-m-l-c.c4").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box4").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c4").addClass("active");
	});
	$(".cl-m-l-c.c5").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box5").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c5").addClass("active");
	});
	$(".cl-m-l-c.c6").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box6").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c6").addClass("active");
	});
	$(".cl-m-l-c.c7").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box7").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c7").addClass("active");
	});
	$(".cl-m-l-c.c8").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box8").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c8").addClass("active");
	});
	$(".cl-m-l-c.c9").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box9").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c9").addClass("active");
	});
	$(".cl-m-l-c.c10").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box10").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c10").addClass("active");
	});
	$(".cl-m-l-c.c11").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box11").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c11").addClass("active");
	});

	$(".cl-m-l-c.c12").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box12").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c12").addClass("active");
	});
	$(".cl-m-l-c.c13").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box13").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c2").addClass("active");
	});
	$(".cl-m-l-c.c14").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box14").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c14").addClass("active");
	});

	$(".cl-m-l-c.c15").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box15").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c15").addClass("active");
	});
	$(".cl-m-l-c.c16").mouseover(function(){
		$(".container-hide").removeClass("select");
		$("#box16").addClass("select");
		$(".cl-m-l-c").removeClass("active");
		$(".cl-m-l-c.c16").addClass("active");
	});

	//淘宝二维码
	$(".close a").click(function(){
		$(".qr").hide();
		$(".close a").hide();
	});

	
	
	//公告
	$("li.ul1").click(function(){
		$("ul.move1").show();
		$("ul.move2").hide();
		$("ul.move3").hide();
		$("ul.move4").hide();
		$("ul.move5").hide();
		$(".reb-r-m-hd li").removeClass("selected");
		$("li.ul1").addClass("selected");
	});
	$("li.ul2").click(function(){
		$("ul.move2").show();
		$("ul.move1").hide();
		$("ul.move3").hide();
		$("ul.move4").hide();
		$("ul.move5").hide();
		$(".reb-r-m-hd li").removeClass("selected");
		$("li.ul2").addClass("selected");
	});
	$("li.ul3").click(function(){
		$("ul.move3").show();
		$("ul.move2").hide();
		$("ul.move1").hide();
		$("ul.move4").hide();
		$("ul.move5").hide();
		$(".reb-r-m-hd li").removeClass("selected");
		$("li.ul3").addClass("selected");
	});
	$("li.ul4").click(function(){
		$("ul.move4").show();
		$("ul.move2").hide();
		$("ul.move3").hide();
		$("ul.move1").hide();
		$("ul.move5").hide();
		$(".reb-r-m-hd li").removeClass("selected");
		$("li.ul4").addClass("selected");
	
	});
	$("li.ul5").click(function(){
		$("ul.move5").show();
		$("ul.move2").hide();
		$("ul.move3").hide();
		$("ul.move4").hide();
		$("ul.move1").hide();
		$(".reb-r-m-hd li").removeClass("selected");
		$("li.ul5").addClass("selected");
	});

	//充话费
	$("li.reb-r-b-itme1").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item1").addClass("selected");
		$("li.reb-r-b-item1 p").addClass("change");
	});

	$(".reb-r-b-itme2").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item2").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item2 p").addClass("change");
	});

	$(".reb-r-b-itme3").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item3").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item3 p").addClass("change");
	});
	$(".reb-r-b-itme4").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item4").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item4 p").addClass("change");
	});
	$(".reb-r-b-itme5").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item5").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item5 p").addClass("change");
	});
	$(".reb-r-b-itme6").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item6").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item6 p").addClass("change");
	});

	$(".reb-r-b-itme7").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item7").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item7 p").addClass("change");
	});
	$(".reb-r-b-itme8").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item8").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item8 p").addClass("change");
	});
	$(".reb-r-b-itme9").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item9").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item9 p").addClass("change");
	});
	$(".reb-r-b-itme10").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item10").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item10 p").addClass("change");
	});
	$(".reb-r-b-itme11").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item11").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item11 p").addClass("change");
	});
	$(".reb-r-b-itme12").mouseover(function(){
		$("#reb-r-b li").removeClass("selected");
		$(".reb-r-b-item12").addClass("selected");
		$("#reb-r-b p").removeClass("change");
		$("li.reb-r-b-item12 p").addClass("change");
	});
	
	//APP二维码
	$("#app1").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$("#app1 .qr").addClass("show");
	});
	$(".app1").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app2").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app2 .qr").addClass("show");
	});
	$("li.app2").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app3").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app3 .qr").addClass("show");
	});
	$("li.app3").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app4").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app4 .qr").addClass("show");
	});
	$("li.app4").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app5").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app5 .qr").addClass("show");
	});
	$("li.app5").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app6").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app6 .qr").addClass("show");
	});
	$("li.app6").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app7").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app7 .qr").addClass("show");
	});
	$("li.app7").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app8").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app8 .qr").addClass("show");
	});

	$("li.app8").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app9").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app9 .qr").addClass("show");
	});
	$("li.app9").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});

	$("li.app10").mouseover(function(){	
		$(".nav-app .qr").removeClass("show");
		$(".app10 .qr").addClass("show");
	});
	$("li.app10").mouseout(function(){	
		$(".nav-app .qr").removeClass("show");
	});



});

