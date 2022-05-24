let count = -1;

function note(value) {
    const className = 'selected';
    count = value;
    for (let note of document.querySelectorAll('button.notes')) {
        if (note.textContent === `${count}`) {
            note.classList.add(className);
        } else {
            note.classList.remove(className);
        }
    }
}

function submit() {
    if (count <= 0) {
        return;
    }
    document.querySelector('#begin').style.display = 'none';
    document.querySelector('#end').style.display = 'flex';
    document.querySelector('.rating').textContent = `You selected ${count} out of 5`;
}