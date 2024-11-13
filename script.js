

const itemButton = document.querySelector('#itemButt');
const itemList = document.querySelector('.items-list');
const sideBar = document.querySelector('#sidebar');
const contentBar = document.querySelector('.navBar_sidebar');

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
console.log(slides);
const loginButt = document.querySelector('#login-page');
const loginPage = document.querySelector('.login_body');
const loginButton = document.querySelector('#test');

   itemButton.addEventListener('click',function(){
   itemList.classList.toggle('active');
			});
	sideBar.addEventListener('click',function(){
   contentBar.classList.toggle('active');
			});



	
	let slideIndex = 0;
			
		slides[slideIndex].classList.add("active");
			
		prevBtn.addEventListener('click', prevSlide);
		nextBtn.addEventListener('click', nextSlide);
			
	function prevSlide(){
		slides[slideIndex].classList.remove("active");
        slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
		slides[slideIndex].classList.add("active");
		slider.style.transform = `translateX(-${slideIndex * 100}%)`;
	}
	function nextSlide(){
		slides[slideIndex].classList.remove("active");
			
		slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
		slides[slideIndex].classList.add("active");
		slider.style.transform = `translateX(-${slideIndex * 100}%)`;
	}
	
	   loginButt.addEventListener('click',function(){
   loginPage.classList.toggle('active');
			});
			loginButton.addEventListener('click',function(){
   loginPage.classList.toggle('active');
			});
