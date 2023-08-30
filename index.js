const shareBtn = document.querySelector('.share');
const buttonGroup = document.querySelector('.button');

shareBtn.addEventListener('click', function() {
  buttonGroup.classList.toggle('button-hidden');
});
