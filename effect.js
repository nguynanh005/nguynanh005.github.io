$(window).load(function(){
	$('.loading').fadeOut('fast');
	// Don't show container immediately, wait for password
	// $('.container').fadeIn('fast');
	createParticles();
	initPasswordModal();
});

// Typing effect text
const storyText = `Vào ngày 20 tháng 8 của 20 năm về trước, khi những cơn gió bắt đầu mang theo hơi thở dịu dàng của mùa thu, có một cô bé đã chào đời. Cha mẹ đặt cho cô bé ấy cái tên rất hay đí là: Nguyễn Thị Minh Ánh, với hy vọng cuộc đời cô ấy sẽ luôn là một vệt nắng trong veo và rạng rỡ. Cô bé ấy lớn lên cùng mùa thu, mang trong mình một tâm hồn nhạy cảm, sâu lắng và một chút tĩnh lặng như chính tiết trời lúc giao mùa, đó là lý do mà cô bé ấy được 1 hacker gọi với biệt danh là cô bạn mùa thu.

Khi bước vào tuổi thiếu nữ, cô bé ngày nào giờ đã trở thành một cô thiếu nữ, tâm hồn nhạy cảm của cô gái mùa thu ấy lần đầu biết rung động. Nhưng cơn mưa đầu đời ấy lại mang theo cả bão giông. Cô vô tình bước vào một mối quan hệ mà ở đó, những đám mây u tối dần che lấp đi ánh nắng trong trẻo của cô. Có những ngày, nụ cười của Minh Ánh không còn rạng rỡ, và năng lượng tích cực mà cô vốn có dường như cũng cạn kiệt. Sự yếu đuối và nhạy cảm trong cô khiến cô loay hoay, chìm đắm trong những cảm xúc tiêu cực. Đó là những ngày tháng mà mùa thu trong lòng cô chỉ còn lại lá úa và những cơn gió lạnh.

Nhưng rồi, ẩn sâu bên trong vẻ ngoài mong manh ấy là một sức mạnh kiên cường mà chính cô bạn ấy đôi khi cũng không nhận ra. Sức mạnh ấy được nuôi dưỡng từ những câu chuyện, từ thế giới tưởng tượng mà cô luôn yêu mến. Minh Ánh tìm thấy sự đồng điệu với chàng lãng khách Kaedehara Kazuha trong thế giới Teyvat xa xôi. Cô bạn ấy nhìn thấy ở nhân vật kia hình ảnh của một tâm hồn tự do, dù mang trong mình nỗi buồn về quá khứ nhưng vẫn chọn cách bước tiếp, lắng nghe cơn gió và sống một cuộc đời an nhiên.

Chính lúc đó, Minh Ánh nhận ra rằng, mình không thể để cơn bão lòng nhấn chìm. Cô gái mùa thu đã quyết định phải tự mình xua tan mây đen. Cô dũng cảm buông bỏ mối quan hệ độc hại đã bào mòn tâm hồn mình. Quá trình ấy không hề dễ dàng, có cả nước mắt và những vết sẹo, nhưng nó đã tôi luyện nên một Minh Ánh mà mọi người thấy ngày hôm nay.

Cô bạn ấy bắt đầu dùng chính những trải nghiệm của mình để làm chất liệu cho sáng tạo. Những bản thiết kế của cô giờ đây không chỉ có màu sắc tươi sáng, mà còn có cả chiều sâu của những gam màu trầm. Cô bạn đó cũng học cách biến những nhân vật mình yêu thích thành hiện thực qua cosplay, khoác lên mình không chỉ là trang phục, mà còn là sức mạnh và câu chuyện của họ.

Và điều kỳ diệu nhất đã xảy ra. Sau khi tự chữa lành cho chính mình, Minh Ánh lại trở thành điểm tựa cho những người xung quanh. Cô ấy trở thành một người bạn biết lắng nghe, biết sẻ chia, bởi cô hiểu cảm giác khi phải trải qua những chuyện không vui là như thế nào. Năng lượng tích cực mà cô lan toả giờ đây không còn là sự hồn nhiên trong trẻo, mà là sự lạc quan được tôi luyện qua giông bão, ấm áp và chân thành hơn bao giờ hết.

Hôm nay, ngày 20 tháng 8 năm 2025, cô gái mùa thu ấy tròn 20 tuổi. Minh Ánh không còn là cô bé hay khóc ngày nào, cũng không phải là cô thiếu nữ chìm trong tiêu cực. Bây giờ cô ấy là một Nguyễn Thị Minh Ánh vừa yếu đuối để cảm thông, vừa mạnh mẽ để vượt qua. Cô là một nhà thiết kế tài năng, một cosplayer đầy đam mê, và là một người bạn tuyệt vời.

Hành trình 20 năm của cô gái mùa thu đã biến những chiếc lá non thành một tán cây rực rỡ, sẵn sàng đối mặt với mọi cơn gió. Và câu chuyện đó, chắc chắn rằng, chỉ mới bắt đầu.

🎉 Chúc mừng sinh nhật, Nguyễn Thị Minh Ánh! 🎂`;

// Typing animation function
function typeWriter(text, element, speed = 50) {
	console.log('Starting typeWriter with text length:', text.length);
	console.log('Element found:', element.length);
	console.log('Element:', element);
	console.log('Text preview:', text.substring(0, 100) + '...');
	
	// Clear existing content and make sure element is visible
	element.html('').show();
	
	let i = 0;
	// Hide cursor completely
	const cursor = $('#cursor');
	cursor.hide();
	
	function type() {
		if (i < text.length) {
			const currentText = text.substring(0, i + 1);
			// Convert line breaks to <br> tags and wrap in div with left alignment
			const formattedText = currentText.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
			element.html('<div style="text-align: left; white-space: pre-wrap;">' + formattedText + '</div>');
			console.log('Typing position:', i, 'Character:', text.charAt(i));
			i++;
			setTimeout(type, speed);
		} else {
			console.log('Typing completed');
			// Show birthday wish directly without cursor animation
			setTimeout(() => {
				$('#birthdayWish').fadeIn(1000);
			}, 1000);
		}
	}
	
	// Start typing immediately
	console.log('Starting to type...');
	type();
}

// Initialize password modal
function initPasswordModal() {
	const modal = $('#passwordModal');
	const passwordInput = $('#passwordInput');
	const submitBtn = $('#submitPassword');
	const toggleBtn = $('#togglePassword');
	const errorMessage = $('#errorMessage');
	const correctPassword = '20082005';
	
	// Show modal
	modal.show();
	
	// Focus on input
	setTimeout(() => {
		passwordInput.focus();
	}, 500);
	
	// Toggle password visibility
	toggleBtn.click(function() {
		const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
		passwordInput.attr('type', type);
		$(this).text(type === 'password' ? '👁️' : '🙈');
	});
	
	// Handle submit
	function checkPassword() {
		const enteredPassword = passwordInput.val().trim();
		
		if (enteredPassword === '') {
			showError('Vui lòng nhập mật khẩu!');
			return;
		}
		
		if (enteredPassword === correctPassword) {
			// Correct password
			successAnimation();
		} else {
			// Wrong password
			showError('Mật khẩu không đúng! Hãy thử lại 🤔');
			passwordInput.val('');
			passwordInput.addClass('shake');
			setTimeout(() => {
				passwordInput.removeClass('shake');
			}, 500);
		}
	}
	
	// Submit button click
	submitBtn.click(checkPassword);
	
	// Enter key press
	passwordInput.keypress(function(e) {
		if (e.which === 13) {
			checkPassword();
		}
	});
	
	// Show error message
	function showError(message) {
		errorMessage.text(message).slideDown();
		setTimeout(() => {
			errorMessage.slideUp();
		}, 3000);
	}
	
	// Success animation and hide modal
	function successAnimation() {
		errorMessage.hide();
		submitBtn.text('🎉 Chào mừng!').css('background', 'linear-gradient(45deg, #4caf50, #8bc34a)');
		
		// Start falling images immediately when password is correct
		createFallingImages();
		
		// Auto play music after password is correct
		setTimeout(() => {
			var audio = $('.song')[0];
			if (audio) {
				audio.play().catch(function(error) {
					console.log('Auto-play was prevented:', error);
				});
			}
		}, 1500);
		
		setTimeout(() => {
			modal.addClass('success-exit');
			setTimeout(() => {
				modal.hide();
				$('.container').fadeIn('slow');
				
				// Auto start balloon flying immediately after login
				setTimeout(() => {
					// Make sure balloons are visible first
					$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').show();
					// Then trigger the flying effect
					triggerBalloonFlying();
				}, 500);
				
				// Auto start decorate after balloon flying (1.5 seconds later)
				setTimeout(() => {
					$('.bannar').addClass('bannar-come');
				}, 2000); // 500ms for balloon + 1500ms delay = 2000ms total
			}, 800);
		}, 1000);
	}
}

// Create floating particles effect
function createParticles() {
	const particlesContainer = $('.particles');
	
	setInterval(function() {
		const particle = $('<div class="particle"></div>');
		const size = Math.random() * 5 + 2;
		const left = Math.random() * 100;
		const duration = Math.random() * 3 + 3;
		
		particle.css({
			left: left + '%',
			width: size + 'px',
			height: size + 'px',
			animationDuration: duration + 's'
		});
		
		particlesContainer.append(particle);
		
		setTimeout(function() {
			particle.remove();
		}, duration * 1000);
	}, 300);
}

