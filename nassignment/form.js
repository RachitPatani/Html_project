document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contact');

  const submitButton = document.getElementById('submit');

  const backButton = document.getElementById('back');

  const editIndex = localStorage.getItem('editIndex');

  const contactList = JSON.parse(localStorage.getItem('contacts')) || [];
 
  const validateForm = () => {

      const firstName = form.firstName.value.trim();

      const lastName = form.lastName.value.trim();

      const phone = form.phone.value.trim();

      const email = form.email.value.trim();

      const phoneValid = /^\d{10}$/.test(phone);

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      const addresses=from.txt.value.trim();

      submitButton.disabled = !(firstName && lastName && phoneValid && emailValid);

  };
 
  if (editIndex !== null) {

      const contact = contactList[editIndex];

      form.firstName.value = contact.firstName;

      form.lastName.value = contact.lastName;

      form.phone.value = contact.phone;

      form.email.value = contact.email;

      form.addressType.value = contact.addressType;
      from.txt.value=contact.addresses;

      validateForm();

  }
 
  form.addEventListener('input', validateForm);
 
  form.addEventListener('submit', (e) => {

      e.preventDefault();

      const contact = {

          firstName: form.firstName.value.trim(),

          lastName: form.lastName.value.trim(),

          phone: form.phone.value.trim(),

          email: form.email.value.trim(),

          addressType: form.addressType.value,

          addresses: form.txt.value.trim()

      };

      if (editIndex === null) {

          contactList.push(contact);

      } else {

          contactList[editIndex] = contact;

          localStorage.removeItem('editIndex');

      }

      localStorage.setItem('contacts', JSON.stringify(contactList));

      location.href = 'index.html';

  });
 
  backButton.addEventListener('click', () => {

      localStorage.removeItem('editIndex');

      location.href = 'index.html';

  });

});

 