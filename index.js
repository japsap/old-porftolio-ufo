function show(){
  document.getElementById('slidebar').classList.toggle('active')
  document.getElementById('hui').style.display = 'none';
}
function hide(){
  document.getElementById('slidebar').classList.toggle('active')
  document.getElementById('hui').style.display = 'inline';
}


$(window).on('scroll', function(){
  var scrollTop = $(this).scrollTop();
  $( '.hscroll--left' ).css({
    left: -0.5 * scrollTop + 'px',
  });
  $( '.hscroll--right' ).css({
    left: 0.5 * scrollTop + 'px',
  });
});
//mouse cursor

const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});


window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});









$(document).ready(function() {
	var state = "playing";
	$('.play--rounded_button-wrap').on('click', function() {
		if(state == 'paused') {
			state = "playing";
			$("#from_pause_to_play")[0].beginElement();
      $("#line1,#line2").css({'stroke-width':'1'});
		} else {
			state = "paused";
			$("#from_play_to_pause")[0].beginElement();
      $("#line1,#line2").css({'stroke-width':'2'});
		}
	});
});



$(document).ready(function() {
  TweenMax.set(".project-preview", { width: 0 });

  var tl = new TimelineLite();

  $(document)
    .on("mouseover", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 1, {
        width: "600px",
        ease: Expo.easeInOut
      });
    })
    .on("mouseout", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 0.5, {
        width: 0,
        ease: Expo.easeInOut
      });
    });
});

$(".navigation-link-1").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/hero-bg.jpg)" });
});

$(".navigation-link-2").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/project-1.jpg)" });
});

$(".navigation-link-3").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/project-2.jpg)" });
});

$(".navigation-link-4").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-4.jpg)" });
});

$(".navigation-link-5").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-5.jpg)" });
});

$(".navigation-link-6").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-6.jpg)" });
});

$(".navigation-link-7").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-7.jpg)" });
});

$(".navigation-link-8").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-8.jpg)" });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $(".progressbar").css("height", scrollPercent + "%");
});

$(window).on('load', function(){
  $(".all").fadeOut();
  $(".transition-fade").fadeIn(2000)
});