var toggleSkillsButton = document.getElementById('toggle-skills');
var toggleEducationButton = document.getElementById('toggle-education');
var toggleExperienceButton = document.getElementById('toggle-experience');
var skillsSection = document.getElementById('skills');
var educationSection = document.getElementById('education');
var experienceSection = document.getElementById('work-experience');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
toggleEducationButton.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    }
    else {
        educationSection.style.display = 'none';
    }
});
toggleExperienceButton.addEventListener('click', function () {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
    }
    else {
        experienceSection.style.display = 'none';
    }
});
