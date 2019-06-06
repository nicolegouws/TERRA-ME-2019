class PlantSearch extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = this.template;
		const camera = document.querySelector('blaze-camera');

		camera.addEventListener('photo', async (e) => {
			const blob = e.detail;
			const dataUrl = await camera.toDataURL(blob);
			console.log(dataUrl); // data:image/png;base64,iVBORw0KGg...
        });
        
        const button = document.querySelector('#take-picture');
        button.addEventListener('click' , async ()=>{
            await camera.on();
            camera.takePhoto();
        })
	}

	get template() {
		return `
        <ion-content>
        <h2>
        Search for a plant 
        </h2>
        <hr style="border: 1px solid;" />
        <ion-searchbar></ion-searchbar>
        <blaze-camera id="camera-photo">
        </blaze-camera>
        <div class="fixed">
            <ion-button id="take-picture">Take a Picture</ion-button>
        </div>
        </ion-content>
        <terra-footer></terra-footer>
        `;
	}
}

customElements.define('plant-search', PlantSearch);
