const queue = [];

const list = document.getElementById("queue");

const addToQueue = document.getElementById("push");
const removeFromQueue = document.getElementById("shift");
const textArea = document.getElementById("name");
const display = document.getElementById('display');

addToQueue.addEventListener("click", () => {
    if (textArea.value === null || textArea.value === "") {
        alert("Hey you didn't name your person :(");
        return;
    }

    const item = document.createElement("li");

    const name = textArea.value;
    textArea.value = "";
    item.textContent = name;

    list.appendChild(item);
    queue.push(item);
    console.log("Queue Array:", queue);
});

removeFromQueue.addEventListener("click", () => {
    list.removeChild(list.firstElementChild);
    display.textContent = `It's is ${queue[0].textContent}'s turn`;
    queue.shift();
    console.log("Queue Array:", queue);
});





//Using an array with only the methods, push and shift,
//then I can treat that array as a Queue that accepts any element.
