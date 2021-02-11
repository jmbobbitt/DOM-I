const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//nav section

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const a = document.querySelectorAll( "header nav a")
a[0].textContent = siteContent["nav"] ["nav-item-1"];
a[1].textContent = siteContent["nav"] ["nav-item-2"];
a[2].textContent = siteContent["nav"] ["nav-item-3"];
a[3].textContent = siteContent["nav"] ["nav-item-4"];
a[4].textContent = siteContent["nav"] ["nav-item-5"];
a[5].textContent = siteContent["nav"] ["nav-item-6"];

for (var i = 0; i< a.length; i++){
  a[i].style.color ='green';
}

// cta section 
const title = document.querySelector(".cta-text h1")
title.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

let circleLogo = document.getElementById("cta-img")
circleLogo.setAttribute('src', siteContent["cta"] ["img-src"]);

let getStarted = document.querySelector("button")
getStarted.textContent = siteContent["cta"] ["button"];


//main content section
let barLogo = document.getElementById("middle-img")
barLogo.setAttribute('src', siteContent["main-content"] ["middle-img-src"]);

let h4 = document.querySelectorAll('h4')
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];

let content = document.querySelectorAll(".text-content p")
content[0].textContent = siteContent["main-content"] ["features-content"];
content[1].textContent = siteContent["main-content"] ["about-content"];
content[2].textContent = siteContent["main-content"] ["services-content"];
content[3].textContent = siteContent["main-content"] ["product-content"];
content[4].textContent = siteContent["main-content"] ["vision-content"];

//contact section

let contact = document.querySelectorAll(".contact p")
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

//footer section

let copyright = document.querySelector("footer p")
copyright.textContent = siteContent["footer"]["copyright"]

//adding new content
const midImg = document.querySelector('.middle-img');
midImg.src = 'img/mid-page-accent.jpg'

const navBar = document.querySelector('nav');
const newAnchor = document.createElement('a');

let insertAnchor = function (href, text){
  let anchor = navBar.appendChild(newAnchor);
   anchor.href = href; 
   anchor.textContent = text;
   anchor.style.color = 'green';
};


insertAnchor('#', 'Jenni');

let prependAnchor = document.createElement('a');
prependAnchor.textContent = 'Cody';

navBar.insertBefore(prependAnchor, navBar.firstChild);

prependAnchor.href = '#'; 
prependAnchor.style.color = 'green';