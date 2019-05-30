class TerraFooter extends HTMLElement{
 constructor(){
  super();
 }
 connectedCallback(){
     this.innerHTML = `

  <div id="footer">
    <div class="centerlist">
      <div class="footer-icon">
        <ul>
          <li><ion-icon name="logo-facebook"></ion-icon></li>
          <li><ion-icon name="logo-twitter"></ion-icon></li>
          <li><ion-icon name="logo-instagram"></ion-icon></li>
          <li><ion-icon name="logo-linkedin"></ion-icon></li>
          <li><ion-icon name="logo-youtube"></ion-icon></li>
         </ul>
     <div/>
   </div>
  </div>`;    
 }
}
customElements.define('terra-footer', TerraFooter);