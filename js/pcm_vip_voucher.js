var PCM = PCM || {};

PCM.vipVoucherScript = function() {
	var _uiFix = function(){
		$('.vip-page-container img').attr('draggable','false');
		$('.details-section .gallery img').error(function(){
			mainImg.attr("src", "http://www.pcm.com/widgets/pdp/images/no-image-available.jpg");
		});
	};

	// Read a page's GET URL variables and return them as an associative array.
	var getUrlVars = function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++){
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	};

	// attach thumbnail events
	var gallery = function(elem, mainImg){
		$(elem).wrap('<a class="eachThumb" href="#"></a>');
		mainImg.append("<img/>");
		mainImg = mainImg.find('img');
		mainImg.error(function(){
			mainImg.attr("src", "http://www.pcm.com/widgets/pdp/images/no-image-available.jpg");
		});
		$('.eachThumb').click(function(e){
			e.preventDefault();
			if(!$(this).hasClass("active")){
				$('.eachThumb').removeClass("active");
				$(this).addClass("active");
				var newSrc = $(this).find('img').attr("data-large");
				mainImg.attr("src", newSrc);
			}
		});
		$('.eachThumb').hover(function(){
			$(this).trigger('click');
		});

		// show first image:
		$('.eachThumb').first().trigger('click');
	};

	// populate details page based on SKU; add events after
	var populateDetails = function(param){
		var container = $(param.container),
			prodName = $(param.prodName),
			thumbnails = $(param.thumbnails),
			mainImg = $(param.mainImg),
			price = $(param.price),
			listPrice = $(param.listPrice),
			discount = $(param.discount),
			SKU = (getUrlVars()["sku"]),
			val_prodName, val_thumbnails, val_price, val_listPrice, val_discount, isValid = false;

		if(container.length > 0){
			switch(SKU){
				case "13238735":
					val_prodName = 'HP Inc. EliteBook Folio 9480m - Core i5 4310U / 2 GHz - Win 7 Pro 64-bit - 4 GB RAM - 256 GB SSD Self Encrypting Drive - no ODD - 14" 1600 x 900 ( HD+ )'
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13238735_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13238735_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13238735_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13238735_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13238735_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13238735_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13238735_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13238735_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13238735_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13238735_xxlg_4.jpg" class="thumb">';
					val_price = '$799<sup>99</sup>';
					val_listPrice = '$1,499<sup>99</sup>';
					val_discount = '$159';
					isValid = true;
					break;

				case "13810041":
					val_prodName = 'HP Inc. Smart Buy ProDesk 400 G3 Intel Core i7-6700 Quad-Core 3.40GHz Microtower PC - 8GB RAM, 1TB HDD, Slim SuperMulti DVD, Gigabit Ethernet';
					val_thumbnails = '';
					val_price = '$699<sup>99</sup>';
					val_listPrice = '$899<sup>99</sup>';
					val_discount = '$200';
					isValid = true;
					break;

				case "1381004": // DUPLICATE SKU, PLEASE RECHECK WITH THE DESIGNER
				isValid = true;
					break;

				case "13382163":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13816882":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13756489":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13787937":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13685097":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13238735":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13184749":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13848731":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13848732":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13575801":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13405392":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13405359":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case "13405387":
					val_prodName = '';
					val_thumbnails = '';
					val_price = '';
					val_listPrice = '';
					val_discount = '';
					isValid = true;
					break;

				case undefined:
				default:
					container.html('<p>:( <br/><br/>Product not found, please try another SKU.</p>');
					break;
			}
			if(isValid){
				// start appending
				prodName.append(val_prodName);
				thumbnails.append(val_thumbnails);
				price.append(val_price);
				listPrice.append(val_listPrice);
				discount.append(val_discount);

				gallery(".thumb",mainImg);
			}
			container.show();
		}
	};

	var _carousel = function(elem){
		if ($(elem).length > 0) {
			$(elem).owlCarousel({
				items: 6,
				singleItem: false,
				slideSpeed: 200,
				paginationSpeed: 800,
				rewindSpeed: 1000,
				autoPlay: true,
				stopOnHover: false,
				navigation: true,
				navigationText: ["<", ">"],
				scrollPerPage: false,
				pagination: false,
				paginationNumbers: false,
				responsive: false,
				responsiveRefreshRate: 200,
				autoHeight: false,
				mouseDrag: true,
				touchDrag: true
			});
		}
	};

	return {
		uiFix: _uiFix,
		detailsPage: populateDetails,
		carousel: _carousel
	};
}

$(function() {
	$(document).ready(function(){
		PCM.vipVoucherScript().detailsPage({
			container: ".details-section",
			prodName: ".details-section .prodName",
			thumbnails: ".details-section .thumbs",
			mainImg: ".details-section .main-img",
			price:  ".details-section .price",
			listPrice:  ".details-section .lprice span",
			discount:  ".details-section .disc span"
		});

		PCM.vipVoucherScript().carousel(".prod-slider .slider");

		PCM.vipVoucherScript().uiFix();
	});
});