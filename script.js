// define UI var 
let inputItems = document.querySelector('#userDetails');
let submitBtn = document.querySelector('.submit_btn');
let showCase = document.querySelector('.collection');
let container = document.querySelector('.card');
let filterItem = document.querySelector('.clear_item');
let cleartask = document.querySelector(".clear_task");

// // load all event listerners
loadEventListeners();

// load all event listerners
function loadEventListeners() {
    // add Dom load event
    document.addEventListener('DOMContentLoaded', taskProjector);
    //add task event
    submitBtn.addEventListener('click', addTask);

    // remove task event
    showCase.addEventListener('click', removeTask);

    // clear_task event
    cleartask.addEventListener('click', taskClear);

    // filter task event
    filterItem.addEventListener('keyup', taskFilter);

}

// add task from LS
function taskProjector() {
    let item;
    if (localStorage.getItem('item') === null) {
        item = [];
    } else {
        item = JSON.parse(localStorage.getItem('item'));
    }

    item.forEach(function (work) {
        // create li element
        let li = document.createElement('li');

        // create a class
        li.className = 'collection-item';

        //create a text node and append to li
        li.appendChild(document.createTextNode('work'));

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


    });
}
//add task

function addTask(e) {
    e.preventDefault();
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

        // store in LS
        storeItemsInLocalStorage(inputItems.value);

        //clear input 
        inputItems.value = '';


    }
}

// store Task in LS
function storeItemsInLocalStorage(work) {
    let item;
    if (localStorage.getItem('work') === null) {
        item = [];
    } else {
        item = JSON.parse(localStorage.getItem(item));
    }
    item = item + " " + work;
    
    console.log(window.localStorage);

    localStorage.setItem('work', JSON.stringify('item'));
}

//romove task in UI 

function removeTask(e) {

    if (e.target.parentElement.className === 'delete-item') {
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}
// task clear in UI

function taskClear() {
    //   showCase.innerHTML === "";

    // faster way
    console.log(showCase.firstChild)
    while (showCase.firstChild) {
        showCase.removeChild(showCase.firstChild);
    }
}
// task to filter in UI
function taskFilter(e) {

    let text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (work) {
        let item = work.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            work.style.display = 'flex';
        } else {
            work.style.display = 'none';
        };

    });
}
