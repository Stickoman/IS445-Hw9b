document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("/ex1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.text())
        .then(message => {
            document.getElementById("confirmation").textContent = message;
        })
        .catch(() => {
            document.getElementById("confirmation").textContent = "Error submitting form.";
        });
});
