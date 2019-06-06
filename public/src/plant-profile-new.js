class PlantProfile extends HTMLElement {
	constructor() {
		super();
		this.slideIndex = 1;
		this.plusSlides = this.plusSlides.bind(this);
		this.showSlides = this.showSlides.bind(this);
		this.currentSlide = this.currentSlide.bind(this);
	}

	connectedCallback() {
		this.innerHTML = this.template;

		const btnNext = document.querySelector('.next');
		btnNext.addEventListener('click', this.plusSlides.bind(this));
		const btnPrev = document.querySelector('.prev');
		btnPrev.addEventListener('click', this.plusSlides.bind(this));
		const btnDots = document.querySelectorAll('.dot');
		Array.from(btnDots).forEach((element) => {
			element.addEventListener('click', this.currentSlide.bind(this));
		});
		this.showSlides(this.slideIndex);
	}

	showSlides(n) {
		var i;
		var slides = document.getElementsByClassName('mySlides');
		var dots = document.getElementsByClassName('dot');
		if (n > slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '');
		}
		slides[this.slideIndex - 1].style.display = 'block';
		dots[this.slideIndex - 1].className += ' active';
	}

	plusSlides(n) {
		let modify = n.currentTarget.dataset.value;
		this.showSlides((this.slideIndex += Number(modify)));
	}

	currentSlide(n) {
		let modify = n.currentTarget.dataset.value;
		this.showSlides((this.slideIndex = Number(modify)));
	}

	get template() {
		return `
    <ion-content padding>
    <ion-grid>
    <ion-row>
       <ion-col size="12">
        </ion-col>
    </ion-row>
  </ion-grid> 
  <h2>Plant profile </h2>
  <hr style="border: 1px solid;"/>

 <div class ="fixed">
  <ion-button>Add To My Garden </ion-button>
 </div>
<div class="new-card img8">           
<div class="new-card-top-text">
 Cactus
</div>
<div class="new-card-bottom-text-profile">
 A low maintenance plant that is ideal for busy people and indoor spaces
</div> 
</div>      

<ion-grid>
<ion-row>
<ion-col size="2"> <img src="/assets/FullSun.svg">
</ion-col>
<ion-col size="9"><p>Full Sun </p>
</ion-col>
</ion-row><hr style="border: 1px solid;" /> 
</ion-grid>    


<ion-grid>
<ion-row>
<ion-col size="2"> <img src="/assets/Water.svg">
</ion-col>
<ion-col size="9"><p> Water every 3 weeks when dormant, weekly when in bloom</p>
</ion-col>
</ion-row><hr style="border: 1px solid;" /> 
</ion-grid>       

<ion-grid>
<ion-row>
<ion-col size="2"> <img src="/assets/Grow Icon.svg">
</ion-col>
<ion-col size="9"><p>Indoors in non-desert climates</p>
</ion-col>
</ion-row><hr style="border: 1px solid;" /> 
</ion-grid>      



<section>  
<div class="know-top-text">
<h2>Did you know? </h2>
</div>


<div class="slideshow-container">

<div class="mySlides fade">
<div class="numbertext">1 / 3</div>
<img src="/assets/cactus_know.jpg" style="width:100%">
<div class="text">The cactus is a perennial succulent that does well as a houseplant.</div>
</div>

<div class="mySlides fade">
<div class="numbertext">2 / 3</div>
<img src="/assets/agave.jpg" style="width:100%">
<div class="text">Ideal companion plants include other succulents such as agave.</div>
</div>

<div class="mySlides fade">
<div class="numbertext">3 / 3</div>
<img src="/assets/cactusfood.jpg" style="width:100%">
<div class="text">The pads of the nopal cactus are often eaten as a vegetable. They can be be cooked or eaten raw.</div>
</div>

<a class="prev btn-arrows" data-value="-1">&#10094;</a>
<a class="next btn-arrows" data-value="1">&#10095;</a>

</div>
<br>

<div style="text-align:center">
<span class="dot" data-value="1"></span> 
<span class="dot" data-value="2"></span> 
<span class="dot" data-value="3"></span> 
</div>


</section>       

<hr style="border: 1px solid;" />    
<h3>
Prickly cactus?
</h3>
<p>Have a prickly cactus and not sure what to do? 
Make an appointment with our Plant Doctor to find out how to solve your problems. </p>

<ion-button> Visit Plant Doctor </ion-button>

</ion-content>  
<terra-footer></terra-footer>
    `;
	}
}

customElements.define('plant-profile', PlantProfile);
