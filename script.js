
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.getElementById('menuToggle'), nav=document.getElementById('mainNav');
 if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'));});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!btn.contains(e.target))nav.classList.remove('open')});}
});
