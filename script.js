let items = document.querySelectorAll('.item');
let main = document.getElementById('main');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > 425){
        nav.classList.add('tofixed');
    }else{
        nav.classList.remove('tofixed');
    }
    items.forEach(item =>{
        if(item.offsetTop - window.scrollY < 425){
            item.classList.add('active');
        }
    })
})