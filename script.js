// Toggle the dropdown menu on smaller screens
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('show-nav');
});
