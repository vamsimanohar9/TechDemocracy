const readmorebutton = document.querySelector('.read-more-btn');
const readmorebutton1 = document.querySelector('.read-more-btn-1');
const longtext = document.querySelector('.longtext');
const longtext1 = document.querySelector('.longtext-1');
const readmorebutton2 = document.querySelector('.read-more-btn-2');
const longtext2 = document.querySelector('.longtext-2');
const readmorebutton3 = document.querySelector('.read-more-btn-3');
const longtext3 = document.querySelector('.longtext-3');


readmorebutton.addEventListener('click',(e)=>{
    longtext.classList.toggle('show-more')
})

readmorebutton1.addEventListener('click',(e)=>{
    longtext1.classList.toggle('show-more-1')
})

readmorebutton2.addEventListener('click',(e)=>{
    longtext2.classList.toggle('show-more-2')
})

readmorebutton3.addEventListener('click',(e)=>{
    longtext3.classList.toggle('show-more-3')
})
