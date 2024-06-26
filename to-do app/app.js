let user_input = document.querySelector("#user_input");
let add = [];
let user_text = document.querySelector("#user_text")

function to_do_app() {
    if(user_input.value.trim()===""){
        alert("Please fill the input")
    }
   
    else{
        add.push(user_input.value);
        user_input.value = '';
        add_to_do();
    }
}


function add_to_do() {
    user_text.innerHTML = ''; 

    for (let i=1; i<add.length; i++) {
        user_text.innerHTML += `
            <div class="main">
                <h3><span>${i}</span> : ${add[i]}</h3>
                <button onclick="edit_todo_app(${i})">Edit</button>
                <button onclick="delete_todo_app(${i})">Delete</button>
            </div>`;
    }
}

function delete_todo_app(input) {
    add.splice(input, 1);
    add_to_do()
}


function edit_todo_app(input){
    let user_prompt = prompt("Enter a name do you want change").toLocaleLowerCase();
    add.splice(input, 1, user_prompt);
    add_to_do()
}
