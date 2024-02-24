// DARK MODE (PAGE, MOON ICON, DROPDOWN MENU ICON, FAVICON)
const darkModeIcon = document.getElementById('moon-icon');
const dropdownMenuIcon = document.getElementById('menu-icon');
const favicon = document.getElementById('favicon');

darkModeIcon.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.src = './assets/sun-icon.png'; // changes into the sun icon (light)
        dropdownMenuIcon.src = './assets/menu-icon-light.png'; // changes the menu icon from dark to light
        favicon.href = './assets/favicon-dark.png'; // changes the favicon from light to dark to represent dark mode
    }
    else { // changes everything back
        darkModeIcon.src = './assets/moon-icon.png';
        dropdownMenuIcon.src = './assets/menu-icon-dark.png';
        favicon.href = './assets/favicon-light.png';
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
    var elements = document.getElementsByClassName('new-desc'); // store the variable elements with the referred class
    for (var i = 0; i < elements.length; i++) {
        var text = elements[i].getAttribute('data-original-text'); // store the previous desc in the text variable
        if (window.innerWidth < 900 && text.length > 100) { // if the window width is less than 900 and the text length is more than 100, then the desc will be shortened
            elements[i].innerText = text.substring(0, 100) + '...';
        }
        else {
            elements[i].innerText = text;
        }
    }
}

window.addEventListener('DOMContentLoaded', function() { // check when the window is loaded, the desc will be shortened if the condition is met
    var elements = document.getElementsByClassName('new-desc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('data-original-text', elements[i].innerText);
    }
    shortenDesc();
});

window.addEventListener('resize', shortenDesc); // check when the window is resized, the desc will be shortened if the condition is met

// MOON POP UP TEXT
const popUpText = document.querySelector('.moon-pop-up-text');

popUpText.classList.add('moon-pop-up-text--show'); // shows the animation when page is loaded

setTimeout(function() {
    popUpText.classList.remove('moon-pop-up-text--show'); // removes the notification after 5 seconds
}, 5000);