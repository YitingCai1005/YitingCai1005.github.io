$(document).ready(function(){
	var $target=$('#service li:nth-child(1)')
	
    $('#s1').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#s1').mouseleave(function(){
        $target.css('color','black');
	});
	
	$('#s1').click(function() {
        $target.toggleClass('highlighted');
    });
	
});


$(document).ready(function(){
	var $target=$('#service li:nth-child(2)')
	
    $('#s2').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#s2').mouseleave(function(){
        $target.css('color','black');
	});
	$('#s2').click(function() {
    $target.toggleClass('highlighted');
    });
});


$(document).ready(function(){
	var $target=$('#service li:nth-child(3)')
	
    $('#s3').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#s3').mouseleave(function(){
        $target.css('color','black');
	});
	$('#s3').click(function() {
    $target.toggleClass('highlighted');
    });
});

$(document).ready(function(){
	var $target=$('#service li:nth-child(4)')
	
    $('#s4').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#s4').mouseleave(function(){
        $target.css('color','black');
	});
	$('#s4').click(function() {
    $target.toggleClass('highlighted');
    });
});

$(document).ready(function(){
	var $target=$('#service li:nth-child(5)')
	
    $('#s5').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#s5').mouseleave(function(){
        $target.css('color','black');
	});
	$('#s5').click(function() {
    $target.toggleClass('highlighted');
    });
});

$(document).ready(function(){
	var $target=$('#relationship li:nth-child(2)')
	
    $('#r2').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#r2').mouseleave(function(){
        $target.css('color','black');
	});
	$('#r2').click(function() {
    $target.toggleClass('highlighted');
    });
});

$(document).ready(function(){
	var $target=$('#relationship li:nth-child(1)')
	
    $('#r1').mouseenter(function(){
        $target.css('color','DarkOrange');
    });
	$('#r1').mouseleave(function(){
        $target.css('color','black');
	});
	$('#r1').click(function() {
    $target.toggleClass('highlighted');
    });
});
