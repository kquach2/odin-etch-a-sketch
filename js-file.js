const container = document.querySelector('div');
container.style.width = '800px';
container.style.height = '800px';
for (let i = 0; i<16; i++) {
    const newContainer = document.createElement('div');
    for (let i = 0; i<16; i++) {
        const newDiv = document.createElement('div');
        newContainer.appendChild(newDiv);
        newDiv.style.width = '50px';
        newDiv.style.height = '50px';
    }
    container.appendChild(newContainer);
}