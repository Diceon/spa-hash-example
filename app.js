let appEl = document.querySelector("#app");

this.hashChanged = this.hashChanged.bind(this);

window.addEventListener('load', this.hashChanged);
window.addEventListener('hashchange', this.hashChanged);

function hashChanged() {
    let currentPath = window.location.hash.replace(/^\/?#?\/?/g, '');

    switch (currentPath) {
        case '':
            appEl.innerHTML = 'Home page';
            break;
        case 'about':
            appEl.innerHTML = 'About us page';
            break;
        case 'contacts':
            appEl.innerHTML = 'Contacts page';
            break;
        default:
            appEl.innerHTML = '404 - Page not found';
            break;
    }
}

