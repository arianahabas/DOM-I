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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//add text to nav bar //
let navBar = document.getElementsByTagName('a')
console.log(navBar)

navBar[0].textContent = 'Services'
navBar[1].textContent = 'Product'
navBar[2].textContent = 'Vision'
navBar[3].textContent = 'Features'
navBar[4].textContent = 'About'
navBar[5].textContent = 'Contact'
console.log(navBar)

//add img src to '#logo-img' //
let logoImg = document.getElementById('logo-img')
logoImg.src = 'img/logo.png'
console.log(logoImg)

//add text to h1 //
let h1 = document.querySelector('h1')
h1.textContent = 'DOM IS AWESOME'
console.log(h1)

//add text to button //
let button = document.querySelector('button')
console.log(button)
button.textContent = 'Get Started'
console.log(button)

//add img src to '#cta-img' //
let ctaImg = document.getElementById('cta-img')
ctaImg.src = 'img/header-img.png'
console.log(ctaImg)

//add text to h4 in "top-content"//
let h4Top = document.querySelectorAll('.top-content h4')
console.log(h4Top)
h4Top[0].textContent = 'Features'
h4Top[1].textContent = 'About'

//add text to p in "top-content"//
let pTop = document.querySelectorAll('.top-content p')
console.log(pTop)
pTop[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pTop[1].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//add img src to '#middle-img' //
let middleImg = document.getElementById('middle-img')
middleImg.src = 'img/mid-page-accent.jpg'
console.log(middleImg)

//add text to h4 in "bottom-content"//
let h4Bottom = document.querySelectorAll('.bottom-content h4')
console.log(h4Bottom)
h4Bottom[0].textContent = 'Services'
h4Bottom[1].textContent = 'Product'
h4Bottom[2].textContent = 'Vision'

//add text to p in "bottom-content"//
let pBottom = document.querySelectorAll('.bottom-content p')
console.log(pBottom)
pBottom[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pBottom[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pBottom[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//add text to h4 in "contact"//
let h4Contact = document.querySelector('.contact h4')
console.log(h4Contact)
h4Contact.textContent = 'Contact'

//add text to p in "contact"//
let pContact = document.querySelectorAll('.contact p')
console.log(pContact)
pContact[0].textContent = '123 Way 456 Street, Somewhere, USA'
pContact[1].textContent = '1 (888) 888-8888'
pContact[2].textContent = 'sales@greatidea.io'

//add text to p in footer//
let pFooter = document.querySelector('footer p')
console.log(pFooter)
pFooter.textContent = 'Copyright Great Idea! 2018'