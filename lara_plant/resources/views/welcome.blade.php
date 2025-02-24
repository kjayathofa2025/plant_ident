
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Welcome - Plant_Ident</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"> 
<meta name="description" content="Plantora is the free plant identifier and plant care app that will help you in becoming a plant care expert and  having a plant guide to keeps plants health good. ">

<!-- Schema.org for Google -->
<meta itemprop="name" content="The Free Plant Identifier And Plant Care App - Plantora">
<meta itemprop="description" content="Plantora is the free plant identifier and plant care app that will help you in becoming a plant care expert and  having a plant guide to keeps plants health good. ">
<!-- Twitter -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="The Free Plant Identifier And Plant Care App - Plantora">
<meta name="twitter:description" content="Plantora is the free plant identifier and plant care app that will help you in becoming a plant care expert and  having a plant guide to keeps plants health good. ">
<meta name="twitter:site" content="@PlantoraApp">
<meta name="twitter:creator" content="@PlantoraApp">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta name="og:title" content="The Free Plant Identifier And Plant Care App - Plantora">
<meta name="og:description" content="Plantora is the free plant identifier and plant care app that will help you in becoming a plant care expert and  having a plant guide to keeps plants health good. ">
<meta name="og:url" content="https://plantora.app/">
<meta name="og:site_name" content="Plantora">
<meta name="og:locale" content="en_US">
<meta name="og:type" content="website">

<link rel="canonical" href="https://plantora.app/">
 <!-- Favicons -->
<link rel="apple-touch-icon" sizes="57x57" href="/dist/images/fav/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/dist/images/fav/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/dist/images/fav/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/dist/images/fav/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/dist/images/fav/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/dist/images/fav/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/dist/images/fav/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/dist/images/fav/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/dist/images/fav/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/dist/images/fav/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/dist/images/fav/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/dist/images/fav/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/dist/images/fav/favicon-16x16.png">
<link rel="manifest" href="/dist/images/fav/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/dist/images/fav/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<link rel="stylesheet" href="/dist/css/owl/owl.carousel.css" />
<link rel="stylesheet" href="/dist/css/owl/animate.min.css" />
<link rel="stylesheet" href="/dist/scss/libs/fonts/stylesheet.css">

<link rel="stylesheet" href="/dist/css/main.css" />

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F11TZTK1G9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-F11TZTK1G9');
</script>
<script>
  "use strict";
  ! function() {
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
</script>
<script>
  (function() {
    /* Add this class to any elements you want to use to open Drift.
     *
     * Examples:
     * - <a class="drift-open-chat">Questions? We're here to help!</a>
     * - <button class="drift-open-chat">Chat now!</button>
     *
     * You can have any additional classes on those elements that you
     * would ilke.
     */
    var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
    /* http://youmightnotneedjquery.com/#ready */
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn();
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
      } else {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState != 'loading')
            fn();
        });
      }
    }
    /* http://youmightnotneedjquery.com/#each */
    function forEachElement(selector, fn) {
      var elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
    }
    function openSidebar(driftApi, event) {
      event.preventDefault();
      driftApi.sidebar.open();
      return false;
    }
    ready(function() {
      drift.on('ready', function(api) {
        var handleClick = openSidebar.bind(this, api)
        forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
          el.addEventListener('click', handleClick);
        });
      });
    });
  })();
</script>

