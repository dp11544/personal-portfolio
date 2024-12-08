const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
function scrollToSkills() {
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}
const toggleMode = () => {
  document.body.classList.toggle('dark-mode');
};
document.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const sectionPosition = skillsSection.getBoundingClientRect();
  const screenHeight = window.innerHeight;

  if (sectionPosition.top < screenHeight - 100) {
      skillsSection.querySelector('.section-title').style.animation = 'fadeInSlideDown 1s ease-in-out';
  }
});
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
        e.preventDefault();
    }
});
