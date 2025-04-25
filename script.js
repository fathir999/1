//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
};
//ceng ini buat klik semisalnya antum bikin botton nya lagi
//untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');
////ceng ini semisalnya antum udah di navbar nah lu langsung 
////pengen keluar lagi dan kamu tinggal pencet yang di conten nya lagi aja
//// ente ga usah pencet lagi yang namanya hamburger-menu lagi
document.addEventListener('click', function (e) {
    //jadi selain navbar sama hamburger jadi klik di mana pun yang ada di konten 
    //left
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        //kita mau menghilangkan atau mau keluar dari navbar
        navbarNav.classList.remove('active');
    }
});

