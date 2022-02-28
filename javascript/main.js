var snackbarStack = document.querySelector('.snackbar-stack');

function createSnackbar(content) {
    var text = document.createElement('p');
    text.innerText = content;

    var snackbar = document.createElement('div');
    snackbar.className = 'snackbar snackbar--hidden';
    
    snackbar.appendChild(text);
    snackbarStack.prepend(snackbar);
    
    setTimeout(() => snackbar.classList.toggle('snackbar--hidden'), 10);
    setTimeout(() => snackbar.classList.toggle('snackbar--hidden'), 3000);
    setTimeout(() => snackbar.remove(), 4000);
}
