function getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || [];
}

function saveContact(contact) {
    let contacts = getContacts();
    const index = contacts.findIndex(c => c.id === contact.id);
    if (index > -1) {
        contacts[index] = contact;
    } else {
        contact.id = Date.now().toString();
        contacts.push(contact);
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
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
