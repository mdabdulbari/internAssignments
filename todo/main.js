// Importing jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let heading = "My first list";
let todos = ["Todo1", "Todo2", "Todo3"];
let completedItems = [];
const idsCreated = [];
let itemsActive = 3;
let itemsCompleted = 0;
let headingElement = document.getElementById("headingTag");
headingElement.textContent = heading;
const listElement = document.getElementById("todo-list");

// Creates a new random Id, pushes into created Ids.
const createId = () => {
    let randomInt = Math.floor(Math.random() * 100)
    while(idsCreated.includes(randomInt)){
        randomInt = Math.floor(Math.random() * 100)
    }
    idsCreated.push(randomInt.toString());
    return randomInt.toString();
}

const addNewItem = (element) => {
    const randomInt = createId();
    // Checkbox
    let checkBox = document.createElement('input');
    checkBox.type="checkbox";
    checkBox.setAttribute('id', "checkBox" + randomInt);
    listElement.appendChild(checkBox);

    // Add item from todos
    let newLi = document.createElement('li');
    newLi.setAttribute("id", "listItem" + randomInt);
    newLi.setAttribute("class", "listItem");
    newLi.textContent = element;
    listElement.appendChild(newLi);

    // Trashbin Icon
    let trashIcon = document.createElement('i');
    trashIcon.setAttribute('class', 'fa fa-trash');
    trashIcon.setAttribute('id', "trashIcon" + randomInt);
    listElement.appendChild(trashIcon);

    // Go to next line
    let lineBreak1 = document.createElement('br');
    let lineBreak2 = document.createElement('br');
    lineBreak1.setAttribute('id', 'lineBreak1' + randomInt);
    lineBreak2.setAttribute('id', 'lineBreak2' + randomInt);
    listElement.appendChild(lineBreak1);
    listElement.appendChild(lineBreak2);

    // Make elements listen
    let id = randomInt;
    const checkBoxId = "#checkBox" + id;
    $(checkBoxId).click(() => {
        itemsActive -= 1;
        itemsCompleted += 1;
        countTasks();
        let checkBoxElement = document.getElementById("checkBox" + id);
        checkBoxElement.setAttribute('disabled', 'disabled');
        let listItem  = document.getElementById("listItem" + id);
        listItem.setAttribute('style', "color: grey; text-decoration: line-through");
        completedItems.push(id);
    });

    const trashIconId = "#trashIcon" + id;
    $(trashIconId).click(() => {
        $("#checkBox" + id).remove();
        $(trashIconId).remove();
        $("#listItem" + id).remove();
        $("#lineBreak1" + id).remove();
        $("#lineBreak2" + id).remove();
        if(completedItems.includes(id)){
            itemsCompleted -= 1;
        } else {
            itemsActive -= 1;
        }
        countTasks();
    })

}

const countTasks = () => {
    const active = document.getElementById('active-count');
    const completed = document.getElementById('completed-count');
    active.textContent = itemsActive;
    completed.textContent = itemsCompleted;
}

const onLoad = () => {

    // For each element in todos list
    for(element of todos){
        addNewItem(element);
    }

    //Active count and completed count
    countTasks();
}
window.onload = onLoad;

$(".heading").click(() => {
    $("#headingTag").remove();
    let input = document.createElement('input');
    input.setAttribute('id', 'headingInput');
    input.value = heading;
    const headingDiv = document.getElementById('headingDiv');
    headingDiv.appendChild(input);
});

$("#add-button").click(() => {
    const mainInputValue = document.getElementById("main-input").value;
    todos.push(mainInputValue);
    addNewItem(mainInputValue);
    itemsActive += 1;
    countTasks();
})
