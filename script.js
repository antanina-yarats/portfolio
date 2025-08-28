if (window.location.host === 'www.antanina-yarats-portfolio.eu') {
    window.location.href = 'https://antanina-yarats-portfolio.eu' + window.location.pathname;
  }
  
  // Navigation menu
  
  const hamburger = document.querySelector('#hamburger');
  
  const menuHidden = document.querySelector('#menuHidden');
  
  const particle = document.querySelectorAll('.particle');
  
  const links = document.querySelectorAll('#menuHidden .item .link');
  
  
  hamburger.addEventListener('click', () => {
  
  
     menuHidden.classList.toggle('open');
  
  
     hamburger.classList.toggle('toggle');
  
     if (hamburger.classList.contains('toggle')) {
        particle.forEach(part => {
           part.classList.add('white');
        })
     } else {
        particle.forEach(part => {
           part.classList.remove('white');
        })
     }
  
  
  })
  
  
  links.forEach(function (li) {
     li.addEventListener('click', close);
  })
  
  
  function close() {
     hamburger.click();
  }
  
  
  // Contact icons bar
  
  gsap.to('.contactIcons', {
     delay: 1,
     duration: 2,
     y: 30
  })
  
  gsap.from('.contactBox', {
     delay: 1.5,
     opacity: 0,
     duration: 1.3,
     stagger: 0.5
  })
  
  //  welcome page
  
  
  gsap.from('#myCanvas', {
     delay: 1,
     duration: 5
  
  
  })
  
  gsap.from('.welcomeText', {
     opacity: 0,
     delay: 3,
     duration: 1
  
  
  })
  
  
  // geometry
  
  const cvs = document.querySelector('#myCanvas');
  const ctx = cvs.getContext('2d');
  cvs.width = cvs.height = 400;
  cvs.style.display = "flex";
  let divider = 0.1;
  
  
  function circle(radius, distanceFromCentre, angle) {
     let x = cvs.width / 2 + distanceFromCentre * Math.cos(angle);
     let y = cvs.height / 2 + distanceFromCentre * Math.sin(angle);
  
     ctx.beginPath();
     ctx.arc(x, y, radius, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();
  
     if (angle > 2 * Math.PI) return;
  
     circle(80, 80, angle + Math.PI / divider);
  
  
  }
  
  function main() {
     ctx.clearRect(0, 0, cvs.width, cvs.height);
     circle(80, 0, 0);
     if (divider < 24) divider += 0.1;
     requestAnimationFrame(main);
  }
  
  main();
  
  
// app category toggle 

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".project.category");
  
  categories.forEach(category => {
    category.addEventListener("click", () => {
      const projectsId = category.id.replace("-category", "-projects");
      const projectsElement = document.getElementById(projectsId);
      
      
      if (category.classList.contains("open")) {
        category.classList.remove("open");
        if (projectsElement) {
          projectsElement.classList.add("hidden");
        }
        
        categories.forEach(other => {
          other.style.display = "";
        });
      } else {
        
        categories.forEach(other => {
          if (other !== category) {
            other.style.display = "none";
          }
        });
        
        if (projectsElement) {
          projectsElement.classList.remove("hidden");
        }
        category.classList.add("open");
      }
    });
  });
});

