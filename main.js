/*--Landing Page Quote Toggle--*/
const toggle = document.querySelector(".quote-toggle");
const quote = document.querySelector(".header-quote")
toggle.addEventListener('click',()=>{
    quote.classList.add('active')
    toggle.classList.add('hidden')
})
quote.addEventListener('click',()=>{
    quote.classList.remove('active')
    toggle.classList.remove('hidden')
})
