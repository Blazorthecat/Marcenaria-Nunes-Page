window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.querySelector("#contatoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
    })
        .then((response) => {
            if (response.ok) {
                const toastElement = document.getElementById("formToast");
                const toast = new bootstrap.Toast(toastElement);
                toast.show();
                form.reset();
            } else {
                alert("Erro ao enviar. Tente novamente mais tarde.");
            }
        })
        .catch((error) => {
            alert("Erro de conexão. Verifique sua internet.");
        });
});