</head>
<body id="wrapper" >
  <div class="pre-loader" id="loader">
    <div class="three-body">
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
    </div>
  </div>
  
  <header >
    <div class="navigation">
      <div class=" container sections_container">
	 		 <div class="brand logo-header">
              	<a href="/"> <img src="/dist/images/header/plantora-logo.png" alt="Plantora"> </a>
            </div>
        <nav>
          <div class="nav-mobile"><a id="nav-toggle" href="javascript:void(0)"><span></span></a></div>
          <ul class="nav-list">
            <li class="list_item">
              <a href="/" class="">Home</a>
            </li>
            <li class="list_item">
              <a href="/blog">Blog</a>
            </li>
            <li class="list_item">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <div class="header-bottom"></div><section class="slider ">
   <div class="container sections_container" id="home">
      <div class="row">
         <div class="col-xl-7 col-md-6 ">
            <div class="slider_content _flex">
               <h1 class="top-heading">Your best plant care app helping your plants thrive
               </h1>
               <div class="row">
                  <div class="col-xl-10 col-md-12">
                  <p class="text "> Experience the joy of thriving plants with Plantora - Your free plant identifier and best plant care app with plant diseases identification having a plant care guide.

               </p>
                  </div>
               </div>
               <div class="app_store">
                  <a class="btn btn-default ms-2" href="https://play.google.com/store/apps/details?id=app.plantora.plantora&pli=1" target="_blank"> 
                     <img src="dist/images/header/google-play-store.png" alt="Google play store"> </a>
                  <a class="btn btn-default" href="https://apps.apple.com/app/plantora-plant-identify-care/id6460858893" target="_blank">
                  <img src="dist/images/header/apple-play-store.png" alt="Apple app store"> </a>
               </div>
            </div>
         </div>
         <div class="col-xl-5 col-md-6 ">
               <div class="_flex">
               <div class="plants-carousel owl-carousel  " id="plant-carousel">
               <div class="item">
                   <div class="image-block">
                      <img src="/dist/images/home/slider/plant-care-slide.png" alt=" Plant Care Tips tailored to Your needs">
                   </div>
                  </div>
                  <div class="item">
                     <div class="image-block">
                        <div class="plant-slider">
                        <img src="/dist/images/home/slider/symptom-checker-slide.png" alt=" Symptom checker">
                        </div>
                     </div>
                  </div>
                <div class="item">
                   <div class="image-block">
                      <img src="/dist/images/home/slider/calculators-slide.png" alt=" calculators">
                   </div>
                </div>
                <div class="item">
                   <div class="image-block">
                      <img src="/dist/images/home/slider/expert-advice-slide.png" alt=" Expert Advice">
                   </div>
                  </div>
                   
             </div>
               </div>
         </div>
      </div>
   </div>
