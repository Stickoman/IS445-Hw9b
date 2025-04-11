document.getElementById("countryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const countriesInput = document.getElementById("countries").value;
    const countriesArray = countriesInput.split(',').map(country => country.trim());

    const data = {
        name: name,
        countries: countriesArray
    };

    fetch("/api/countries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())  // Expecting JSON response
        .then(data => {
            document.getElementById("confirmation").textContent = data.message;
        })
        .catch(error => {
            document.getElementById("confirmation").textContent = "Error submitting form.";
        });
});
