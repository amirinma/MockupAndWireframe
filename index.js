document.querySelector('body').appendChild(document.createElement('div')).setAttribute('id', 'main-div');
const mainDiv = document.querySelector('#main-div');
console.log(mainDiv)
elCreator(mainDiv, 'div', 2);
const child1Div = document.querySelector('#main-div_div1');
const child2Div = document.querySelector('#main-div_div2');
elCreator(child1Div, 'h3', 1);
elCreator(child1Div, 'img', 3);
elCreator(child2Div, 'h3', 1);
elCreator(child2Div, 'img', 3);
document.querySelector('#main-div_div1_h31').innerHTML = "Wireframe"
document.querySelector('#main-div_div1_img1').setAttribute('src', 'desktopWireframe.png');
document.querySelector('#main-div_div1_img2').setAttribute('src', 'ipadWireframe.png');
document.querySelector('#main-div_div1_img3').setAttribute('src', 'mobileWireframe.png');
document.querySelector('#main-div_div2_h31').innerHTML = "Mock-up"
document.querySelector('#main-div_div2_img1').setAttribute('src', 'desktopMockup.png');
document.querySelector('#main-div_div2_img2').setAttribute('src', 'ipadMockup.png');
document.querySelector('#main-div_div2_img3').setAttribute('src', 'mobileMockup.png');
function elCreator(parentEl, createEl, elCount){
  for(let i =1; i <= elCount; i++){
    parentEl.appendChild(document.createElement(`${createEl}`)).setAttribute('id',`${parentEl.getAttribute('id')}_${createEl}${i}`);
  }
}
