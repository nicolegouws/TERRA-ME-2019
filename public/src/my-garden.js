class MyGarden extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = 
        `
        <ion-content padding>
        <ion-grid>
        <ion-row>
           <ion-col size="12">
            </ion-col>
        </ion-row>
      </ion-grid>

        <h2>
        My garden  
         <ion-icon name="list"> </ion-icon>
    </h2>
    <hr style="border: 1px solid;" />
        
    <div class ="fixed">
      <ion-button>Add a plant   </ion-button>
    </div>
        
    <div class="new-card img8">            
       <div class="new-card-top-text">
             Cactus
          </div>
          <div class="new-card-bottom-text">
             Create a reminder
    
         <ion-fab  class="reminder">
          <ion-fab-button>
          <ion-icon name="calendar" size="small"></ion-icon>
          </ion-fab-button>
         </ion-fab>
        </div> 
    </div>
         
    <div class="new-card img1">   
          
      <div class="new-card-top-text">
             Aloe
          </div>
          <div class="new-card-bottom-text">
             Water in 3 days
          </div> 
      </div>
        
        
    <div class="new-card img2">
          <div class="new-card-top-text">
             Basil
          </div>
          <div class="new-card-bottom-text">
             Create a reminder       
      <ion-fab  class="reminder">
      <ion-fab-button>
        <ion-icon name="calendar" size="small"></ion-icon>
        </ion-fab-button>
        </ion-fab>       
        </div>    
        </div>
    
        
    <div class="new-card img3">
          <div class="new-card-top-text">
             Daffodil
          </div>
        <div class="new-card-bottom-text">
             Create a reminder
      <ion-fab  class="reminder">
      <ion-fab-button>
        <ion-icon name="calendar" size="small"></ion-icon>
        </ion-fab-button>
       </ion-fab>
        </div> 
        </div>
    
    <div class="new-card img4">
          <div class="new-card-top-text">
             Daisy
          </div>
          <div class="new-card-bottom-text">
             Water in 2 days
          </div> 
        </div>
    
    <div class="new-card img5">
          <div class="new-card-top-text">
             Fern
          </div>
          <div class="new-card-bottom-text">
             Water today
          </div> 
        </div>
    
    <div class="new-card img6">
          <div class="new-card-top-text">
             Orchid
          </div>
          <div class="new-card-bottom-text">
             Water tomorrow
          </div> 
        </div>
    
    <div class="new-card img7">
          <div class="new-card-top-text">
             Tomato 
          </div>
          <div class="new-card-bottom-text">
             Water today
          </div> 
        </div>
      </ion-content>
    `; 
    }
   }
   customElements.define('my-garden', MyGarden);