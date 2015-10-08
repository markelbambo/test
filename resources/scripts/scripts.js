function loadProducts(){
	$.getJSON( "resources/scripts/products.json", function( json ) {
		var category = json['Products'][0]['Category'];
		for(x in category[0]){
			category[x]
		}
	});
}