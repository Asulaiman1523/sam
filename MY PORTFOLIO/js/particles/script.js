document.querySelector('#menu-btn').onclick = () =>{
    document.querySelector('#menu-btn').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active')
}

var typed = new Typed('.typing-text', {
    strings : ['front end developer', 'front end developer', 'front end developer'],
    loop : true,
    typeSpeed : 150
});