// DARK MODE
const darkModeIcon = document.getElementById('moon-icon');
const dropdownMenuIcon = document.getElementById('menu-icon');

darkModeIcon.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.src = './assets/sun-icon.png'; // changes into the sun icon (light)
        dropdownMenuIcon.src = './assets/menu-icon-light.png'; // changes the menu icon from dark to light

    }
    else {
        darkModeIcon.src = './assets/moon-icon.png';
        dropdownMenuIcon.src = './assets/menu-icon-dark.png';
    }
}

// SEE MORE - Topic
const seeMoreTopic = document.querySelector('.outer-see-more-container-topic');

seeMoreTopic.addEventListener('click', function(event) { // activates when the topic button is clicked
    const currentTopic = event.target; // event.target refers to the element that was clicked

    const isSeeMoreBtnTopic = currentTopic.className.includes('see-more-button-topic'); // checks if it contains the given class

    if(!isSeeMoreBtnTopic) return; // if there is no class, the function returns, and the code below will not be executed

    const currentTextTopic = event.target.parentNode.querySelector('.see-more-elements-topic');

    currentTextTopic.classList.toggle('see-more-elements--show-topic'); // when the button with the referred class is clicked, the class with--show is toggled as on

    currentTopic.textContent = currentTopic.textContent.includes('See More >') ? 'Collapse <' : 'See More >'; // changes the see more button to collapse
});

// SEE MORE - Writer
const seeMoreWriter = document.querySelector('.outer-see-more-container-writer'); // activates when the writer button is clicked

seeMoreWriter.addEventListener('click', function(event) {
    const currentWriter = event.target; // same here, but for the writer button

    const isSeeMoreBtnWriter = currentWriter.className.includes('see-more-button-writer'); // same but different class

    if(!isSeeMoreBtnWriter) return; // the rest are the same but different class

    const currentTextWriter = event.target.parentNode.querySelector('.see-more-elements-writer');

    currentTextWriter.classList.toggle('see-more-elements--show-writer');

    currentWriter.textContent = currentWriter.textContent.includes('See More >') ? 'Collapse <' : 'See More >';
});

// MAX CHARACTER
function shortenDesc() {
    var elements = document.getElementsByClassName('new-desc');
    for (var i = 0; i < elements.length; i++) {
        var text = elements[i].getAttribute('data-original-text');
        if (window.innerWidth < 900 && text.length > 100) {
            elements[i].innerText = text.substring(0, 100) + '...';
        } else {
            elements[i].innerText = text;
        }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var elements = document.getElementsByClassName('new-desc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('data-original-text', elements[i].innerText);
    }
    shortenDesc();
});

window.addEventListener('resize', shortenDesc);

// MOON POP UP TEXT
const popUpText = document.querySelector('.moon-pop-up-text');

popUpText.classList.add('moon-pop-up-text--show');

setTimeout(function() {
    popUpText.classList.remove('moon-pop-up-text--show');
}, 5000);