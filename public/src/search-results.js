class SearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `
        <ion-content>
        <h2>
    Plant search results
  </h2>
<hr style="border: 1px solid;" />
<ion-searchbar animated></ion-searchbar>
<h3 style="text-align:left ; margin:24px; color:black">Search results for: “Cactus”</h3>
<hr style="border: 1px solid;" />

<div>
    <img id="searchResulImages" src="assets/agave.jpg">
    <div class="searchResultText">
        Agave
        <ion-fab class="readMore"></ion-fab>
                <ion-icon name="more"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="top">
            <span><ion-icon name="more"></ion-icon></span>
                <div class="dropdown-content">
                <div class="dropdown">
                    <div class="centerlist">
                     <div class="rose">
                     <ul>
                     <li> <ion-icon class="rose" name="rose"></ion-icon>Add to my garden</li>
                     <li> <ion-icon class="rose" name="rose"></ion-icon>Add to my garden</ion-icon></li>
                     </ul>
                <div/>
             </div>
            </div>


            <div>
            <img id="searchResulImages" src="assets/Aloe1.jpg">
            <div class="searchResultText">
                Aloe
                <ion-fab class="readMore"></ion-fab>
                        <ion-icon name="more"></ion-icon>
                    </ion-fab-button>
                    <ion-fab-list side="top">
                    <span><ion-icon name="more"></ion-icon></span>
                        <div class="dropdown-content">
                        <div class="dropdown">
                            <div class="centerlist">
                             <div class="rose">
                             <ul>
                             <li> <ion-icon class="rose" name="rose"></ion-icon>Add to my garden</li>
                             <li> <ion-icon class="rose" name="rose"></ion-icon>Add to my garden</ion-icon></li>
                             </ul>
                        <div/>
                     </div>
                    </div> 

                    <div>
                    <img id="searchResulImages" src="assets/burrostailbasket-1200x1200.jpg">
                    <div class="searchResultText">
                        Burros Tail
                        <ion-fab class="readMore"></ion-fab>
                                <ion-icon name="more"></ion-icon>
                            </ion-fab-button>
                            <ion-fab-list side="top">
                            <span><ion-icon name="more"></ion-icon></span>
                                <div class="dropdown-content">
                                <div class="dropdown">
                                    <div class="centerlist">
                                     <div class="rose">
                                     <ul>
                                     <li> <ion-icon class="rose" name="rose"></ion-icon>Add to my garden</li>
                                     <li> <ion-icon class="rose" name="rose"></ion-icon>Add to my garden</ion-icon></li>
                                     </ul>
                                <div/>
                             </div>
                            </div> 

        </ion-content>
        <terra-footer></terra-footer>
                    `;   
    }
   }
   
   customElements.define('search-results', SearchResults);