document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevents the default form submission action

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Data to server 
    console.log('Name:', name, 'Email:', email, 'Message:', message);

    alert('Thank you for your message, ' + name + '!');
});

// For hovering over elements
document.querySelector('.hover-area').addEventListener('mouseenter', function() {
    document.querySelector('.preview-content').style.display = 'block';
  });
  
  document.querySelector('.hover-area').addEventListener('mouseleave', function() {
    document.querySelector('.preview-content').style.display = 'none';
  });
  
// For hovering over videos

document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector('video');
  
    video.addEventListener('mouseenter', function() {
      video.play();
    });
  
    video.addEventListener('mouseleave', function() {
      video.pause();
    });
  });

// Intro screen, with animations and such
document.addEventListener('DOMContentLoaded', function() {
    var terminalContent = document.getElementById('terminal-content');
    var terminal = document.getElementById('terminal');
    var introScreen = document.getElementById('intro-screen');
  
    var script = [
        {text:"cameronbasara@portfolio-os:~$ firefox index.html", pause: 750},
        {text:"Booting up system..."},
        {text:"Initializing..."},
        {text:"Welcome to My Site"},
        {text:"Launching intro..."}
    ];
  
    var lineIndex = 0;
    var charIndex = 0;

    function typeLine() {
        if (lineIndex < script.length) {
          var line = script[lineIndex].text;
          if (charIndex < line.length) {
            terminalContent.textContent += line[charIndex++];
            setTimeout(typeLine, Math.random() * 10); // Typing effect speed
          } else {
            terminalContent.textContent += '\n'; // Move to the next line
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, script[lineIndex - 1].pause); // Use pause from the script object
          }
        } else {
          setTimeout(transitionToIntroScreen, 1000); // Wait before transitioning
        }
      }
  
    function transitionToIntroScreen() {
      terminal.style.opacity = '0';
      setTimeout(function() {
        terminal.style.display = 'none';
        introScreen.style.display = 'block';
        introScreen.style.opacity = '0';
        fadeIn(introScreen, 0, function(){
          window.location.hash = 'page2';
        });
      }, 1000); // Fade out duration
    }
  
    function fadeIn(element, opacity, callback) {
      if (opacity < 1) {
        opacity += 0.05; // Fade in speed
        element.style.opacity = opacity;
        requestAnimationFrame(function() { fadeIn(element, opacity); });
      }
      if (typeof callback === 'function'){
          callback();
      }
    }
  
    typeLine();
  });
  

// For different pages
function hashChanged() {
  var hash = location.hash.slice(1); 
  var pageId = hash || 'page1'; // Default to 'page1' if the hash is empty

  document.querySelectorAll('.page').forEach(function(page) {
      page.classList.remove('active'); // Hide all pages
  });

  var activePage = document.getElementById(pageId);
  
  if (pageId === 'page1' || pageId === 'page2'){
      toggleScrollLock(pageId);
  }
  toggleScrollLock();

  if (activePage) {
      activePage.classList.add('active'); // Show the active page
  } else {
      document.getElementById('page1').classList.add('active');
  }
}


document.addEventListener('DOMContentLoaded', hashChanged);
window.addEventListener('hashchange', hashChanged);


document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('click', function() {
      // Start the bubble expansion animation
      this.classList.add('expanding');

      // Hide the text
      const header = this.querySelector('h1'); 
        if (header) {
            fadeOut(header);
        }

      // Slight delay to let the expansion animation start
      setTimeout(() => {
          window.location.hash = this.getAttribute('data-target');
      }, 500); // Adjust this delay based on the start of your bubble expansion animation
  });
});


function fadeOut(element) {
    let opacity = 1; // Initial opacity
    function decreaseOpacity() {
        opacity -= 0.05; // Adjust for speed of fade
        if (opacity <= 0) {
            element.style.opacity = 0;
            return; // Stop the fade-out process
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decreaseOpacity); // Continue the fade-out process
    }
    decreaseOpacity();
}


// Function to toggle no-scroll class on the body
function toggleScrollLock(pageId) {
  // Remove no-scroll class from body for safety
  document.body.classList.remove('no-scroll');

  // Add no-scroll class to body if a specific page is provided
  if (pageId) {
      document.body.classList.add('no-scroll');
  }
}