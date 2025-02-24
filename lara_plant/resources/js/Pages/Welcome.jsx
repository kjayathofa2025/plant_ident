//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure you import the full bundle which includes Popper.js
import { Head } from '@inertiajs/react'; 
import { Helmet } from 'react-helmet'; 
import React, { useEffect } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const Head = () => (
        <head>
            <title>Welcome-Plant</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable='no'"/>
        </head>
      );
      const MyComponent = () => {
        useEffect(() => {
          // Google Analytics
          const script1 = document.createElement('script');
          script1.async = true;
          script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-F11TZTK1G9';
          document.head.appendChild(script1);
      
          script1.onload = () => {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
              window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', 'G-F11TZTK1G9');
          };
      
          // Drift
          const script2 = document.createElement('script');
          script2.innerHTML = `
            "use strict";
            !function() {
              var t = window.driftt = window.drift = window.driftt || [];
              if (!t.init) {
                if (t.invoked) return void(window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
                t.factory = function(e) {
                  return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                  };
                }, t.methods.forEach(function(e) {
                  t[e] = t.factory(e);
                }), t.load = function(t) {
                  var e = 3e5,
                    n = Math.ceil(new Date() / e) * e,
                    o = document.createElement("script");
                  o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                  var i = document.getElementsByTagName("script")[0];
                  i.parentNode.insertBefore(o, i);
                };
              }
            }();
            drift.SNIPPET_VERSION = '0.3.1';
            drift.load('un2zvfiz4bx7');
          `;
          document.head.appendChild(script2);
      
          // Event listener for Drift Chat
          const handleDriftClick = (event) => {
            event.preventDefault();
            window.drift.api.sidebar.open();
          };
      
          const driftButtons = document.querySelectorAll('.drift-open-chat');
          driftButtons.forEach(button => {
            button.addEventListener('click', handleDriftClick);
          });
      
          return () => {
            // Cleanup event listeners when the component unmounts
            driftButtons.forEach(button => {
              button.removeEventListener('click', handleDriftClick);
            });
          };
        }, []);
    };
  const handleImageError = () => {
    document
      .getElementById('screenshot-container')
      ?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document
      .getElementById('docs-card-content')
      ?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
  };

  return (
    <>
      {/* Helmet for adding external scripts */}
      <Helmet>
        <script src="https://plantora.app/dist/js/bootstrap/popper.min.js"></script>
        <script src="https://plantora.app/dist/js/bootstrap/bootstrap.min.js"></script>
        <script src="https://plantora.app/dist/js/lib/jquery.js"></script>
        <script src="https://plantora.app/dist/js/main.js"></script>
        <script src="https://plantora.app/dist/js/owl/blog.js"></script>
        <script src="https://plantora.app/dist/js/owl//owl.carousel.min.js"></script>
      </Helmet>
      
      <Head title="Welcome" />
      <header class="bg-gray-200 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div class="container mx-auto flex justify-between items-center py-4">
      <div classname="brand logo-header">
      <a href="/" class="flex items-center justify-center">
         <img src="img/identification-logo.png" alt="Plant Identification" class="h-15" />
         <span class="text-3xl font-extrabold text-gray-500 ml-2">Plant Identification</span>
      </a>
      </div>
      <nav class="flex space-x-4">
        <div class="relative sm:flex sm:justify-center sm:items-center h-[30px] bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
          <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
            <a href="/login" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>
            <a href="/register" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
          </div>
        </div>
      </nav>
    </div>
</header>
<div></div>
      <section class="about_us mt-20 pt-10">
        <div class="sections_container container">
          <div class="row flex-md-row flex-column-reverse">
            <div class="col-md-6 p-0">
              <div class="about_img">
                <div class="plant_img">
                  <img src="img/about-us.png" alt="Welcome to Plantora" class="w-64 h-65 object-cover" />
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0 mt-6">
              <div class="about_content _flex  ">
                <h2 class="text-5xl font-extrabold text-gray-800">About us</h2>
                <p class="mt-6 text-lg text-gray-600">
                  Welcome to Plantora, the free plant identifier app for all your plant care needs! Our goal is to assist you in nurturing your plants, ensuring their best possible growth and enhancing the beauty they bring to your life. With our best plant app, you can easily keep track of your plant collection, get personalized plant thriving tips, and connect with a community of plant enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features">
   <div class="sections_container container">
      <div class="feature_title text-center">
         <h2 class="heading">Plantora Features</h2>
      </div>
      <div class="row g-3 mt-10 pt-0">
         <div class="col-md-6 col-lg-4">
            <div class="feature_card reminder-card ">
               <div class="card_img">
                  <img src="img/reminder.png" alt="Plant Reminders and  Organization" class="w-36 h-37 object-cover " />
               </div>
               <div class="card_body">
                  <h6 class="title">Plant Reminders  </h6>
                  <hr/>
                  <p class="sub_text text-gray-600">With our best plant care app, you can easily add your plants to a virtual collection and keep track of their care requirements. You can add photos, notes, and even set reminders for watering, fertilizing, and repotting.

                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card plant-care-card ">
               <div class="card_img">
                  <img src="img/plant-care-slide.png" alt="Plant" class="w-25 h-34 object-cover " />
               </div>
               <div class="card_body">
                  <h6 class="title"> Plant Care Tips    </h6>
                  <hr/>
                  <p class="sub_text text-gray-600">Our plant care app consists of tips or guides based on the specific needs of your plants. You can also refer to our plant guide which provides detailed information on everything from watering to lighting to plant diseases control.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card checker-card  ">
               <div class="card_img">
                  <img src="img/symptom-checker-slide.png" alt="Symptom checker"  class="w-25 h-34 object-cover "  />
               </div>
               <div class="card_body">
                  <h6 class="title"> Symptom checker</h6>
                  <hr/>
                  <p class="sub_text text-gray-600">By using this free plant identifier app, you can find out which type of problems your plants are facing and find appropriate steps of plant care. This helps you to take better care of their plants and improve their overall plant health.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card calculator-card">
               <div class="card_img">
                  <img src="img/calculators-slide.png" alt="Calculators"  class="w-25 h-34 object-cover " />
               </div>
               <div class="card_body">
                  <h6 class="title">Calculators</h6>
                  <hr/>
                  <p class="sub_text text-gray-600">Use water, soil, sunlight, pot size,  fertilizer and lux meter calculators to get to know how to take care of your plants properly. Learn about the best plant identification and plant diseases diagnosis which provides accurate conditions for your plant to thrive.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card identify-card ">
               <div class="card_img">
                  <img src="img/identification-logo.png" alt="Plant Identification"  class="w-25 h-34 object-cover "  />
               </div>
               <div class="card_body">
                  <h6 class="title">Plant Identification</h6>
                  <hr/>
                  <p class="sub_text text-gray-600">Do you have a plant but don't know its name or how to care for it? No problem! our app is the best plant identification app in the category. You can take a photo of the plant or upload a snapshot and easily identify plants with tremendous plant care tips specific to that plant.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card expert-advice-card">
               <div class="card_img">
                  <img src="img/expert-advice-slide.png" alt="Plant Expert Advice"  class="w-25 h-34 object-cover " />
               </div>
               <div class="card_body">
                  <h6 class="title">Expert Advice</h6>
                  <hr/>
                  <p class="sub_text text-gray-600">Our app features articles of different categories and also an option of asking experts on everything from propagation to pruning. You can learn from Plantora the best plant identification app which also includes a plant guide and takes your plant care skills to the next level.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
      <footer>
        <div class="container sections_container">
          <div class="row">
            <div class="col-lg-4">
              <div class="footer-logo animation_right">
                <a href="/">
                  <img src="/dist/images/header/plantora-logo.png" alt="footer logo" />
                </a>
                <p class="footer_text">
                  Plantora- The free plant identifier and plant care app with a database of over 10,000+ plant species. Features like plant identification, disease diagnosis, plant care guides and reminders, calculators, help from plant experts, and much more for free.
                </p>
              </div>
            </div>
            <div class="col-lg-8 footer-widgets">
              <div class="row">
                <div class="col-md-4">
                  <div class="footer-widgets-block">
                    <h3 class = "footer_title">Company</h3>
                    <ul class = "footer_links">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/contact-us">Contact Us</a></li>
                      <li><a href="/cookie-policy">Cookie Policy</a></li>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                      <li><a href="/terms-conditions">Terms of Service</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-center copyright">&copy; 2025 <a target="_blank" href="https://www.bytesview.com">Bytesview Analytics Pvt Ltd</a>. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
