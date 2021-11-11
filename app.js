$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  const cursor = document.querySelector('.cursor')
  const pointer = document.querySelector('.pointer')

  /******* Fazer os circulos mover-se sobre o cursor *******/
  document.body.addEventListener('mousemove', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      delay:0.15
    })
  })

  document.body.addEventListener('mousemove', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    gsap.to(pointer, {
      x: mouseX,
      y: mouseY
    })
  })

  const projects = document.querySelectorAll('.projects a')
  const links = document.querySelectorAll('.nav-links ul li a')
  const footer = document.querySelector('.contacts__section')
  const footerLinks = document.querySelectorAll('.footer-link')

/******* Hover sobre os Links da navbar  *******/
  links.forEach(link => {
    link.addEventListener('mouseenter', ()=>{
      gsap.to(cursor, {
        css:{scale:2}
      })

      gsap.to(pointer, {
        css:{opacity:0}
      })

    })
  })
  links.forEach(link => {
    link.addEventListener('mouseleave', ()=>{
      gsap.to(cursor, {
        css:{scale:1}
      })

      gsap.to(pointer, {
        css:{opacity:1}
      })

    })
  })


  /******* Hover sobre os Projectos  *******/
  projects.forEach(project => {
    project.addEventListener('mouseenter', ()=>{
      gsap.to(cursor, {
        css:{scale:2, borderColor:'#443F46',background:'#443f46a4'}
      })

      gsap.to(pointer, {
        css:{opacity:0}
      })

    })
  })

  projects.forEach(project => {
    project.addEventListener('mouseleave', ()=>{
      gsap.to(cursor, {
        css:{scale:1, borderColor:'#9A4F56', background:'#ffffff00'}
      })

      gsap.to(pointer, {
        css:{opacity:1}
      })

    })
  })

  /******* Hover sobre o Footer  *******/
  footer.addEventListener('mouseenter', ()=> {
    gsap.to(cursor, {
      css:{borderColor:'#443F46'}
    })

    gsap.to(pointer, {
      css:{background:'#443F46'}
    })
  })

  footer.addEventListener('mouseleave', ()=> {
    gsap.to(cursor, {
      css:{borderColor:'#9A4F56'}
    })

    gsap.to(pointer, {
      css:{background:'#9A4F56'}
    })
  })


/******* Hover sobre os Links do Hover  *******/
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', ()=>{
      gsap.to(cursor, {
        css:{scale:2}
      })

      gsap.to(pointer, {
        css:{opacity:0}
      })

    })
  })

  footerLinks.forEach(link => {
    link.addEventListener('mouseleave', ()=>{
      gsap.to(cursor, {
        css:{scale:1}
      })

      gsap.to(pointer, {
        css:{opacity:1}
      })

    })
  })

/******* Efeito 3d na imagem****** */

const container3D = document.querySelector('.three__container')
const photo = document.querySelector('.welcome__img img')

container3D.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 18;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 18;
  photo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(100px)`;
});

//Animate Out
container3D.addEventListener('mouseleave', (e) => {
  photo.style.transition = "all 0.5s ease";
  photo.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0px)`;
});