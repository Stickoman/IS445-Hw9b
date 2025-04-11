document.getElementById("articleForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const data = {
        title: title,
        content: content
    };

    fetch("/ex3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("confirmation").textContent = data.message;
        })
        .catch(error => {
            document.getElementById("confirmation").textContent = "Error submitting form.";
        });
});
