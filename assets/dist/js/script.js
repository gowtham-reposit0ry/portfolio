document.addEventListener("DOMContentLoaded", function () {
    // Get the current page's hash (e.g., #about, #skills)
    var currentWindowLocation = window.location.hash;

    // Remove "active" class from all navigation items
    document.querySelectorAll('.navbar-nav .nav-item').forEach(function (item) {
        item.classList.remove('active');
    });

    // Add "active" class to the current page's navigation item
    if (currentWindowLocation != "") {
        var correspondingNavItem = document.querySelector(`.navbar-nav .nav-item a[href="${currentWindowLocation}"]`);
        if (correspondingNavItem) {
            correspondingNavItem.parentElement.classList.add('active');
        }
    }
});

function moveText(elementId, event) {
    const span = document.getElementById(elementId);
    const rect = span.getBoundingClientRect();
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const translateX = (centerX - mouseX) / 10;
    const translateY = (centerY - mouseY) / 10;

    span.style.transform = `translate(${translateX}px, ${translateY}px)`;
} 