document.addEventListener("DOMContentLoaded", function () {
  // EmailJS Initialization (Replace with your details)
  emailjs.init("X83dJ9xgub9PpaP1I");

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const interest = formData.get("interest");
    const subscribe = formData.get("subscribe") ? "Yes" : "No";

    // Prepare email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: message,
      interest: interest,
      subscribe: subscribe,
    };

    // Send Email using EmailJS
    emailjs.send("service_ponl1qm", "template_rbhlmlf", templateParams).then(
      function (response) {
        formStatus.textContent =
          "Message sent successfully! We will get back to you soon.";
        formStatus.style.color = "green";
        contactForm.reset();
      },
      function (error) {
        formStatus.textContent = "Failed to send message. Please try again.";
        formStatus.style.color = "red";
        console.log("Email send failed:", error);
      }
    );
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
