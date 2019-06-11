class HomePage extends HTMLElement{
 constructor(){
  super();
 }
 connectedCallback(){
     this.innerHTML = `
     <ion-content>
     <div><img id="banner" src="/assets/PlantCare_MadeEasy -01@2x.png"></div>
     <h1>Welcome back Emma</h1>
     <div><img id="profilePicture" src="/assets/Ema.png"></div>
     <ion-button href="/my-garden-nc/:id">My Garden </ion-button>
     </ion-content>
     <terra-footer></terra-footer>
     
     `;    
 }
}
customElements.define('home-page', HomePage);