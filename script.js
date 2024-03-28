// if the button cta-btn is clicked, scroll to the section with the class of projects
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.querySelector('.projects').scrollIntoView({behavior: 'smooth'});
});

// Animate the hidden elements when they are in the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }else {
        entry.target.classList.remove('animate');
      }
    });
  })
  
  const hiddenElement = document.querySelectorAll('.hidden');
  hiddenElement.forEach(element => {
      observer.observe(element);
  });

// Get all skill cards
var skills = document.querySelectorAll('.skills-list .skill-card:not(.always-show)');

// Initially hide all but the first few skill cards
for (var i = 4; i < skills.length; i++) {
  skills[i].classList.add('hide');
}

// To toggle the skills section visibility
document.getElementById('toggle-skills').addEventListener('click', function() {
  for (var i = 4; i < skills.length; i++) {
    if (skills[i].classList.contains('hide')) {
      skills[i].classList.remove('hide');
    } else {
      skills[i].classList.add('hide');
    }
  }
//   set the text of the button to hide
    if (this.innerText === 'View all') {
        this.innerText = 'View less';
    } else {
        this.innerText = 'View all';
    }
});