$(document).ready(function(){
		$(".jqzoom").imagezoom();
		$("#thumblist li a").click(function(){
			//增加点击的li的class:tb-selected，去掉其他的tb-selecte
			$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
			//赋值属性
			$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
			$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
		});



		//实现加减
		$(".PushAndPop input").val(1);
		$("a.Pop").click(function(){
			var count = parseInt($(".PushAndPop input").val());
			if (count>1){
				count --;
				$(".PushAndPop input").val(count);
			}
			else{
				$(".PushAndPop input").val(1);
			}
			if($(".PushAndPop input").val()==1){
				$(".Pop i").css("color","#A9A9A9");
			}
			else{
				$(".Pop i").css("color"," #3C3C3C");
			}
		});

		$("a.Push").click(function(){
				var count = parseInt($(".PushAndPop input").val());
			
				count = count + 1;
				
				$(".PushAndPop input").val(count);
				$(".Pop i").css("color"," #3C3C3C");
		});

		$(".moreitem1 img").mouseover(function(){
				$(".moreitem1 img").css("border","1px solid red");
		});
		$(".moreitem1 img").mouseout(function(){
			$(".moreitem1 img").css("border","none");
		});

		$(".moreitem2 img").mouseover(function(){
				$(".moreitem2 img").css("border","1px solid red");
		});
		$(".moreitem2 img").mouseout(function(){
			$(".moreitem2 img").css("border","none");
		});

});