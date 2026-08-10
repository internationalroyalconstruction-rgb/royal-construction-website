const form = document.getElementById("form");

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value.trim();
  const details = document.getElementById("details").value.trim();

  const message =
`Hello Royal Construction International,

I would like a quotation.

Name: ${name}
Phone: ${phone}
Service: ${service}
Location: ${location}
Project details: ${details}`;

  const whatsappURL =
    "https://wa.me/263714935110?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
