// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
    "https://weblot.gr/css/menu.css",
    "https://weblot.gr/css/mobile.css",
    "https://weblot.gr/css/main.css",
    "https://weblot.gr/css/card.css",
    "https://weblot.gr/css/popup.css",
    "https://weblot.gr/css/contact.css",
    "https://weblot.gr/css/service.css",
    "https://weblot.gr/css/service.css",
    "https://weblot.gr/css/service.css",
    "https://weblot.gr/css/service.css"
  ];
 
 const head = document.head;
 cssLinks.forEach(linkUrl => {
     const linkElement = document.createElement('link');
     linkElement.rel = 'stylesheet';
     linkElement.href = linkUrl;
     head.appendChild(linkElement);  // Προσθήκη στο head
 });

 document.addEventListener('DOMContentLoaded', function() {

 var add_script ;
 add_script  = document.createElement('script');

 if (document.body.id === 'main_page') {  
    add_script.src = 'https://weblot.gr/js/script.js';
    document.body.appendChild(add_script);
    
    add_script.src = 'https://weblot.gr/js/popup.js';
    document.body.appendChild(add_script);
    
    add_script.src = 'https://weblot.gr/js/animation-card.js';
    document.body.appendChild(add_script);
 }



 add_script.src = 'https://weblot.gr/js/script.js';
 document.body.appendChild(add_script);

});