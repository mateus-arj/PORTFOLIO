// ===== TEMA =====

const botao = document.getElementById('botao-tema');

const body = document.body;

const temaSalvo = localStorage.getItem('tema');

temaEscuro(temaSalvo === 'escuro');

function temaEscuro(tipo){

  if(tipo){

    body.classList.add('escuro');

    botao.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }

  else{

    body.classList.remove('escuro');

    botao.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

}

botao.addEventListener('click', (e)=>{

  e.preventDefault();

  const isEscuro =
  body.classList.toggle('escuro');

  temaEscuro(isEscuro);

  localStorage.setItem(
    'tema',
    isEscuro ? 'escuro' : 'claro'
  );

});

// ===== SCROLL SUAVE =====

const navLinks =
document.querySelectorAll('#menu a.link');

navLinks.forEach(link=>{

  link.addEventListener('click', function(e){

    const href =
    this.getAttribute('href');

    if(href.startsWith('#')){

      e.preventDefault();

      const target =
      document.querySelector(href);

      if(target){

        window.scrollTo({

          top:target.offsetTop - 80,

          behavior:'smooth'

        });

      }

    }

  });

});

// ===== TABS =====

const botoesTabs =
document.querySelectorAll('.tab-btn');

const tabs =
document.querySelectorAll('.tab-item');

botoesTabs.forEach(botao=>{

  botao.addEventListener('click', ()=>{

    botoesTabs.forEach(btn=>{

      btn.classList.remove('ativo');

    });

    tabs.forEach(tab=>{

      tab.classList.remove('ativo');

    });

    botao.classList.add('ativo');

    const id =
    botao.getAttribute('data-tab');

    document
    .getElementById(id)
    .classList.add('ativo');

  });

});

// ===== CERTIFICADOS =====

const botoesCert =
document.querySelectorAll('.cert-btn');

const areasCert =
document.querySelectorAll('.cert-area');

botoesCert.forEach(botao=>{

  botao.addEventListener('click', ()=>{

    botoesCert.forEach(btn=>{

      btn.classList.remove('ativo-cert');

    });

    areasCert.forEach(area=>{

      area.classList.remove('ativo-area');

    });

    botao.classList.add('ativo-cert');

    const alvo =
    botao.getAttribute('data-cert');

    document
    .getElementById(alvo)
    .classList.add('ativo-area');

  });

});