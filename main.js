
//////////////////////////  MENU  ////////////////////////////////////////////////////////////////////////////////

const authorSearch = document.getElementById('authorSearch');
authorSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let authors = document.querySelectorAll('h5');
    authors.forEach(author => {
        if (author.textContent.toLowerCase().includes(currentValue)) {
            author.parentNode.parentNode.style.display = 'flex';
        } else {
            author.parentNode.parentNode.style.display = 'none';
        }
    })
});

