protectPage();

window.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const contactId = params.get('id');

    if (contactId) {
        let contact;
        await getContactById(contactId).then(res => contact = res);
        if (contact) {
            document.getElementById("id").value = contact.id;
            document.getElementById("name").value = contact.name;
            document.getElementById("phoneNumber").value = contact.phoneNumber;
            document.getElementById("tags").value = contact.tags.join(',');
        }
    }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const tags = document.getElementById("tags").value.split(',').map(item => item.trim());;
    console.log({id ,name, phoneNumber, tags});
    saveContact({id, name, phoneNumber, tags });
    // window.location.href = `contacts-details.html?id=${id}`;
});