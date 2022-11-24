const addStack = document.getElementById('push');
const removeStack = document.getElementById('pop');
const stack = document.querySelector('ol');
const text = document.getElementById('name');
const display = document.getElementById('display');

addStack.addEventListener('click', () => {
    if (text.value === "" || text.value === null) {
        alert("Hey you didn't name your plate :(");
        return;
    }
    let item = document.createElement('li');
    item.textContent = text.value;
    stack.appendChild(item);
    text.value = "";
});

removeStack.addEventListener('click', () => {
    display.textContent = `${stack.lastElementChild.textContent} was popped off the stack`;
    stack.removeChild(stack.lastElementChild);
});