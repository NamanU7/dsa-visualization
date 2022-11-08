const queue = [];

const list = document.body.querySelectro("ol");

const addToQueue = document.getElementById("push");
const removeFromQueue = document.getElementById("shift");

addToQueue.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "This is a new person in the queue";
    list.appendChild(item);
    queue.push(item);
})

removeFromQueue.addEventListener("click", () => {
    list.removeChild(queue.shift());
})

console.log("hi");

//Using an arraym with only the methods, push and shift,
//then I can treat that array as a Queue that accepts any element.
