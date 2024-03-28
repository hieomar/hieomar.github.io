// Get all skill cards
var skills = document.querySelectorAll('.skills-list .skill-card:not(.always-show)');

// Initially hide all but the first few skill cards
for (var i = 4; i < skills.length; i++) {
  skills[i].classList.add('hide');
}

// To toggle the skills section visibility
document.getElementById('toggle-skills').addEventListener('click', function() {
  for (var i = 0; i < skills.length; i++) {
    if (skills[i].classList.contains('hide')) {
      skills[i].classList.remove('hide');
    } else {
      skills[i].classList.add('hide');
    }
  }
});