</section>
<section class="about_us">
   <div class="sections_container container">
      <div class="row flex-md-row flex-column-reverse">
         <div class="col-md-6 p-0">
            <div class="about_img ">
               <div class="plant_img">
                  <img src="/dist/images/home/slider/about-us.png" alt="Welcome to Plantora">
               </div>
               <div class="about-img-block indentification">
                  <div class="animated-block animated-element"></div>
               </div>
               <div class="about-img-block plant">
                  <div class="animated-block  animated-element"></div>
               </div>
               <div class="about-img-block expert-advice">
                  <div class="animated-block  animated-element"></div>
               </div>
               <div class="about-img-block calculator">
                  <div class="animated-block  animated-element"></div>
               </div>
            </div>
         </div>
         <div class="col-md-6 p-0">
            <div class="about_content _flex ">
               <h2 class="heading">About us</h2>
               <p class="text">Welcome to Plantora, the free plant identifier app for all your plant care needs! Our goal is to assist you in nurturing your plants, ensuring their best possible growth and enhancing the beauty they bring to your life. With our best plant app, you can easily keep track of your plant collection, get personalized plant thriving tips, and connect with a community of plant enthusiasts.
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
      <div class="row g-3 mt-4">
         <div class="col-md-6 col-lg-4">
            <div class="feature_card reminder-card ">
               <div class="card_img">
                  <img src="/dist/images/home/features/reminder.png" alt="Plant Reminders and
                     Organization">
               </div>
               <div class="card_body">
                  <h6 class="title">Plant Reminders 
                     
                  </h6>
                  <hr>
                  <p class="sub_text">With our best plant care app, you can easily add your plants to a virtual collection and keep track of their care requirements. You can add photos, notes, and even set reminders for watering, fertilizing, and repotting.

                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card plant-care-card ">
               <div class="card_img">
                  <img src="/dist/images/home/features/plant.png" alt="Plant">
               </div>
               <div class="card_body">
                  <h6 class="title"> Plant Care Tips    </h6>
                  <hr>
                  <p class="sub_text">Our plant care app consists of tips or guides based on the specific needs of your plants. You can also refer to our plant guide which provides detailed information on everything from watering to lighting to plant diseases control.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card checker-card  ">
               <div class="card_img">
                  <img src="/dist/images/home/features/symptom-checker.png" alt="Symptom checker">
               </div>
               <div class="card_body">
                  <h6 class="title"> Symptom checker</h6>
                  <hr>
                  <p class="sub_text">By using this free plant identifier app, you can find out which type of problems your plants are facing and find appropriate steps of plant care. This helps you to take better care of their plants and improve their overall plant health.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card calculator-card">
               <div class="card_img">
                  <img src="/dist/images/home/features/calculators.png" alt="Calculators">
               </div>
               <div class="card_body">
                  <h6 class="title">Calculators</h6>
                  <hr>
                  <p class="sub_text">Use water, soil, sunlight, pot size,  fertilizer and lux meter calculators to get to know how to take care of your plants properly. Learn about the best plant identification and plant diseases diagnosis which provides accurate conditions for your plant to thrive.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card identify-card ">
               <div class="card_img">
                  <img src="/dist/images/home/features/identification.png" alt="Plant Identification">
               </div>
               <div class="card_body">
                  <h6 class="title">Plant Identification</h6>
                  <hr>
                  <p class="sub_text">Do you have a plant but don't know its name or how to care for it? No problem! our app is the best plant identification app in the category. You can take a photo of the plant or upload a snapshot and easily identify plants with tremendous plant care tips specific to that plant.
                  </p>
               </div>
            </div>
         </div>
         <div class="col-md-6 col-lg-4">
            <div class="feature_card expert-advice-card">
               <div class="card_img">
                  <img src="/dist/images/home/features/advisor.png" alt="Plant Expert Advice">
               </div>
               <div class="card_body">
                  <h6 class="title">Expert Advice</h6>
                  <hr>
                  <p class="sub_text">Our app features articles of different categories and also an option of asking experts on everything from propagation to pruning. You can learn from Plantora the best plant identification app which also includes a plant guide and takes your plant care skills to the next level.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>


<section>
   <div class="premium_container container">
      <div class="feature_title text-center">
         <h2 class="heading">Become Plant Expert With Plantora Premium</h2>
      </div>
      <p class="text-center">Welcome to Plantora, your best plant care and identification app for nurturing and caring 
      for your beloved plants! Try the unrealistic features : </p>
  
   <div class="row mt-4">
         <div class="col-md-4 image-section" >
            <img src="/dist/images/home/newsectionimage.png" alt="" width='300px'>
         </div>
         <div class="col-md-5 offset-3 accordion-section mt-5">
               
            <!-- Accordion 1 -->
                        <div class="accordion-items mb-3 acc-first">
                           <h2 class="accordion-header " id="headingOne">
                              <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="outline: none; border: none ;">
                              <img src="/dist/images/home/notification.png" alt=""> Unlimited care Reminders
                              </button>
                           </h2>
                           <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                              Set personalized reminders so you don’t forget to water, repot, and fertilize all of your beloved plants.
                              </div>
                           </div>
                        </div>
                        
                        <!-- Accordion 2 -->
                        <div class="accordion-items mb-3 acc-second">
                           <h2 class="accordion-header " id="headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone" aria-expanded="false" aria-controls="collapseone">
                              <img src="/dist/images/home/unlimitedplantcare.png" alt="">  Advance Symptom Checker
                              </button>
                           </h2>
                           <div id="collapseone" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                              Identify and cure various diseases or pest problems affecting your plant using our symptom checker.
                              </div>
                           </div>
                        </div>

                        <div class="accordion-items mb-3 acc-third">
                           <h2 class="accordion-header " id="headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <img src="/dist/images/home/unlimitedplantsearch.png" alt=""> Unlimited Plant Identification
                              </button>
                           </h2>
                           <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                              Ever wondered to yourself, “What plant is this?”
                              Try plant identification with Plantora! From houseplants to outdoor species, Plantora has a large database of 10,000+ plants and tells you the names of different plants, whether it’s a flower, succulent, or tree.
                              </div>
                           </div>
                        </div>

                        <div class="accordion-items mb-3 acc-fourth">
                           <h2 class="accordion-header " id="headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                              <img src="/dist/images/home/plantcare.png" alt=""> Plant Care Guides
                              </button>
                           </h2>
                           <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                              Learn more about your plants and find detailed plant care information on watering, propagating, fertilizing, soil, sunlight, pruning, and more.
                              </div>
                           </div>
                        </div>

                        <div class="accordion-items mb-3 acc-fifth">
                           <h2 class="accordion-header " id="headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseTwo">
                             <img src="/dist/images/home/askexpert.png" alt=""> Ask Expert
                              </button>
                           </h2>
                           <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                              Feel free to get advice on any plant care-related query from our Plant experts. And Many More.
                              </div>
                           </div>
                        </div>
                        <button class="trynow-btn">Try Now</button>
                        </div>  
         
         </div>
      </div>
   </div>
