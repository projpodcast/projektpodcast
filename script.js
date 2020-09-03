const form = document.getElementById("form");
const info = document.getElementById("info");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(() => {
        info.innerHTML = "wysłano";
        email.value = "";
      })
      .catch(() => {
        info.innerHTML = "wystąpił błąd";
        email.value = "";
      });
  }
});
