const queue = [];

const list = document.getElementById("queue");

const addToQueue = document.getElementById("push");
const removeFromQueue = document.getElementById("shift");

addToQueue.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "This is a new person in the queue at position: " + (list.childElementCount + 1);
    list.appendChild(item);
    queue.push(item);
    console.log("Queue Array:", queue);
})

removeFromQueue.addEventListener("click", () => {
    list.removeChild(list.firstElementChild);
    queue.shift();
    console.log("Queue Array:", queue);
})



//Using an array with only the methods, push and shift,
//then I can treat that array as a Queue that accepts any element.
