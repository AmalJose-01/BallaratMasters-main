document.getElementById('subscribeBtn').addEventListener('click', function () {
  const emailInput = document.querySelector('.subscribe-box input');
  if (emailInput.value) {
    alert(`Thanks for subscribing: ${emailInput.value}`);
    emailInput.value = '';
  } else {
    alert('Please enter a valid email address.');
  }
});
