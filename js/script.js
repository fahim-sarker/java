let input =document.querySelector(".input")
let add =document.querySelector(".add")
let list =document.querySelector(".list")
let update =document.querySelector(".update")
let data = [];
let id;


add.addEventListener("click",()=>{
    data.push(input.value)
    addtodo()
    input.value =""
})
update.addEventListener("click",()=>{
    data[id] = input.value
    addtodo()
    input.value =""
})



function addtodo(){
    list.innerHTML = ""
    data.map((item)=>{
        list.innerHTML += `<li>${item}<button class="delete">delete</button>
        <button class="edit">edit</button></li>`
    })
    let deletesingle = document.querySelectorAll(".delete")
    let deleteArr = Array.from(deletesingle)

    deleteArr.map((itemd, index)=>{
        itemd.addEventListener("click",()=>{
            data.splice(index, 1)
            addtodo()
        })
    })
    let edit = document.querySelectorAll(".edit")
    let editArr = Array.from (edit)

    editArr.map((iteme, index)=>{
        iteme.addEventListener("click",()=>{
            input.value = data[index]
            id = index
            addtodo()
        })
    })

}
