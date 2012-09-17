$(function() {

	var ulakTimeout;
	
	ulak = function(options) {
		
		if($("#ulak-container").length) {
			ulak.close();
		}
		
		if(options.modal!==true) {
			$("body").prepend("<div id='ulak-container'><div id='ulak-message-container'>"+options.text+"</div></div>");
		} else {
			$("body").prepend("<div id='ulak-container'><div id='ulak-message-container'>"+options.text+"</div></div><div id='ulak-modal'></div>");
		}
		
		switch(options.type) {
			case "error":
				$("#ulak-container").addClass("ulak-error");
				break;
			case "success":
				$("#ulak-container").addClass("ulak-success");
				break;
			case "warning":
				$("#ulak-container").addClass("ulak-warning");
				break;
			case "info":
				$("#ulak-container").addClass("ulak-info");
				break;
			default:
				$("#ulak-container").addClass("ulak-error");
		}
		
		$("#ulak-container").slideToggle("slow");
		$("#ulak-modal").fadeIn("slow");
		
		if(!options.closeWith) {
			$("#ulak-container").mouseenter(function() {
				ulak.close();
			});
			$("#ulak-container, #ulak-modal").click(function() {
				ulak.close();
			}); 
		}	

		if(options.timeout) {
			ulakTimeout = setTimeout("ulak.close()",options.timeout);
		} else {
			ulakTimeout = setTimeout("ulak.close()",3000);
		}

	}

	ulak.close = function() {
		clearTimeout(ulakTimeout);
		$("#ulak-container:first").slideToggle("slow", function() {
			$(this).remove();
		});
		$("#ulak-modal:first").fadeOut("slow", function() {
			$(this).remove();
		});
	}
	
});