const wrapper = document.querySelector('#wrapper');


wrapper.addEventListener('mousemove', e => {
    wrapper.style.backgroundColor = 'rgb('+ e.offsetX +', '+ e.offsetY +',40)'
})