// define UI var 
let inputItems = document.querySelector('#userDetails');
let submitBtn = document.querySelector('.submit btn');
let showCase = document.querySelector('.collection');
let container = document.querySelector('.card');
let filterItem = document.querySelector('.clear item');
let cleartask = document.querySelector(".clear task");

// // load all event listerners
loadEventListeners();

// load all event listerners
function loadEventListeners() {

    //add task event   
    container.addEventListener('submit', addTask);

    // remove task event
    showCase.addEventListener('click', removeTask);

    // clear task event
    cleartask.addEventListener('click', taskClear);
}
//add task

function addTask(e) {

    if (inputItems.value === "") {
        alert('enter details first');

    }
    else {
        alert('submitted')

        // create li element
        let li = document.createElement('li');

        //
        // create a class
        li.className = 'collection-item';

        //create a text node and append to li

        li.appendChild(document.createTextNode(inputItems.value));

        // create new link element
        let link = document.createElement('a');

        //add class 
        link.className = 'delete-item';

        //add icon in html
        link.innerHTML = '<i class=" fa fa-remove"></i>'

        //append link to li 

        li.appendChild(link);

        // apend the li to ul

        showCase.appendChild(li);

        //clear input 
        inputItems.value = '';

        e.preventDefault();
    }
}
//romove task

function removeTask(e) {
    if (e.target.parentElement.className === 'delete-item' ) 
        {
        if (confirm('Are you sure ?')) { 
            e.target.parentElement.parentElement.remove();
        }
    }
}
// task clear 

function taskClear(){
    showCase.innerHTML ==="";
    console.log('showCase');
}
