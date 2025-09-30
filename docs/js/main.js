// main.js — loads data from localStorage or data.json and renders the site


function saveData(d){
localStorage.setItem('portfolio_data', JSON.stringify(d));
}


function render() {
const data = loadData();
document.getElementById('footer-year').innerText = new Date().getFullYear();


document.getElementById('profile-photo').src = data.profile.photo;
document.getElementById('hero-name').innerText = data.profile.name;
document.getElementById('hero-title').innerText = data.profile.title;
document.getElementById('hero-tag').innerText = data.profile.tag;
document.getElementById('about-text').innerText = data.about;


// contact icons
const icons = document.getElementById('contact-icons');
const contactList = document.getElementById('contact-list');
icons.innerHTML = '';
contactList.innerHTML = '';
data.profile.contacts.forEach(c => {
const a = document.createElement('a');
a.href = c.href;
a.target = '_blank';
a.rel = 'noopener noreferrer';
a.className = 'flex items-center gap-2 text-slate-700';
a.innerHTML = iconSvg(c.type) + `<span class="sr-only">${c.label}</span>`;
icons.appendChild(a);


const div = document.createElement('div');
div.className = 'flex items-center gap-3';
div.innerHTML = iconSvg(c.type) + `<a href="${c.href}" class="hover:underline">${c.label}</a>`;
contactList.appendChild(div);
});


// projects
const grid = document.getElementById('projects-grid');
grid.innerHTML = '';
data.projects.forEach(p => {
const card = document.createElement('a');
card.href = p.path || '#';
card.className = 'block bg-white p-4 rounded-lg shadow hover:shadow-md';
card.innerHTML = `<h4 class="font-semibold">${p.title}</h4><p class="text-sm text-slate-500 mt-1">${p.short || ''}</p>`;
grid.appendChild(card);
});
}


function iconSvg(type){
switch(type){
case 'github': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.3 9.2 7.9 10.7.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.4 1.6.4 1.6.9 1.6 2.5 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.6 0-1.2.4-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3.3 1.2.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.4-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.1 2 1.1 3.2 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1 .8 2v3c0 .3.2.6.8.5 4.6-1.5 7.9-5.7 7.9-10.7C23.3 5.5 18.3.5 12 .5z" fill="currentColor"/></svg>`;
case 'linkedin': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.24 8.5h4.48V24H.24zM8.98 8.5h4.3v2.06h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.36 2.98 5.36 6.86V24h-4.48v-7.3c0-1.74-.03-3.99-2.43-3.99-2.43 0-2.8 1.9-2.8 3.86V24H8.98z" fill="currentColor"/></svg>`;
case 'mail': return `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.2l-10 6-10-6V6zM2 8.8V18a2 2 0 002 2h16a2 2 0 002-2V8.8l-9.29 5.58a2 2 0 01-1.42 0L2 8.8z" fill="currentColor"/></svg>`;
case 'phone': return `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.8c1.8 3.6 4.8 6.6 8.4 8.4l2-2a1 1 0 01.9-.27c1 .3 2.1.4 3.2.4a1 1 0 011 1v3a1 1 0 01-.9 1C12.9 22 2 11.1 2 3.3A1 1 0 013 2.4h3a1 1 0 011 1c0 1.1.1 2.2.4 3.2a1 1 0 01-.3.9l-2 2z" fill="currentColor"/></svg>`;
default: return `<svg width="24" height="24"></svg>`;
}
}


// initial render
render();


// if user is in admin mode, admin.js will provide edit UI (admin.js loaded after)