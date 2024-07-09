function burnName() {
    const nameInput = document.getElementById('nameInput');
    const burnedNameDiv = document.getElementById('burnedName');
    const burningSound = document.getElementById('burningSound');

    // Get the input name
    const name = nameInput.value;

    // Clear previous name
    burnedNameDiv.innerHTML = '';

    // Set the name to be burned
    burnedNameDiv.innerText = name;
    
    // Add the burning class for animation
    burnedNameDiv.classList.add('burn');
    
    // Play the burning sound
    burningSound.play();

    // Remove the name after animation
    setTimeout(() => {
        burnedNameDiv.innerHTML = '';
        burnedNameDiv.classList.remove('burn');
    }, 2000);
}
