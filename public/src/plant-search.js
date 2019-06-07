class PlantSearch extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = this.template;
		const camera = document.querySelector('blaze-camera');
		camera.hidden = true;
		camera.addEventListener('photo', async (e) => {
			const blob = e.detail;
			const dataUrl = await camera.toDataURL(blob);
			document.querySelector('ion-router').push('/search-results');
			console.log(dataUrl); // data:image/png;base64,iVBORw0KGg...
		});


		const button = document.querySelector('#take-picture');
		button.hidden = true;
		button.addEventListener('click', async () => {
			camera.takePhoto();
		});

		const cameraPlaceholder = document.querySelector('#placeholder');
		cameraPlaceholder.addEventListener('click', async () => {
			await camera.on();
			document.querySelector('#placeholder').hidden = true;
			document.querySelector('#camera-photo').hidden = false;
			button.hidden = false;
		});

	}

	get template() {
		return `
        <ion-content>
        <h2>
        Search for a plant 
        </h2>
  
                  <hr style="border: 1px solid;" />
                  <h3 class="h3black">Take a photo or search our library</h3>
                  <div class="topnav">

                  <input type="text" placeholder="| ">
				  </div>
				
                  <blaze-camera id="camera-photo">
                  </blaze-camera>
				  <img id="placeholder" src="assets/Group.png" />
				 
  
                  <div class="fixed">
                      <ion-button id="take-picture">Take a Picture</ion-button>
                  </div>
        </ion-content>
        <terra-footer></terra-footer>
        `;
	}
}

customElements.define('plant-search', PlantSearch);
