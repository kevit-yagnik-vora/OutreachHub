async function getContacts() {
    let contact;
    await fetch('https://687614dc814c0dfa653a8c62.mockapi.io/Contact')
        .then(res => res.json())
        .then(res => contact = res);
    // return JSON.parse(localStorage.getItem("contacts")) || [];
    return contact;
}

async function saveContact(contact) {
    // console.log(contact)
    // let contacts = getContacts();
    // const index = contacts.findIndex(c => c.id === contact.id);
    // let id;
    // if (index > -1) {
    //     contacts[index] = contact;
    //     id = contacts[index].id;
    // } else {
    //     contact.id = Date.now().toString();
    //     id = contact.id;
    //     contacts.push(contact);
    // }
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    // window.location.href = `contacts-details.html?id=${id}`;
    if (contact.id !== '') {
        await fetch('https://687614dc814c0dfa653a8c62.mockapi.io/Contact/' + contact.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        }).then(res => res.json()).then(res => {
            console.log("Record Updated")
            window.location.href = `contacts-details.html?id=${res.id}`;

        })
    } else {
        await fetch('https://687614dc814c0dfa653a8c62.mockapi.io/Contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        }).then(res => res.json()).then(res => {
            console.log("Record Inserted")
            window.location.href = `contacts-details.html?id=${res.id}`;

        })
    }



}

async function getContactById(id) {
    // const contacts = getContacts();
    // return contacts.find(c => c.id === id);
    let contact;
    await fetch('https://687614dc814c0dfa653a8c62.mockapi.io/Contact/' + id).then(res => res.json()).then(res => {
        contact = res
    })
    return contact;
}

async function deleteContact(id) {
    // let contacts = getContacts();
    // contacts = contacts.filter(c => c.id !== id);
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    await fetch('https://687614dc814c0dfa653a8c62.mockapi.io/Contact/' + id, {
        method: 'DELETE'
    }).then(res => {
        if (!res.ok) {
            console.log("Failed to Delete")
        } else {
            console.log("Delete successfull")
        }
    })
}
