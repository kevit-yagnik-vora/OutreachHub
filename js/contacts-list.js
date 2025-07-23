let confirmCallback = null;

function showCustomConfirm(message, callback) {
    document.getElementById("customConfirmMessage").textContent = message;
    document.getElementById("customConfirmBox").style.display = "flex";
    confirmCallback = callback;
}

function customConfirmYes() {
    if (confirmCallback) confirmCallback(true);
    document.getElementById("customConfirmBox").style.display = "none";
}

function customConfirmNo() {
    if (confirmCallback) confirmCallback(false);
    document.getElementById("customConfirmBox").style.display = "none";
}

protectPage();
getContacts().then(contacts => renderPaginatedContacts(contacts));
window.addEventListener("DOMContentLoaded", () => {
    const msg = localStorage.getItem("dialogMessage");
    if (msg) {
        const { text, type } = JSON.parse(msg);
        showDialog(text, type);
        localStorage.removeItem("dialogMessage");
    }
});