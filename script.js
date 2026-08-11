document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const location = document.getElementById("location").value.trim();
    const details = document.getElementById("details").value.trim();

    if (!name || !phone || !details) {
      alert("Please enter your name, phone number and project details.");
      return;
    }

    const message =
      "Hello Royal Construction International,\n\n" +
      "I would like a quotation.\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Service: " + service + "\n" +
      "Location: " + location + "\n" +
      "Project details: " + details;

    const whatsappURL =
      "https://wa.me/263714935110?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });

});