</section>

<section>
   <div class="testimonial-section container">
         <div class="feature_title text-center">
               <h2 class="heading">Why People Love Us</h2>
         </div>
   
         <div class="row mt-4">
               <div class="col-md-6 mt-5">
               <div class="cards">
      <div class="outer">
        <div class="card" style="--delay: -1;">
        <div class="top-section d-flex justify-content-between">
                                    <div>
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    </div>
                                    <p class="date">10th Feb,2024</p>
                              </div>
                              <div class="middle-section">
                                 <p class="review">
                                 I have experience this app it's very much useful
                                 </p>
                              </div>
                              <div class="last-section d-flex align-items-center">
                                 <img src="/dist/images/home/reviewavtar.png" alt="">
                                 <p class="reviewer-name">Bilkis Khandakar</p>
                              </div>
        </div>
        <div class="card" style="--delay: 0;">
          <div class="top-section d-flex justify-content-between">
                              <div>
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    </div>
                                    <p class="date">19th Feb,2024</p>
                              </div>
                              <div class="middle-section">
                                 <p class="review">
                                 It's very good! Despite having posted the screenshots at night, the recognition of this app was accurate
                                 </p>
                              </div>
                              <div class="last-section d-flex align-items-center">
                                 <img src="/dist/images/home/reviewavtar.png" alt="">
                                 <p class="reviewer-name">Erika Paola</p>
                              </div>
        </div>
        <div class="card" style="--delay: 1;">
          
            
          <div class="top-section d-flex justify-content-between">
                              <div>
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    </div>
                                    <p class="date">10th Feb,2024</p>
                              </div>
                              <div class="middle-section">
                                 <p class="review">
                                 An app rated 10.💯 It contains a lot of useful information about things that do not exist in similar apps. Very well structured. 🌟🌟🌟🌟🌟
                                 </p>
                              </div>
                              <div class="last-section d-flex align-items-center">
                                 <img src="/dist/images/home/reviewavtar.png" alt="">
                                 <p class="reviewer-name">Diana Maria Arsene</p>
                              </div>
        
        </div>
                           <div class="card" style="--delay: 2;">
                           <div class="top-section d-flex justify-content-between">
                                                   <div>
                                                         <img src="/dist/images/home/star.png" alt="">
                                                         <img src="/dist/images/home/star.png" alt="">
                                                         <img src="/dist/images/home/star.png" alt="">
                                                         <img src="/dist/images/home/star.png" alt="">
                                                         <img src="/dist/images/home/star.png" alt="">
                                                         </div>
                                                         <p class="date">25th Feb,2024</p>
                                                   </div>
                                                   <div class="middle-section">
                                                      <p class="review">
                                                      Its intuitive design makes it easy to identify plants, track watering schedules, and receive timely reminders. It is very useful app especially those who are fascinated for gardening. Overall I like this app and I highly recommend it to you.
                                                      </p>
                                                   </div>
                                                   <div class="last-section d-flex align-items-center">
                                                      <img src="/dist/images/home/reviewavtar.png" alt="">
                                                      <p class="reviewer-name">Rekha Singh</p>
                                                   </div>
                           </div>
                           <div class="card" style="--delay: 2;">
                           <div class="top-section d-flex justify-content-between">
                              <div>
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    <img src="/dist/images/home/star.png" alt="">
                                    </div>
                                    <p class="date">10th Mar,2024</p>
                              </div>
                              <div class="middle-section">
                                 <p class="review" >
                                 I have been using this app since the last 2 months, and it's giving me better experience and knowledge regarding growth of plants and their diseases.
                                 </p>
                              </div>
                              <div class="last-section d-flex align-items-center">
                                 <img src="/dist/images/home/reviewavtar.png" alt="">
                                 <p class="reviewer-name"> Rupam Rai</p>
                              </div>
                           </div>
      </div>
    </div>
               </div>
               <div class="col-md-5" >
               <img src="/dist/images/home/testimonialImage.png" alt="" >
               </div>
         </div>
         </div>
   </div>
