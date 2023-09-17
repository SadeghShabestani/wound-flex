document.addEventListener('DOMContentLoaded', function () {
    // send
    const form = document.getElementById('product-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch('/products/manage/', { method: 'POST', body: formData}).then(response => response.json()).then(data => {
            alert(data.data);
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    // send
    const form = document.getElementById('product-form--remove');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch('/products/remove/', { method: 'POST', body: formData}).then(response => response.json()).then(data => {
            alert(data.data);
        })
    })
})