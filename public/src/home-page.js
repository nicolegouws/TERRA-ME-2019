class HomePage extends HTMLElement{
 constructor(){
  super();
 }
 connectedCallback(){
     this.innerHTML = `
     <ion-content>
     <div><img id="banner" src="/Users/nicolegouws/TERRA-ME-2019/public/assets/PlantCare_MadeEasy -01@2x.png"></div>
     <h1>Welcome back Emma</h1>
     <div><img id="profilePicture" src="/Users/nicolegouws/TERRA-ME-2019/public/assets/Ema.png"></div>
     <ion-button>My Garden</ion-button>
     </ion-content>
     `;    
 }
}
customElements.define('home-page', HomePage);