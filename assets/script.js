//nav bar closing issue fixed
  document
     .querySelectorAll(".navbar-collapse .nav-link")
    .forEach((link) => {
                link.addEventListener("click", function (e) {
                    let section = document.querySelector(e.target.getAttribute("href"));
                    if (section) {
                        e.preventDefault(); // Prevent default anchor click behavior
                        let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
                        window.scroll({
                            top: section.offsetTop - navbarHeight, // Adjust for navbar height
                            behavior: "smooth",
                        });
                        document
                            .querySelector(".navbar-collapse")
                            .classList.remove("show"); // Collapse navbar
                    }
                });
  });

  // Add an event listener to the form submission
  document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting


    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() === '') return;

    // Show the thank-you message
    document.getElementById('signup-message').style.display = 'block';

    //clear the input field
    emailInput.value = '';
    // Auto-hide after 1 minute
  setTimeout(() => {
    messageDiv.style.display = 'none';
    messageDiv.classList.remove('success', 'error');
  }, 60000); // 60000 ms = 1 minute
});
