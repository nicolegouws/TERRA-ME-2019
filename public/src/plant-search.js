class PlantSearch extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `       
        <ion-content>
        <h2>
        Search for a plant 
        </h2>
  
                  <hr style="border: 1px solid;" />
                  <ion-searchbar></ion-searchbar>
                  <blaze-camera id="camera-photo"></blaze-camera>
                  <div class="fixed">
                      <ion-button>Take a Picture</ion-button>
                  </div>
        </ion-content>
        <terra-footer></terra-footer>
                  `;
    }
}

customElements.define('plant-search', PlantSearch);
