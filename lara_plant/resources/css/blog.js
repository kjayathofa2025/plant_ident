// Make an HTTP request to retrieve data
  
fetch('https://plantora.app/blog/wp-json/wp/v2/posts?per_page=8')
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      // Create a new div element for the blog card
      const blogCard = document.createElement('div');
      blogCard.classList.add('item');
        const date = new Date(post.date);
        const options = {  day: "numeric", month: "long", year: "numeric" };
        const formattedDate    = date.toLocaleString("en-US", options).replace("-", ",",",");
        
      // Set the inner HTML of the blog card using the post data
      blogCard.innerHTML = `<div class="tranding_blog">
      <a href="${post.link}"> 
      <div class="blog_img" style="background-image: url('${post.jetpack_featured_media_url}')"></div>
    </a>
    
        <div class="blog_body">
          <p><span class="categories">${post.category}</span> <span>${formattedDate}</span>  </p>
          <div class="blog_title_block"><h5 class="blog_title"><a href="${post.link}" class="blog_title">${post.yoast_head_json.title}</a>
          </h5></div>
          <div class="_flex profile">
              <div class="img_circle">
                      <img src="${post.yoast_head_json.schema['@graph'][5].image.contentUrl}" alt="${post.yoast_head_json.author}">
                </div>
                  <h3 class="blog_name"><a href="${post.yoast_head_json.schema['@graph'][5].url}">${post.yoast_head_json.author}</a></h3>
          </div>         
        </div>
      </div>`;
        
      // Add the blog card to the container
      document.querySelector('.blog-carousel').appendChild(blogCard);
    });

    // Initialize Owl Carousel
    $('.blog-carousel').owlCarousel({
      loop: false,
      dots: true,
      margin: 20,
      nav: true,
      padding: 0,
      touchDrag  : true,
      mouseDrag  : true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          768:{
            items:2
          },
          1000:{
            items:3
          }
        },
      });
    })
    .catch(error => console.error(error));

    
    
    $(document).ready(function(){
      var owl = $('#plant-carousel');
      owl.owlCarousel({
        animateOut: 'fadeOut',
        animateClass: 'rotateIn',
        items:1,
        loop:true,
        margin: 10,
        nav: false,
        dots: true,
        center:true,
        padding: 0,
        // autoWidth:true,
        touchDrag:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive: {
          0: {
            items: 1
          },
        }
      });
      $('#plant-carousel .item').click(function(){
        owl.trigger('next.owl.carousel', [300]);
      });
    });
    