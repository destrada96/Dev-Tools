const nav = document.getElementById('nav');
const button = document.getElementById('btn');
const menu = document.getElementById('menu');
const button_cls = document.getElementById('close-button');
const header = document.getElementById('header');

const sections = document.querySelectorAll('#hidden-items')
console.log(sections);

window.addEventListener('scroll',(event)=>{
    if (document.documentElement.scrollTop > 700){
        nav.classList.add('visible')
        nav.classList.remove('unvisible')

    }else{
        nav.classList.add('unvisible')
        nav.classList.remove('visible')
    }
})

button.addEventListener('click',(event)=>{
    menu.classList.remove('hidden')
    menu.classList.add('show')
})

button_cls.addEventListener('click',(event)=>{
    menu.classList.remove('show')
    menu.classList.add('hidden')
})

sections.forEach(section => {
    section.addEventListener('click',(event)=>{
        menu.classList.remove('show')
        menu.classList.add('hidden')
    })
})

window.addEventListener('resize',(event)=>{
    if (event.currentTarget.innerWidth < 1000){
        header.innerHTML = 'Web Dev Tools';
    }
    else{
        header.innerHTML = 'Web Development Tools';
    }
})