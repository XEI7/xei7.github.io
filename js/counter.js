(function($) { 
   $.ajax({
        type     : "GET",
        url      : 'http://',
        success  : function(data) {
                    $("#counterValue").text(data);
                   },
        error    : function() { 
					
                    $("#counter").html(""); 
                   }
    });
	
})(jQuery);