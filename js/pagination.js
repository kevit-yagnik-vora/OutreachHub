function renderPaginatedContacts(contacts, page=1, perPage=5) {
  const listEl = document.getElementById("list");
  const paginationEl = document.getElementById("pagination");

  // const totalPages = Math.ceil(contacts.data.length / perPage);
  const totalPages = contacts.totalPages || Math.ceil(contacts.data.length / perPage);
  page = contacts.page || 1;
  perPage = contacts.limit || 5;

  const start = (page - 1) * perPage;
  const paginated = contacts.data.slice(start, start + perPage);

  listEl.innerHTML = "";
  paginated.forEach(contact => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="contact-info">
        <strong>${contact.name}</strong>
        <p>${contact.phoneNumber}</p>
        <p>${contact.tags}</p>
      </div>  
      <div class="contact-actions">
        <button class="view" onclick="window.location.href='contacts-details.html?id=${contact.id}'">View</button>
        <button class="edit" onclick="window.location.href='contacts-form.html?id=${contact.id}'">Edit</button>
        <button class="delete" onclick="confirmDelete('${contact.id}')">Delete</button>
      </div>
    `;
    listEl.appendChild(li);
  });

  paginationEl.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = page === i ? "active" : "";
    btn.onclick = () => renderPaginatedContacts(contacts, i, perPage);
    paginationEl.appendChild(btn);
  }
}

async function confirmDelete(id) {

  showCustomConfirm("Do you really want to delete this contact?",async function (confirmed) {
    if (confirmed) {
      await deleteContact(id);
      const msg = localStorage.getItem("dialogMessage");
      if (msg) {
        const { text, type } = JSON.parse(msg);
        showDialog(text, type);
        localStorage.removeItem("dialogMessage");
      }
      getContacts().then(contacts => renderPaginatedContacts(contacts));
    }
  });
}
