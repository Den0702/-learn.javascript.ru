//alert('Podłączono');
/* document.onclick = event => {
  if (!event.target.closest('.tree')) {return;}
  if (event.target.tagName != 'LI') {return;}
  
  for (const elem of event.target.children) {
    elem.hidden = !elem.hidden;
  }

}; */


/* Właściwe rozwiązanie */
const allLiElements = tree.querySelectorAll('li');
const animals = document.querySelector('.tree');

for (const li of allLiElements) {
  if (li.childElementCount === 0) {
    continue;
  }
  const span = document.createElement('span');  
  li.prepend(span);
  span.append(span.nextSibling);
}

animals.onclick = event => {
  let target = event.target;
  
  if (target.tagName !== 'SPAN') {
    return;
  }

  let childrenContainer = target.parentElement.querySelector('ul');

  childrenContainer.hidden = !childrenContainer.hidden;
};

