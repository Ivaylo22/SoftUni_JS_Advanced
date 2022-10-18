function notify(message) {
    let notify = document.getElementById('notification');
    notify.textContent = message;
    notify.style.display = "block";

    notify.addEventListener('click', ()=>{
        notify.style.display = "none";
    })
}
