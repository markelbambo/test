function loadProducts(){
	
	//$.getJSON( "resources/scripts/products.json", function( json ) {
		var json = { "ShopName": "Betica Shop", "Products": [ { "Category": [ { "Phone": [{	"name":"iPhone6",	"description":"Manufactured by Apple, to be released in 2015",	"price":"1000",	"imgsrc":"iphone6.jpeg"	},{	"name":"iPhone6 Plus",	"description":"Manufactured by Apple, to be released in 2015",	"price":"1000",	"imgsrc":"iphone6-plus.png"	},{	"name":"Galaxy S6",	"description":"Manufactured by Samsung, to be released in 2015",	"price":"1000",	"imgsrc":"galaxy-s6.jpg"	},{	"name":"Note 5",	"description":"Manufactured by Samsung, to be released in 2015",	"price":"1000",	"imgsrc":"note5.jpg"	} ], "Laptop": [{ "name":"Samsung",	"description":"Manufactured by Samsung, to be released in 2015",	"price":"1000",	"imgsrc":"samsung-laptop.jpeg" }] } ] } ] }
		var category = json['Products'][0]['Category'];
		console.log("category==",category);
		var shopName = (json['ShopName']).toUpperCase();
		$(".shopName").text(shopName);
		for(x in category[0]){
			$("#contents").append(categoryCreator(x));
			$("#category-"+x).append(productCreator(category[0][x]));
		}
	//});
}

function categoryCreator(name){
	var str = '<div id="category-'+name+'">';
	str += '<div class="categBox-Header">'
	str += '<h3><span class="label label-primary">'+name.toUpperCase()+'</span></h3>';
	str += '</div></div>';
	return str;
}

function productCreator(obj){
	var str = "";
	for(x in obj){
	str += '<div class="categBox">'
	str += '		<div class="panel panel-primary">';
	str += '			<div class="panel-heading">'+obj[x]['name']+'</div>';
	str += '			<div class="panel-body">';
	str += '				<div class="categBox-content-body-main">';
	str += '					<div class="categBox-content-body-image">';
	str += '						<img src="resources/images/'+obj[x]['imgsrc']+'">';
	str += '					</div>';
	str += '					<div class="categBox-content-body-main-rigth">';
	str += '						<div class="categBox-content-body-description">';
	str += 							 obj[x]['description'];
	str += '						</div>';
	str += '						<div class="categBox-content-body-main-rigth-buttons">';
	str += '							<span class="label label-info price-label">$'+obj[x]['price']+'</span>';
	str += '							<button class="btn btn-default btn-sm" role="group" aria-label="Add to cart">';
	str += '								Add to cart';
	str += '								<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>';
	str += '							</button>';
	str += '						</div>';
	str += '					</div>';
	str += '				</div>';	
	str += '			</div>';
	str += '		</div>';
	str += '	</div>'
	}
	return str;
}