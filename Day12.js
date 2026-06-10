
// console.log(document);
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

// document.title='My website';
// console.log(document.title);

// document.body.style.backgroundColor='red';

const userName='Animesh.Pyakurel';
const pageContent=document.getElementById('page-content');
const welcomeMsg=document.getElementById('welcome-msg');

welcomeMsg.textContent += userName===''? 'Guest:':userName;





