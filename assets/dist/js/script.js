document.addEventListener('DOMContentLoaded', () => {
    let tablinks = document.querySelectorAll('.tab-links');
    let contents = document.querySelectorAll('.contents');

    tablinks.forEach((tablink, index) => {
        tablink.addEventListener('click', (e) => {
            // Remove 'active' class from all tab links and contents
            tablinks.forEach(tablink => {
                tablink.classList.remove('active');
            });
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Add 'active' class to the clicked tab link
            tablink.classList.add('active');

            // Set line animation properties
            let line = tablink.nextElementSibling;
            line.style.width = tablink.offsetWidth + "px";
            line.style.left = tablink.offsetLeft + "px";

            // Add 'active' class to the corresponding content
            contents[index].classList.add('active');
        });
    });
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });