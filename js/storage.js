function getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || [];
}

function saveContact(contact) {
    let contacts = getContacts();
    const index = contacts.findIndex(c => c.id === contact.id);
    let id;
    if (index > -1) {
        contacts[index] = contact;
        id = contacts[index].id;
    } else {
        contact.id = Date.now().toString();
        id = contact.id;
        contacts.push(contact);
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
    window.location.href = `contacts-details.html?id=${id}`;

}

function getContactById(id) {
    const contacts = getContacts();
    return contacts.find(c => c.id === id);
}

function deleteContact(id) {
    let contacts = getContacts();
    contacts = contacts.filter(c => c.id !== id);
    localStorage.setItem("contacts", JSON.stringify(contacts));
}
