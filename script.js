let guess = prompt("What do you want to do");

const todos = ["go to bed", "do your job"];

while (guess !== "quit" && guess!== "q" ) {
    if (guess === "list") {

        console.log("*********************");
        for (let i=0; i<todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        } 
        console.log("*********************");
         
        } else if (guess === "new") {
            const newTodo = prompt ("Ok! what is the new todo");
            todos.push(newTodo);
            console.log(`${newTodo} added to the list`);
    
        } else if (guess === "delete") {
            const deleteIndex = prompt ("Enter the index number of the item to be deleted");
            const deleted = todos[deleteIndex];
            todos.splice(deleteIndex, 1);
            console.log(`${deleted} has been deleted`);

        }

    guess = prompt ("What do you want to do");
}

console.log("QUITTED THE APP");

