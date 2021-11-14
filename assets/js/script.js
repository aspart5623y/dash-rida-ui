/* ========================  P R E L O A D E R  ======================= */

if (document.readyState == 'loading') {
    let width = 0
    for (let i = 0; i < 101; i++) {
        width = width + 1
    }
    document.querySelector('#preloader .progress .progress-bar').style.width = width + '%';
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('preloader').classList.add('loaded');


        // after the preloader is done loading,
        // it calls the ready function.
        // The ready funtion contains all the functions and click events that would be handled in the site.
        ready();
    });
}


function ready() { 
    document.getElementById('openNav').addEventListener('click', function(){
        document.getElementById('navbarMenu').classList.add('open');
        document.querySelector('.sidebar-overlay').classList.add('open');
    });

    document.getElementById('closeNav').addEventListener('click', closeNav)

    document.querySelector('.sidebar-overlay').addEventListener('click', closeNav)  
}

function closeNav() {
    document.getElementById('navbarMenu').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('open');
}
