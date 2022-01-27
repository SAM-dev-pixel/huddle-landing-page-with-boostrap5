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