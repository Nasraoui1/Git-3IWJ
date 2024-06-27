document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const changeTextButton = document.getElementById('changeTextButton');

    changeTextButton.addEventListener('click', function() {
        greetingElement.textContent = 'You clicked the button!';
    });
});
