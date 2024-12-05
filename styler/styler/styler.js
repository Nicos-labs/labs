'use strict';
function handleFormSubmit(evnt) {
  evnt.preventDefault();

  let fontC = document.querySelector('#fColor').value;
  let backC = document.querySelector('#bColor').value;
  let fsize = document.querySelector('#fontS').value;
  let paragraphs =  document.querySelectorAll('body');
  for (let paragraph of paragraphs) {
    paragraph.style.color = fontC;
    paragraph.style.backgroundColor = backC;
    paragraph.style.fontSize = fsize;   
    }
  
    current2();
}


function main() {
    let formElement = document.querySelector('#styler');
    formElement.addEventListener('submit', handleFormSubmit);
    current();
  }
  
  function current2() {
    let collects = document.querySelectorAll('li');
    for (let collect of collects) {
      collect.remove();     
      } 
    let list = document.querySelector('#result')
    let itemA = document.createElement('li');
    let itemB = document.createElement('li');
    let itemC = document.createElement('li');
    list.appendChild(itemA);
    list.appendChild(itemB);
    list.appendChild(itemC);
    let compStyles = window.getComputedStyle(itemA, null);
    let fC = compStyles.getPropertyValue('color');
    let bC = document.body.style.backgroundColor;
    let fS = compStyles.getPropertyValue('font-size');
    let newParaText1 = document.createTextNode(`Current Font Color is ${fC}`);
    let newParaText2 = document.createTextNode(` Current Background Color is ${bC}`);
    let newParaText3 = document.createTextNode(`Current Font Size is ${fS}`);
    itemA.appendChild(newParaText1);
    itemB.appendChild(newParaText2);
    itemC.appendChild(newParaText3);

    }
function current() {
  let collects = document.querySelectorAll('li');
  let compStyles = window.getComputedStyle(collects[0], null);
  let fC = compStyles.getPropertyValue('color');
  let bC = compStyles.getPropertyValue('background-color');
  let fS = compStyles.getPropertyValue('font-size');
  let newParaText1 = document.createTextNode(`Current Font Color is ${fC}`);
  let newParaText2 = document.createTextNode(` Current Background Color is ${bC}`);
  let newParaText3 = document.createTextNode(`Current Font Size is ${fS}`);
  collects[0].appendChild(newParaText1);
  collects[1].appendChild(newParaText2);
  collects[2].appendChild(newParaText3);
  }
  main();