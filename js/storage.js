async function getContacts() {
    let contact;
    await fetch('http://localhost:3000/contacts/', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => res.json())
        .then(res => contact = res);
    // console.log(contact);
    return contact;
}

async function saveContact(contact) {
    if (contact.id) {
        console.log("Updating contact with ID:", contact.id);
        await fetch('http://localhost:3000/contacts/' + contact.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(contact)
        }).then(res => res.json()).then(res => {
            console.log("Record Updated")
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Contact Updated successful!",
                type: "info"
            }));
            window.location.href = `contacts-details.html?id=${res.id}`;
        }).catch(err => {
            console.log(err);
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Something went wrong",
                type: "warning"
            }));
        });
    } else {
        console.log("Inserting new contact");
        const { id, ...rest } = contact;
        await fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(rest)
        }).then(res => res.json()).then(res => {
            console.log("Record Inserted")
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Contact Inserted successful!",
                type: "success"
            }));
            window.location.href = `contacts-details.html?id=${res.id}`;
        }).catch(err => {
            console.log(err);
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Something went wrong",
                type: "warning"
            }));
        });
    }
}

async function getContactById(id) {
    let contact;
    await fetch('http://localhost:3000/contacts/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(res => res.json()).then(res => {
        contact = res
    })
    return contact;
}

async function deleteContact(id) {

    await fetch('http://localhost:3000/contacts/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(res => {
        if (!res.ok) {
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Something went wrong",
                type: "warning"
            }));
        } else {
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Contact Deleted successful!",
                type: "success"
            }));
        }
    })
}
