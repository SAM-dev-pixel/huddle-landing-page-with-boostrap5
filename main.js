// email validation
((subscribe) => {
  
  const inputContain = document.querySelector('.input-contain');
  const emailInput = inputContain.querySelector('.email-input');
  const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  subscribe.addEventListener('click', ()=> {
    if(emailValidate.test(emailInput.value)) {
      
      inputContain.classList.remove('error');
      emailInput.classList.remove('error');
      return true;
      
    } else {
      
      inputContain.classList.add('error');
      emailInput.classList.add('error');
      return false;
      
    }
  });
  
})(document.querySelector('.subscribe-btn'));

// animations
((readyText)=> {
  
  const arrStr = readyText.textContent.split('');
  readyText.textContent = '';
  arrStr.forEach(str => readyText.innerHTML += `<span class="ready-str">${str}</span>`);
  
})(document.querySelector('.ready-txt'));

const animations =()=> {
  
  const heroImage = document.querySelector('.hero-img');
  const textsP = document.querySelectorAll('.text');
  const articleImages = document.querySelectorAll('article img');
  const readyStr = document.querySelectorAll('.ready-str');
  const footLinks = document.querySelectorAll('.foot-link');
  
  const screenHeight = window.innerHeight / 1.2;
  
  (heroImage.getBoundingClientRect().top < screenHeight) ? heroImage.classList.add('active') : heroImage.classList.remove('active');
  textsP.forEach(text => (text.getBoundingClientRect().top < screenHeight) ? text.classList.add('active') : text.classList.remove('active'));
  articleImages.forEach(img => (img.getBoundingClientRect().top < screenHeight) ? img.classList.add('active') : img.classList.remove('active'));
  readyStr.forEach((str, i) => {
    str.style.transition = `.3s ${0.025 * i}s`;
    (str.getBoundingClientRect().top < screenHeight) ? str.style.opacity = 1 : str.style.opacity = 0;
  });
  footLinks.forEach(link => (link.getBoundingClientRect().top / 1.15< screenHeight) ? link.classList.add('active') : link.classList.remove('active'));
  
}
window.addEventListener('scroll', animations);

((introTitle)=> {
  
  const arrStr = introTitle.textContent.split('');
  introTitle.textContent = '';
  arrStr.forEach(str => introTitle.innerHTML += `<span class='intro-str'>${str}</span>`);
  const introTitleSpans = document.querySelectorAll('.intro-str');
  introTitleSpans.forEach((span, i) => span.style.transition = `.3s ${0.025 * i}s`);
  setTimeout(()=> introTitleSpans.forEach(span => span.style.opacity = 1 ), 250)
  
})(document.querySelector('.intro-title'));
