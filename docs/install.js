'use strict';
// Both instructions are bundled. Switching languages never makes a network request.
function selectLanguage(language){
  const chosen=language==='en'?'en':'ru';document.documentElement.lang=chosen;
  document.querySelectorAll('[data-content]').forEach(section=>section.hidden=section.dataset.content!==chosen);
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===chosen)));
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>selectLanguage(button.dataset.language)));
selectLanguage(navigator.language?.toLowerCase().startsWith('ru')?'ru':'en');
