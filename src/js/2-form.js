const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email ?? '';
    form.elements.message.value = formData.message ?? '';
  } catch (err) {
    console.error('Wrong data:', err);
  }
}

// input event
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// submit event
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
    return;
  }

  console.log('Form submitted:', formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = {};
  form.reset();
});
