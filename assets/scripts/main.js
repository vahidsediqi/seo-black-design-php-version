
  $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


// SIDEBAR
const sidebarBtn = document.querySelector('.sidebarBtn');
const sideBarWrapper = document.querySelector('.sidebar');
sidebarBtn.addEventListener('click', () => {
  sideBarWrapper.classList.toggle('moveRight')
})
