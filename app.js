var list = document.getElementById("todo-list");


function addTask() {
    var task = document.getElementById("inp")
    
    var li = document.createElement('li')
    var liText = document.createTextNode(task.value)
    li.appendChild(liText)

    var delBtn  = document.createElement("button")
    var delText = document.createTextNode("Remove")
    delBtn.setAttribute("class","del")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn  = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","edit")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)
    
    task.value = ""


    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val     = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter edit value",val)

    e.parentNode.firstChild.nodeValue = editVal

}

function deleteAll() {
    list.innerHTML = ""
}