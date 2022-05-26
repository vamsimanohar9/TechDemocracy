const readmorebutton4 = document.querySelector('.read-more-btn-4');
const readmorebutton5 = document.querySelector('.read-more-btn-5');
const longtext4 = document.querySelector('.longtext-4');
const longtext5 = document.querySelector('.longtext-5');
const readmorebutton6 = document.querySelector('.read-more-btn-6');
const readmorebutton7 = document.querySelector('.read-more-btn-7');
const longtext6 = document.querySelector('.longtext-6');
const longtext7 = document.querySelector('.longtext-7');



readmorebutton4.addEventListener('click',(e)=>{
    longtext4.classList.toggle('show-more-4')
})

readmorebutton5.addEventListener('click',(e)=>{
    longtext5.classList.toggle('show-more-5')
})

readmorebutton6.addEventListener('click',(e)=>{
    longtext6.classList.toggle('show-more-6')
})

readmorebutton7.addEventListener('click',(e)=>{
    longtext7.classList.toggle('show-more-7')
})