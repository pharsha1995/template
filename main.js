document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelectorAll("nav ul li");
  for (let item of navList) {
    item.addEventListener("click", (e) => {
      navList.forEach((item) => {
        item.classList.remove("bg-gray-900");
      });
      item.classList.add("bg-gray-900");
      sections = document.querySelectorAll("main section");
      for (let item of sections) {
        item.classList.add("hidden");
      }
      switch (item.id) {
        case "contact-nav":
          contact = document.getElementById("contact-section");
          contact.classList.remove("hidden");
        case "about-nav":
          about = document.getElementById("about-section");
          about.classList.remove("hidden");
        case "services-nav":
          services = document.getElementById("services-section");
          services.classList.remove("hidden");
      }
    });
  }
});
