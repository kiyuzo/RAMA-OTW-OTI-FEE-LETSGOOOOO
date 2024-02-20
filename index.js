// DARK MODE
const darkModeIcon = document.getElementById('moon-icon');
const dropdownMenuIcon = document.getElementById('menu-icon');

darkModeIcon.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.src = './assets/sun-icon.png';
        dropdownMenuIcon.src = './assets/menu-icon-light.png';

    }
    else {
        darkModeIcon.src = './assets/moon-icon.png';
        dropdownMenuIcon.src = './assets/menu-icon-dark.png';
    }
}

// SEE MORE - Topic
const seeMoreTopic = document.querySelector('.outer-see-more-container-topic');

seeMoreTopic.addEventListener('click', function(event) {
    const currentTopic = event.target;

    const isSeeMoreBtnTopic = currentTopic.className.includes('see-more-button-topic');

    if(!isSeeMoreBtnTopic) return;

    const currentTextTopic = event.target.parentNode.querySelector('.see-more-elements-topic');

    currentTextTopic.classList.toggle('see-more-elements--show-topic');

    currentTopic.textContent = currentTopic.textContent.includes('See More >') ? 'Collapse <' : 'See More >';
});

// SEE MORE - Writer
const seeMoreWriter = document.querySelector('.outer-see-more-container-writer');

seeMoreWriter.addEventListener('click', function(event) {
    const currentWriter = event.target;

    const isSeeMoreBtnWriter = currentWriter.className.includes('see-more-button-writer');

    if(!isSeeMoreBtnWriter) return;

    const currentTextWriter = event.target.parentNode.querySelector('.see-more-elements-writer');

    currentTextWriter.classList.toggle('see-more-elements--show-writer');

    currentWriter.textContent = currentWriter.textContent.includes('See More >') ? 'Collapse <' : 'See More >';
});