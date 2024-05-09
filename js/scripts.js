/* document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // Create and append images dynamically (this can be moved to a separate setup script if preferred)
  const container = document.getElementById('image-sequence');
  for (let i = 1; i <= 6; i++) {  // Let's assume there are 60 frames in the sequence
      let img = document.createElement('img');
      img.src = 'images\Seq\s${i}.png';  // Updated file path and naming convention
      container.appendChild(img);
  }

  // Now that images are in the DOM, we can use them for the animation
  const images = gsap.utils.toArray('#image-sequence img');
  gsap.to(images, {
      xPercent: -100 * (images.length - 1),
      ease: "none",
      scrollTrigger: {
          trigger: "#image-sequence",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector("#image-sequence").offsetWidth
      }
  });
}); */

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });

  // Setup for image sequence
  const canvas = document.querySelector("#starship-animation");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  const frameCount = 6; // total number of images
  const images = [];
  const imageSeq = { frame: 0 }; // object to keep track of current frame

  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `images\Seq\s${i.toString().padStart(4, '0')}.png`; // Ensure your images are named sequentially
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: canvas,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      scroller: "#main",
    },
    onUpdate: () => render(imageSeq.frame)
  });

  function render(frameIndex) {
    const img = images[frameIndex];
    if (!img.complete) {
      setTimeout(() => render(frameIndex), 50); // Wait until the image is loaded
      return;
    }
    scaleImage(img, context);
  }

  function scaleImage(img, ctx) {
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.max(hRatio, vRatio);
    let centerShift_x = (canvas.width - img.width * ratio) / 2;
    let centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }

  // Ensure the scroll is refreshed when images are loaded
  images[0].onload = () => {
    locoScroll.update();
    ScrollTrigger.refresh();
  };
});


document.addEventListener("DOMContentLoaded", function() {
  const charactersInfo = [
    { api: 'https://swapi.info/api/people/4', img: 'https://images.hdqwalls.com/wallpapers/darth-vader-arts-pq.jpg' },
    { api: 'https://swapi.info/api/people/3', img: 'https://www.creativefabrica.com/wp-content/uploads/2023/05/12/Steampunk-Fantasy-Gothic-Star-Wars-R2D2-Hearts-Tribal-Fractal-Watercolor-69455101-1.png' },
    { api: 'https://swapi.info/api/people/1', img: 'https://th.bing.com/th/id/R.583609f89facc722ba2540743951a297?rik=XQ32oLP2%2bN75Vw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fjPCRgS0.jpg&ehk=udwAwb8fxW3Vsjd6YPfxPl3Oji5ylMrjx5E%2bcusUYSg%3d&risl=&pid=ImgRaw&r=0' },
    { api: 'https://swapi.info/api/people/14', img: 'https://th.bing.com/th/id/R.6b8d33e480d2ab9c8c1067e662f7bc98?rik=J9KMyPb9NI7XoA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2fe%2ff%2f1380967-han-solo-wallpaper-1920x1080-xiaomi.jpg&ehk=Ew0l7FlQ%2bHXmC5Th%2fSyHDB5YBTns4coDYknzzTqUhb4%3d&risl=&pid=ImgRaw&r=0' }
  ];

  const container = document.querySelector('.character-container');

  charactersInfo.forEach(character => {
    fetch(character.api)
      .then(response => response.json())
      .then(data => {
        fetch(data.homeworld)
          .then(response => response.json())
          .then(homeworld => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <div class="character-image" style="background-image: url('${character.img}');">
                    
                </div>
                <div class="character-details">
                <div class="character-name">${data.name}</div>
                    <p><span>Height:</span> ${data.height}</p>
                    <p><span>Birth Year:</span> ${data.birth_year}</p>
                    <p><span>Homeworld:</span> ${homeworld.name}</p>
                </div>
            `;
            container.appendChild(card);
          });
      });
  });
});


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80, // Adjusted number of particles for a starry sky effect
        "density": {
          "enable": true,
          "value_area": 800 // Area in which particles are distributed
        }
      },
      "color": {
        "value": "#ffffff" // Color of the particles (stars)
      },
      "shape": {
        "type": "circle", // Shape of the particles
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 1,
        "random": true, // Make opacity random for twinkling effect
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.0, // Minimum opacity to simulate twinkling
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true, // Random sizes for a more natural starry effect
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": false // Disable linking lines
      },
      "move": {
        "enable": true, // Disable movement
        "speed": 0
      
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Disable interactions on hover
        },
        "onclick": {
          "enable": false // Disable interactions on click
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 0.5,
          "opacity": 8,
          "speed": 7
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true // Ensure sharp particles on high-resolution devices
  });