</section>


<section class="blog">
   <div class="sections_container container">
      <div class="blog_title">
         <h3 class="heading text-center">Blogs</h3>
      </div>
      <div class="blog-carousel owl-carousel "></div>
   </div>
</section>
<footer >
  <div class=" container sections_container">
    <div class="row">
      <div class="col-lg-4">
        <div class="footer-logo animation_right">
          <a href="/">
            <img src="/dist/images/header/plantora-logo.png" alt="footer logo">
          </a>
          <p class="footer_text">Plantora- The free plant identifier and plant care app with a database of over 10,000+ plant species. Features like plant identification, disease diagnosis, plant care guides and reminders, calculators, help from plant experts, and much more for free.</p>
        </div>
      </div>
      <div class="col-lg-8 footer-widgets">
        <div class="row ">
        <div class="col-md-4">
            <div class="footer-widgets-block">
              <h3 class="footer_title">Company</h3>
              <ul class="footer_links">
                <li class=""><a href="/about">About Us</a></li>
                <li class=""><a href="/contact-us">Contact Us</a></li>
                <li class=""><a href="/cookie-policy">Cookie Policy</a></li>
                <li class=""><a href="/privacy-policy">Privacy Policy</a></li>
                <li class=""><a href="/terms-conditions">Terms of Service</a></li>
            </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer-widgets-block">
              <h3 class="footer_title">Community</h3>
              <ul class="footer_links">
                <li class=""><a target="_blank" href="https://www.facebook.com/PlantoraApp">Facebook</a></li>
                <li class=""><a target="_blank" href="https://www.linkedin.com/showcase/plantoraapp/">Linkedin</a></li>
                <li class=""><a target="_blank" href="https://twitter.com/PlantoraApp">Twitter</a></li>
                <li class=""><a target="_blank" href="https://www.instagram.com/plantoraapp/">Instagram</a></li>
            </ul>
            </div>
          </div>
 
          <div class="col-md-4">
            <div class="footer-widgets-block">
              <h3 class="footer_title">Get our app</h3>
              <div class="app_store justify-content-center apple_logo ">
                <a  target="_blank" href="https://play.google.com/store/apps/details?id=app.plantora.plantora&pli=1" class="mx-1">
                  <img src="/dist/images/header/play-store.png" alt="google logo">
                </a>
                <a href="https://apps.apple.com/app/plantora-plant-identify-care/id6460858893" target="_blank" class="mx-1">                                         
                  <img src="/dist/images/header/app-store.png" alt="apple logo">
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    <p class="text-center copyright">&copy; 2025 <a target="_blank" href="https://www.bytesview.com">Bytesview Analytics Pvt Ltd</a>. All
      rights reserved</p>
  </div>
</footer>


<script src="/dist/js/lib/jquery.js"></script>
<script src="/dist/js/bootstrap/popper.min.js"></script>
<script src="/dist/js/bootstrap/bootstrap.min.js"></script>
<script src="/dist/js/main.js"></script>

  <script src="/dist/js/owl/owl.carousel.min.js"></script>
  <script src="/dist/js/owl/blog.js"></script>

  </body>
</html>