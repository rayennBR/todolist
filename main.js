let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('toDo');
let input = document.getElementById('input');
let info = document.getElementById('add1');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})
info.addEventListener('click',function(){
alert("Hello! I am Info box ! you can delete with double click on the item selected");
})