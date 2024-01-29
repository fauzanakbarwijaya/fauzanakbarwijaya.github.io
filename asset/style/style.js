const links = document.querySelectorAll('.loading-link');
const loadingContainers = document.querySelectorAll('.loading-container');

links.forEach((link, index) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    loadingContainers[index].style.display = 'flex';
    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1000);
  });
});

$('#dark-mode').on('click', function () {
  $('body').css('background-color', 'black');
  $('body').css('color', 'white');
});