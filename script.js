const container = document.querySelector(".container");
const text_input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function(){
    let text = text_input.value;
    if(text == ""){
        return;
    }
    let todo_element = document.createElement("div");
    let todo_text = document.createElement("p");
    let todo_button = document.createElement("button");
    let text_node = document.createTextNode(text);
    let icon_node = document.createTextNode("\u2718");

    todo_button.addEventListener('click', function(){
        todo_element.remove();
    })

    todo_text.appendChild(text_node);
    todo_button.appendChild(icon_node);
    todo_element.appendChild(todo_text);
    todo_element.appendChild(todo_button);
    todo_element.classList.add("todo_element");
    container.appendChild(todo_element);
    text_input.value = "";
})
