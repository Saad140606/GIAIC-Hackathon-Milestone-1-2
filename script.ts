const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement;
const toggleExperienceButton = document.getElementById('toggle-experience') as HTMLButtonElement;

const skillsSection = document.getElementById('skills') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;
const experienceSection = document.getElementById('work-experience') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});

toggleEducationButton.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    } else {
        educationSection.style.display = 'none';
    }
});

toggleExperienceButton.addEventListener('click', () => {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
    } else {
        experienceSection.style.display = 'none';
    }
});