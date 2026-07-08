$(document).ready(function(){
	$.ajax({
		type: "GET",
		//url: "js/menu.xml",
		url: "js/menu_full_url.xml",
		dataType: "xml",
		success: function(xml) {
			$(xml).find('link').each(function(){
				var id = $(this).attr('id');
				var title = $(this).find('title').text();
				var url = $(this).find('url').text();
				var element;
				if (typeof(thisPageId)!== 'undefined' && thisPageId==id) 
					element=$('<span id="menu_'+id+'"></span>');
				else
					element=$('<a href="'+url+'" id="menu_'+id+'"></a>');
				element.html(title);
				element.appendTo('#topbar>.menu');
			});
		}
	});
	if (typeof(today)=== 'undefined')
		var today = new HeDate(new Date());
	$('#topbar>.today').html(today.toString());
	

});
