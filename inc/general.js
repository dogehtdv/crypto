$(document).ready(function() { 
	
	$("body").on("click", ".coin_select", function(e){ e.preventDefault();
		$('#return_to_sender').attr('checked', false); $('#return_add, #send_to').val("");
		if ($(this).attr('id')!=undefined && $(this).attr('id').match('CL_')) { $('#sel_coin').val($(this).attr('id')); }
		$('.select').animate({ scrollTop: "255px" });
		return false; 
	});
	$("body").on("click", ".select_home", function(e){ e.preventDefault();
		$('.select').animate({ scrollTop: "0px" }); $('#return_add, #send_to').val("");
	return false; 
	});
	$("body").on("click", "#return_to_sender, .select_submit", function(e){ e.preventDefault(); return_wallet(); return false; });
	
});

	function return_wallet() {
	
		if ($('#return_to_sender').is(':checked')==true || $('#return_add').val().length > 20) {
		
		$.post( "../api/get_wallet.php.htm", { c: $('#sel_coin').val(), a: $('#return_to_sender').is(':checked'), w: $( "#return_add" ).val() }, function( data ) {
			$( "#coin_address" ).html( data );
		})
		.fail(function() {
			$( "#coin_address" ).html("Your deposit will be add to the list below in 15-30min.<div class=\"clear_tall\"></div><div class=\"clear_tall\"></div><a href=\"#\" class=\"coin_select btnback\">Back</a>");
		  });

		$('.select').delay( 500 ).animate({ scrollTop: "570px" });

		}

		return false;

	}