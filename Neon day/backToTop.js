var backToTop = document.getElementById("backToTop");
var timeIntrval;

window.addEventListener("scroll", () => {
    if (window.scrollY < 500) {
        backToTop.className = "noShow";
    }
    else {
        backToTop.className = "show";
        function scrollTo(element) {
            window.scroll({
              behavior: 'smooth',
              left: 0,
              top: element.offsetTop
            });
          }
          
          backToTop.addEventListener('click', () => {
            scrollTo(document.body);
          });
    }
});