
var deviceLinkBox = document.querySelector(".link_options");

document.querySelector(".menu-opt").addEventListener("click", function() {
   deviceLinkBox.style.transform = "translateX(0%)";
} );

document.querySelector(".back").addEventListener("click", function() {
   deviceLinkBox.style.transform = "";
} );


var organizations = document.querySelectorAll(".o-tab");

organizations.forEach( function( tabs ) {
   tabs.addEventListener("click", function() {
      var link = document.createElement("a");
      link.href = this.dataset["url"];
      link.click ? link.click() : undefined;
   } );
} );

document.querySelector(".o-website").addEventListener("click", function() {
   var link = document.createElement("a");
      link.href = "https://www.youtube.com/channel/UCSJlrclJyyzqtKT2SHwbT4Q";
      link.click ? link.click() : undefined;
} );