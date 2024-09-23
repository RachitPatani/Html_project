document.addEventListener("DOMContentLoaded", () => {
  const contactList = JSON.parse(localStorage.getItem("contacts")) || [];

  const contactListContainer = document.getElementById("contact-list");

  const renderContacts = () => {
    contactListContainer.innerHTML = "";

    contactList.forEach((contact, index) => {
      const contactTile = document.createElement("div");

      contactTile.className = "tile";

      contactTile.innerHTML = `
<div class="actions">
<button onclick="editContact(${index})">Edit</button>
<button onclick="deleteContact(${index})">Delete</button>
</div>
<p>Name: ${contact.firstName} ${contact.lastName}</p>
<p>Phone: ${contact.phone}</p>
<p>Email: ${contact.email}</p>
<p>Address: ${contact.addressType}</p>
<p>Address: ${contact.addresses}</p>

          `;

      contactListContainer.appendChild(contactTile);
    });
  };

  window.editContact = (index) => {
    localStorage.setItem("editIndex", index);

    location.href = "contact.html";
  };

  window.deleteContact = (index) => {
    contactList.splice(index, 1);

    localStorage.setItem("contacts", JSON.stringify(contactList));

    renderContacts();
  };

  renderContacts();
});
