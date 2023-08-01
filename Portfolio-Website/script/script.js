// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

let routes = {};
let templates = {};
let app_div = document.getElementById('app');

function EN() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/en';
    link.innerText = 'EN';

    div.innerHTML = 'EN';
    div.appendChild(link);

    app_div.appendChild(div);
};
function TR() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'EN';

    div.innerHTML = 'TR';
    div.appendChild(link);

    app_div.appendChild(div);
};
function route(path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    };
};
function template(name, templateFunction) {
    return templates[name] = templateFunction;
    template('EN', function () {
        EN();
    });

    template('TR', function () {
        TR();
    });
    route('/', 'EN');
    route('/TR', 'TR');
};
function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);