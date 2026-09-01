// Menú móvil
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if(burger && mobileNav){
    burger.addEventListener('click', function(){
      const open = mobileNav.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    }));
  }

  // Revelado al hacer scroll
  const revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, {threshold:0.15});
    revealEls.forEach(el => io.observe(el));
  }

  // Newsletter (simulado, sin backend real — conectar a un proveedor tipo Mailchimp/Brevo al publicar)
  const newsForm = document.getElementById('newsForm');
  if(newsForm){
    newsForm.addEventListener('submit', function(e){
      e.preventDefault();
      const note = document.getElementById('newsNote');
      const success = document.getElementById('newsSuccess');
      if(note) note.style.display = 'none';
      if(success) success.style.display = 'block';
      document.getElementById('newsEmail').value = '';
    });
  }

  // Formulario de contacto (simulado, sin backend real — conectar a Formspree/backend propio al publicar)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('contactSuccess').style.display = 'block';
      contactForm.reset();
    });
  }

  // Banner de cookies
  const banner = document.getElementById('cookieBanner');
  if(banner){
    let choiceMade = false;
    try {
      choiceMade = localStorage.getItem('cauce-cookie-choice') !== null;
    } catch(err){ /* localStorage no disponible en este contexto */ }
    if(!choiceMade){
      setTimeout(() => banner.classList.add('show'), 800);
    }
    window.setCookieChoice = function(accepted){
      try { localStorage.setItem('cauce-cookie-choice', accepted ? 'accepted' : 'rejected'); } catch(err){}
      banner.classList.remove('show');
    };
  }
});
