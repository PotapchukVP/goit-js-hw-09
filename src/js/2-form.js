const form = document.querySelector('.feedback-form');
const feedback = 'feedback-form-state';

form.addEventListener('submit', event => {
  event.preventDefault(); // prevent default behavior. Allows show console.log event
  if (
    !event.target.elements.email.value.trim() ||
    !event.target.elements.message.value.trim()
  ) {
    console.error('Please complete all fields before submitting');
    return;
  } else {
    console.log(JSON.parse(localStorage.getItem(feedback)));
    form.reset();
    localStorage.removeItem(feedback);
  }
});

form.addEventListener('input', event => {
  localStorage.setItem(
    feedback,
    JSON.stringify({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    })
  );
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem(feedback));
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
    // console.log('Data loaded from localStorage');
  } else {
    // console.log('Nothing saved in localStorage');
  }
});