// Create falling images effect
function createFallingImages() {
	const fallingContainer = $('.falling-images');
	const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	
	// Preload all images to prevent flickering
	const preloadedImages = {};
	imageNumbers.forEach(num => {
		const img = new Image();
		img.src = `${num}.jpg`;
		preloadedImages[num] = img;
	});
	
	function createFallingImage() {
		const imageNum = imageNumbers[Math.floor(Math.random() * imageNumbers.length)];
		const image = $(`<img src="${imageNum}.jpg" alt="Memory ${imageNum}" class="falling-image">`);
		
		const left = Math.random() * 75; // 0-75% to avoid edges with larger images
		const duration = Math.random() * 5 + 10; // 10-15 seconds
		const maxSize = Math.random() * 60 + 100; // 100-160px max size
		const rotationSpeed = Math.random() * 2 + 1; // 1-3x rotation speed
		
		// Set max size but keep aspect ratio
		image.css({
			left: left + '%',
			maxWidth: maxSize + 'px',
			maxHeight: maxSize + 'px',
			animationDuration: duration + 's',
			animationDelay: Math.random() * 1 + 's' // Random delay 0-1s
		});
		
		// Preload image to prevent flickering
		image.on('load', function() {
			// Image loaded successfully, add to container
			fallingContainer.append(image);
			
			// Remove image only after it completely falls down (reaches bottom)
			setTimeout(function() {
				image.remove();
			}, (duration + 3) * 1000); // Extra time to ensure it reaches bottom
		});
		
		// Add error handling for missing images
		image.on('error', function() {
			$(this).attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmNmI2YjtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNGVjZGM0O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjx0ZXh0IHg9Ijc1IiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+TuDwvdGV4dD4KPC9zdmc+');
			fallingContainer.append(image);
			
			// Remove image only after it reaches bottom
			setTimeout(function() {
				image.remove();
			}, (duration + 3) * 1000); // Extra time for fallback images too
		});
	}
	
	// Create falling images at intervals
	setInterval(function() {
		createFallingImage();
	}, 1000); // Create new image every 1 second for more density
}

// Function to trigger balloon flying effect
function triggerBalloonFlying() {
	// Exactly the same as the original button click
	$('.balloon-border').animate({top:-500},8000);
	$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
	$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
	
	// Start all loop functions exactly like the original
	loopOne();
	loopTwo();
	loopThree();
	loopFour();
	loopFive();
	loopSix();
	loopSeven();
}

$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		
		// Add sparkle effect
		createSparkles();
		
		// Trigger balloons flying effect when lights turn on
		setTimeout(() => {
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').show();
			triggerBalloonFlying();
		}, 1000);
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});
	
	// Create sparkle effect for lights
	function createSparkles() {
		const bulbs = ['#bulb_yellow', '#bulb_red', '#bulb_blue', '#bulb_green', '#bulb_pink', '#bulb_orange'];
		
		bulbs.forEach(function(bulb) {
			setInterval(function() {
				const sparkle = $('<div style="position: absolute; width: 4px; height: 4px; background: white; border-radius: 50%; animation: sparkle 1s ease-out forwards;"></div>');
				const bulbPos = $(bulb).offset();
				const randomX = Math.random() * 50 - 25;
				const randomY = Math.random() * 50 - 25;
				
				sparkle.css({
					left: bulbPos.left + randomX + 'px',
					top: bulbPos.top + randomY + 'px',
					zIndex: 1000
				});
				
				$('body').append(sparkle);
				
				setTimeout(function() {
					sparkle.remove();
				}, 1000);
			}, 500);
		});
	}
	
	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		console.log('Story button clicked');
		// Hide this button
		$(this).fadeOut('slow');
		
		// Hide all other effects except memory rain
		$('.balloons').fadeOut('fast');
		$('.balloon-border').fadeOut('fast');
		$('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').fadeOut('fast');
		$('.bannar').fadeOut('fast');
		$('.cake').fadeOut('fast');
		$('.fuego').fadeOut('fast');
		$('.navbar').fadeOut('fast');
		
		// Show message container and start typing effect
		setTimeout(() => {
			console.log('Showing message container');
			$('.message').fadeIn('slow', function() {
				console.log('Message container is now visible');
				// Start typing effect after message container is visible
				setTimeout(() => {
					console.log('About to start typing effect');
					const typedTextElement = $('#typedText');
					console.log('Found typedText element:', typedTextElement.length);
					
					// Make sure the typing container is visible
					$('.typing-container').show();
					$('#typedText').show();
					$('#cursor').show();
					
					typeWriter(storyText, typedTextElement, 50); // Slower speed for testing
				}, 500);
			});
		}, 1000);
	});
});




//alert('hello');
