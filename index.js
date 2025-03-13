// Write your code here!
const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
}

const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = 'Joseph Mburu is the champion';

document.body.appendChild(newHeader);