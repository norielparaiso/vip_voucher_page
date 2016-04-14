var PCM = PCM || {};

PCM.vipVoucherScript = (function($) {
	var _uiFix = function(){
		$('.vip-page-container img').attr('draggable','false');
		$('.details-section .gallery img').error(function(){
			mainImg.attr("src", "http://www.pcm.com/widgets/pdp/images/no-image-available.jpg");
		});

		$('.vip-page-container .prod-listing .each-row .each-col .prodName a').trunk8({
			lines: 2,
			tooltip: true
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
					val_prodName = 'HP EliteBook Folio 9480m - Core i5 4310U / 2 GHz - Win 7 Pro 64-bit - 4 GB RAM - 256 GB SSD Self Encrypting Drive - no ODD - 14" 1600 x 900 ( HD+ )'
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
					val_prodName = 'HP ProDesk 400 G3 Intel Core i7-6700 Quad-Core 3.40GHz Microtower PC - 8GB RAM, 1TB HDD, Slim SuperMulti DVD, Gigabit Ethernet';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13810041_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13810041_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13810041_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13810041_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13810041_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13810041_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13810041_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13810041_xxlg_3.jpg" class="thumb">';
					val_price = '$699<sup>99</sup>';
					val_listPrice = '$899<sup>99</sup>';
					val_discount = '$200';
					isValid = true;
					break;

				case "1381004": // DUPLICATE SKU, PLEASE RECHECK WITH THE DESIGNER
				isValid = true;
					break;

				case "13382163":
					val_prodName = 'HP V241P - LED monitor - 23.6" - 1920 x 1080 - 250 cd/m2 - 3000:1 - 8 ms - DVI-D, VGA - black';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13382163_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13382163_xxlg_0.jpg" class="thumb">';
					val_price = '$129<sup>99</sup>';
					val_listPrice = '$149<sup>99</sup>';
					val_discount = '$20';
					isValid = true;
					break;

				case "13816882":
					val_prodName = 'HP V193b - LED monitor - 18.5" - 1366 x 768 - 200 cd/m2 - 600:1 - 5 ms - VGA - black - VGA (HD-15)';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13816882_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13816882_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13816882_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13816882_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13816882_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13816882_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13816882_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13816882_xxlg_3.jpg" class="thumb">';
					val_price = '$76<sup>99</sup>';
					val_listPrice = '$109<sup>99</sup>';
					val_discount = '$33';
					isValid = true;
					break;

				case "13756489":
					val_prodName = 'HP V222 - LED monitor - 21.5" - 1920 x 1080 - TN - 200 cd/m2 - 600:1 - 5 ms - DVI-D, VGA - black - promo';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13756489_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13756489_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13756489_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13756489_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13756489_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13756489_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13756489_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13756489_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13756489_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13756489_xxlg_4.jpg" class="thumb">';
					val_price = '$99<sup>99</sup>';
					val_listPrice = '$149<sup>99</sup>';
					val_discount = '$50';
					isValid = true;
					break;

				case "13787937":
					val_prodName = 'HP 280 G1 - Slim tower - 1 x Core i3 4170 / 3.7 GHz - RAM 4 GB - HDD 500 GB - DVD SuperMulti - HD Graphics 4400 - GigE - Microsoft Windows 7 Professional 64-bit Edition';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13787937_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13787937_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13787937_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13787937_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13787937_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13787937_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13787937_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13787937_xxlg_3.jpg" class="thumb">';
					val_price = '$371<sup>99</sup>';
					val_listPrice = '$429<sup>99</sup>';
					val_discount = '$58';
					isValid = true;
					break;

				case "13685097":
					val_prodName = 'HP 250 G4 - Core i3 5005U / 2 GHz - Win 7 Pro 64-bit - 4 GB RAM - 500 GB HDD - DVD SuperMulti - 15.6" 1366 x 768 ( HD ) - HD Graphics 5500 - black ';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13685097_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13685097_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13685097_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13685097_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13685097_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13685097_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13685097_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13685097_xxlg_4.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13685097_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13685097_xxlg_3.jpg" class="thumb">';
					val_price = '$329<sup>99</sup>';
					val_listPrice = '$429<sup>99</sup>';
					val_discount = '$100';
					isValid = true;
					break;

				case "13238735": // DUPLICATE SKU, PLEASE RECHECK WITH THE DESIGNER
					isValid = true;
					break;

				case "13184749":
					val_prodName = 'HP Workstation Z230 - MT - 1 x Core i7 4790 / 3.6 GHz - RAM 8 GB - HDD 1 TB - DVD SuperMulti - HD Graphics 4600 - GigE - Win 8.1 Pro 64-bit / Win 7 Pro 64-bit downgrade';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13184749_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13184749_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13184749_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13184749_xxlg_1.jpg" class="thumb">';
					val_price = '$799<sup>99</sup>';
					val_listPrice = '$1,199<sup>99</sup>';
					val_discount = '$400';
					isValid = true;
					break;

				case "13848731":
					val_prodName = 'HP ProBook 450 G3 Intel Core i7-6500U Dual-Core 2.50GHz Notebook PC - 8GB RAM, 1TB HDD, 15.6" FHD LED, DVD+/-RW SuperMulti';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13848731_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848731_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848731_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848731_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848731_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848731_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848731_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848731_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848731_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848731_xxlg_4.jpg" class="thumb">';
					val_price = '$699<sup>99</supp>';
					val_listPrice = '$899<sup>99</supp>';
					val_discount = '$200';
					isValid = true;
					break;

				case "13848732":
					val_prodName = 'HP ProBook 450 G3 Intel Core i3-6100U Dual-Core 2.30GHz Notebook PC - 8GB RAM, 500GB HDD, 15.6" HD LED, DVD+/-RW SuperMulti, Gigabit Ethernet';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13848732_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848732_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848732_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848732_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848732_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848732_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848732_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848732_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13848732_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13848732_xxlg_4.jpg" class="thumb">';
					val_price = '$529<sup>99</supp>';
					val_listPrice = '$649<sup>99</supp>';
					val_discount = '$121';
					isValid = true;
					break;

				case "13575801":
					val_prodName = 'HP Chromebook 11 G4 - Celeron N2840 / 2.16 GHz - Chrome OS - 4 GB RAM - 16 GB eMMC - 11.6" TN 1366 x 768 ( HD ) - HD Graphics';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13575801_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13575801_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13575801_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13575801_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13575801_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13575801_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13575801_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13575801_xxlg_3.jpg" class="thumb">';
					val_price = '$120';
					val_listPrice = '$1,499<sup>99</supp>';
					val_discount = '$159';
					isValid = true;
					break;

				case "13405392": // CAN'T FIND ANY IMAGES OF THIS PRODUCT IN THE WEBSITE
					val_prodName = 'HP Elite x2 1011 G1 - Ultrabook - Core M 5Y51 / 1.1 GHz - Win 10 Pro 64-bit - 8 GB RAM - 256 GB SSD - no ODD - 11.6" IPS touchscreen 1920 x 1080 ( Full HD ) - HD Graphics 5300 - 802.11ac, 802.11ad (WiGig) - with Elite x2 1011 G1 Power Keyboard';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13405392_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405392_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405392_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405392_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405392_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405392_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405392_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405392_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405392_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405392_xxlg_4.jpg" class="thumb">';
					val_price = '$1,459<sup>99</supp>';
					val_listPrice = '$1,499<sup>99</supp>';
					val_discount = '$159';
					isValid = true;
					break;

				case "13405359":
					val_prodName = 'HP Elite x2 1011 G1 - Tablet - no keyboard - Core M 5Y51 / 1.1 GHz - Win 8.1 64-bit - 4 GB RAM - 128 GB SSD - 11.6" IPS touchscreen 1920 x 1080';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13405359_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405359_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405359_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405359_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405359_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405359_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405359_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405359_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405359_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405359_xxlg_4.jpg" class="thumb">';
					val_price = '$1,014<sup>99</supp>';
					val_listPrice = '$1,499<sup>99</supp>';
					val_discount = '$159';
					isValid = true;
					break;

				case "13405387":
					val_prodName = 'HP Elite x2 1011 G1 - Tablet - with keyboard dock - Core M 5Y10c / 800 MHz - Win 8.1 Pro 64-bit - 4 GB RAM - 128 GB SSD - 11.6" IPS touchscreen 1920 x 1080 ( Full HD )';
					val_thumbnails = '<img src="http://i2.cc-inc.com/prod/13238000/13405387_ti_0.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405387_xxlg_0.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405387_ti_1.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405387_xxlg_1.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405387_ti_2.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405387_xxlg_2.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405387_ti_3.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405387_xxlg_3.jpg" class="thumb">'
									+'<img src="http://i2.cc-inc.com/prod/13238000/13405387_ti_4.jpg" data-large="http://i2.cc-inc.com/prod/13238000/13405387_xxlg_4.jpg" class="thumb">';
					val_price = '$949<sup>99</supp>';
					val_listPrice = '$1,499<sup>99</supp>';
					val_discount = '$159';
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
})(jQuery);


jQuery(document).ready(function() {
	PCM.vipVoucherScript.detailsPage({
		container: ".details-section",
		prodName: ".details-section .prodName",
		thumbnails: ".details-section .thumbs",
		mainImg: ".details-section .main-img",
		price:  ".details-section .price",
		listPrice:  ".details-section .lprice span",
		discount:  ".details-section .disc span"
	});

	PCM.vipVoucherScript.carousel(".prod-slider .slider");

	PCM.vipVoucherScript.uiFix();
});