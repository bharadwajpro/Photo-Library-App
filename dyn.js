var img_num = 1;
var img_height = 0; //default value
var total_images = 10;

$(window).on('load', function() {
  // When the page has loaded
  // $("body").fadeIn(2000);
  $(".gif_loader").fadeOut(2000);
  img_height = document.getElementsByTagName('img')[0].clientHeight
});

document.getElementById('prevpic').style.visibility = 'hidden';

function loader(a) {
	//console.log(a);
	return '<div id="mydiv" style="height: ' + a + 'px; width: 100%; position: relative;"><div class="loader"></div></div>';
}

function image_url(a) {
	return "https://res.cloudinary.com/dcynwcimw/image/upload/v1472751014/dhbsdjzsgjhgzdsuyhgvjdzjkdsghfv/" + a + ".jpg";
}

function img_html_str_next(a) {
	return '<img src="' + image_url(a + 1) + '" class="img-responsive" width="100%">';
}

function img_html_str_prev(a) {
	return '<img src="' + image_url(a - 1) + '" class="img-responsive" width="100%">';
}

function info_string(a) {
	return 'Viewing ' + a + ' of ' + total_images + ' images';
}

document.getElementById('nextpic').addEventListener('click', function () {
	document.getElementById('pic').innerHTML = loader(img_height);

	var img = new Image();
	img.onload =  function() {
  		document.getElementById('pic').innerHTML = img_html_str_next(img_num);
  		setTimeout(function(){
  			img_height = document.getElementsByTagName('img')[0].clientHeight;	
  		}, 1000);
  		img_num++;
  		if(img_num == 2){
			document.getElementById('prevpic').style.visibility = 'visible';
		}
		if(img_num == total_images){
			document.getElementById('nextpic').style.visibility = 'hidden';
		}

		document.getElementById('info').innerHTML = info_string(img_num);
	}
	img.onerror = function () {
		console.log('Image loading error');
	}

	img.src = image_url(img_num + 1);

});

document.getElementById('prevpic').addEventListener('click', function () {

	document.getElementById('pic').innerHTML = loader(img_height);

	var img = new Image();
	img.onload = function() {
  		document.getElementById('pic').innerHTML = img_html_str_prev(img_num);
  		setTimeout(function(){
  			img_height = document.getElementsByTagName('img')[0].clientHeight;	
  		}, 1000);
  		img_num--;

		if(img_num == 1){
			document.getElementById('prevpic').style.visibility = 'hidden';
		}
		if(img_num == total_images - 1){
			document.getElementById('nextpic').style.visibility = 'visible';
		}

		document.getElementById('info').innerHTML = info_string(img_num);	
	}

	img.onerror = function () {
		console.log('Image loading error');
	}
	img.src = image_url(img_num - 1);

});
