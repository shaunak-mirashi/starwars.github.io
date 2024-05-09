function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./images/seq/male0001.png
./images/seq/male0002.png
./images/seq/male0003.png
./images/seq/male0004.png
./images/seq/male0005.png
./images/seq/male0006.png
./images/seq/male0007.png
./images/seq/male0008.png
./images/seq/male0009.png
./images/seq/male0010.png
./images/seq/male0011.png
./images/seq/male0012.png
./images/seq/male0013.png
./images/seq/male0014.png
./images/seq/male0015.png
./images/seq/male0016.png
./images/seq/male0017.png
./images/seq/male0018.png
./images/seq/male0019.png
./images/seq/male0020.png
./images/seq/male0021.png
./images/seq/male0022.png
./images/seq/male0023.png
./images/seq/male0024.png
./images/seq/male0025.png
./images/seq/male0026.png
./images/seq/male0027.png
./images/seq/male0028.png
./images/seq/male0029.png
./images/seq/male0030.png
./images/seq/male0031.png
./images/seq/male0032.png
./images/seq/male0033.png
./images/seq/male0034.png
./images/seq/male0035.png
./images/seq/male0036.png
./images/seq/male0037.png
./images/seq/male0038.png
./images/seq/male0039.png
./images/seq/male0040.png
./images/seq/male0041.png
./images/seq/male0042.png
./images/seq/male0043.png
./images/seq/male0044.png
./images/seq/male0045.png
./images/seq/male0046.png
./images/seq/male0047.png
./images/seq/male0048.png
./images/seq/male0049.png
./images/seq/male0050.png
./images/seq/male0051.png
./images/seq/male0052.png
./images/seq/male0053.png
./images/seq/male0054.png
./images/seq/male0055.png
./images/seq/male0056.png
./images/seq/male0057.png
./images/seq/male0058.png
./images/seq/male0059.png
./images/seq/male0060.png
./images/seq/male0061.png
./images/seq/male0062.png
./images/seq/male0063.png
./images/seq/male0064.png
./images/seq/male0065.png
./images/seq/male0066.png
./images/seq/male0067.png
./images/seq/male0068.png
./images/seq/male0069.png
./images/seq/male0070.png
./images/seq/male0071.png
./images/seq/male0072.png
./images/seq/male0073.png
./images/seq/male0074.png
./images/seq/male0075.png
./images/seq/male0076.png
./images/seq/male0077.png
./images/seq/male0078.png
./images/seq/male0079.png
./images/seq/male0080.png
./images/seq/male0081.png
./images/seq/male0082.png
./images/seq/male0083.png
./images/seq/male0084.png
./images/seq/male0085.png
./images/seq/male0086.png
./images/seq/male0087.png
./images/seq/male0088.png
./images/seq/male0089.png
./images/seq/male0090.png
./images/seq/male0091.png
./images/seq/male0092.png
./images/seq/male0093.png
./images/seq/male0094.png
./images/seq/male0095.png
./images/seq/male0096.png
./images/seq/male0097.png
./images/seq/male0098.png
./images/seq/male0099.png
./images/seq/male0100.png
./images/seq/male0101.png
./images/seq/male0102.png
./images/seq/male0103.png
./images/seq/male0104.png
./images/seq/male0105.png
./images/seq/male0106.png
./images/seq/male0107.png
./images/seq/male0108.png
./images/seq/male0109.png
./images/seq/male0110.png
./images/seq/male0111.png
./images/seq/male0112.png
./images/seq/male0113.png
./images/seq/male0114.png
./images/seq/male0115.png
./images/seq/male0116.png
./images/seq/male0117.png
./images/seq/male0118.png
./images/seq/male0119.png
./images/seq/male0120.png
./images/seq/male0121.png
./images/seq/male0122.png
./images/seq/male0123.png
./images/seq/male0124.png
./images/seq/male0125.png
./images/seq/male0126.png
./images/seq/male0127.png
./images/seq/male0128.png
./images/seq/male0129.png
./images/seq/male0130.png
./images/seq/male0131.png
./images/seq/male0132.png
./images/seq/male0133.png
./images/seq/male0134.png
./images/seq/male0135.png
./images/seq/male0136.png
./images/seq/male0137.png
./images/seq/male0138.png
./images/seq/male0139.png
./images/seq/male0140.png
./images/seq/male0141.png
./images/seq/male0142.png
./images/seq/male0143.png
./images/seq/male0144.png
./images/seq/male0145.png
./images/seq/male0146.png
./images/seq/male0147.png
./images/seq/male0148.png
./images/seq/male0149.png
./images/seq/male0150.png
./images/seq/male0151.png
./images/seq/male0152.png
./images/seq/male0153.png
./images/seq/male0154.png
./images/seq/male0155.png
./images/seq/male0156.png
./images/seq/male0157.png
./images/seq/male0158.png
./images/seq/male0159.png
./images/seq/male0160.png
./images/seq/male0161.png
./images/seq/male0162.png
./images/seq/male0163.png
./images/seq/male0164.png
./images/seq/male0165.png
./images/seq/male0166.png
./images/seq/male0167.png
./images/seq/male0168.png
./images/seq/male0169.png
./images/seq/male0170.png
./images/seq/male0171.png
./images/seq/male0172.png
./images/seq/male0173.png
./images/seq/male0174.png
./images/seq/male0175.png
./images/seq/male0176.png


   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 176;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  
  const gitHubButton = document.getElementById('github');
  
  gitHubButton.onclick = function (){
    window.open("https://www.github.com/harshitv54/","_self");
  }


  
 
  
  
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