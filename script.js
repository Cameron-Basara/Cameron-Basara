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
            setTimeout(typeLine, Math.random() * 100); // Typing effect speed
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
        fadeIn(introScreen, 0);
      }, 1000); // Fade out duration
    }
  
    function fadeIn(element, opacity) {
      if (opacity < 1) {
        opacity += 0.05; // Fade in speed
        element.style.opacity = opacity;
        requestAnimationFrame(function() { fadeIn(element, opacity); });
      }
    }
  
    typeLine();
  });
  
