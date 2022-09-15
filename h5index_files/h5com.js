// JavaScript Document




var topbarH = $(".topbar").height();


jQuery(function ($) {
	jQuery(window).scroll(function(){
		if(jQuery(this).scrollTop()>1){
			jQuery('#goTop').fadeIn();
		} else {
			jQuery('#goTop').fadeOut();
		}
	});
	jQuery('#goTop').click(function(){
		jQuery('html,body').animate({scrollTop:0},'slow');
		return false;
	});
});

function gotoClass(cls){
		var stopd = $("."+cls).offset().top;
		$("html,body").animate({"scrollTop":stopd-topbarH*1.5});		
		}








$(function(){
	$("#header").load("h5header.html",function(){
		
			//通用头
		$("#navbar-main").click(function(){
				
				$("#sidebar-main").show();
				$(".h5_s_close").click(function(){
					
					
				$("#sidebar-main").hide();
				})
			
			})	
	
		$(".wrapper ").find(".h5snav").each(function(){
			
			var flag=1;
				$(this).click(function(){        
					if(flag==1){            //执行方法;
						flag=0;
						$(this).find(".down_nav").show();
						$(this).addClass('down_nav_on')
					}else{            //执行方法;
						flag=1;
						$(this).find(".down_nav").hide();
						$(this).removeClass('down_nav_on')
					}
				});
			
			
			});	
		
		})
	$("#footer").load("h5footer.html");
	
	$(".guide_nav a").click(function(){
		$(this).addClass('on').siblings('a').removeClass('on');
		
		});




  


	
		
	});
	
	
	
	
	
	

	
	
	
	
	