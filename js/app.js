// 3D scroll

let zSpacing = -750,
    lastPos = zSpacing / 5;
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = [];

window.onscroll = function() {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top;

    lastPos = top;

    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`;
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
};

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}


document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('sequenceImage');
  const frameCount = 10; // Number of images in your sequence
  let frameIndex = 1;

  function updateImage() {
      image.src = `images/seq${frameIndex}.png`;
      frameIndex++;
      if (frameIndex > frameCount) frameIndex = 1;
  }

  // Start the sequence after the scroll animation ends
  gsap.timeline()
      .set('.image-sequence', {display: 'block'})
      .to({}, {duration: 1, onComplete: function() {
          setInterval(updateImage, 100); // Change image every 100ms
      }});
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
          "speed": 7,
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
          "enable": true // Disable interactions on hover
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
          "speed": 10
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