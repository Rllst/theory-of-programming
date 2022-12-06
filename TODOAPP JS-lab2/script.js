const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

itemCountSpan.innerHTML = 0;
uncheckedCountSpan.innerHTML = 0;

let tasks = [];

function resetTasks ()
{
  console.log("rendering tasks");
  list.innerHTML = tasks.map((el, index) => "<li id='"+ index + "' class='todo-li "+ (el.checked!=true ? 'added' : 'ready') +"'>"+el.task+"<input id='check"+index+"' type='checkbox' onchange='changeStatus(this.id)' "+(el.checked == true ? 'checked' : '')+"><button id='update"+index+"' onClick='updateIt(this.id)' class='update-btn'></button><button id='button"+index+"' onClick='removeIt(this.id)' class='delete-btn'></button></li>").join("");
  itemCountSpan.textContent = tasks.length;

  resetUcheckedCount();
}

function resetUcheckedCount (){
  var uncheckedCount = 0;
  for(var i=1; i<=tasks.length; i++){
    if(tasks[i-1].checked == true){uncheckedCount++};
  }
  uncheckedCountSpan.textContent = uncheckedCount;
}

function newTodo() {

  let task = prompt("What you want to do?)", "Procrastinating");
  if (task == null ||task == ""){
    alert("Tast cannot be empty");
    console.log("Task wasn`t added");
  }
  else{

    if(tasks.length == 0) {let removeDiv = document.getElementById("remove-all-div"); removeDiv.innerHTML = "<button class='button-remove-all button center' onClick='removeAll()'>Remove all</button>";}

    tasks.push({'id': parseInt(itemCountSpan.textContent), 'task':task,'checked':'false'});

    console.log(task + " -- was added as -- " + itemCountSpan.textContent + "-- element");


    unC = document.getElementsByClassName("item-count-span");
    unC[0].classList.toggle('unchecked-count-ready');
  
    setTimeout(() => { unC[0].classList.remove('unchecked-count-ready'); }, 500);

    resetTasks();
  }
  
  
}

function changeStatus(id){

    tasks[id.replace('check', "")].checked = document.getElementById(id).checked;

    console.log(tasks[id.replace('check', "")]);

    if(document.getElementById(id).checked){
        let li = document.getElementById(id.replace('check', ""));

        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.textContent) +1;
        
        li.classList.remove('added');
        li.classList.toggle('ready');
        
        unC = document.getElementsByClassName("unchecked-count");
        unC[0].classList.toggle('unchecked-count-ready');

        setTimeout(() => { unC[0].classList.remove('unchecked-count-ready'); }, 500);
    }
    else{
        let li = document.getElementById(id.replace('check', ""));

        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.textContent) -1;

        li.classList.remove('ready');
        li.classList.toggle('added');

        unC = document.getElementsByClassName("unchecked-count");
        unC[0].classList.toggle('unchecked-count-red');

        setTimeout(() => { unC[0].classList.remove('unchecked-count-red'); }, 500);
    }
    ;
    
}

function removeIt(id)
{
    id = id.replace('button', "");

    console.log(JSON.stringify(tasks[id]) + " -- has been removed");

    tasks.splice(id, 1);

    unC = document.getElementsByClassName("item-count-span");
    unC[0].classList.toggle('unchecked-count-red');

    setTimeout(() => { unC[0].classList.remove('unchecked-count-red'); }, 500);

    resetTasks();

    if(tasks.length == 0) {let removeDiv = document.getElementById("remove-all-div"); removeDiv.innerHTML = "";}

}

function removeAll()
{
  tasks = [];

  unC = document.getElementsByClassName("item-count-span");
  unC[0].classList.toggle('unchecked-count-red');

  setTimeout(() => { unC[0].classList.remove('unchecked-count-red'); }, 500);

  resetTasks();

  let removeDiv = document.getElementById("remove-all-div"); removeDiv.innerHTML = "";
}

function updateIt(id)
{
  id = id.replace('update', "");

  console.log(JSON.stringify(tasks[id]) + " -- has been removed");

  let task = prompt("Input new task", tasks[id].task);

  if (task == null ||task == ""){
    console.log("Task wasn`t added");
  }
  else{
    console.log(id);
    tasks[id].task = task;
  }

  resetTasks();
}