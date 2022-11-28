const input = document.querySelector('.text-input')
const input1 = document.querySelector('.num-input')
const btn = document.querySelector('.add-btn')
const block = document.querySelector('.block')
const list= document.querySelector('.list')

btn.addEventListener('click',()=> {
    addNewWork()
})
input.addEventListener('keydown',(e)=> {
    if (e.key === 'Enter'){
        addNewWork()
    }
})

function  addNewWork(){
    if (input.value !== "") {

        const newList = `<li class="list-group-item d-flex
        justify-content-between align-items-center"><span
        class=" d-flex align-items-center ">
        <div class="block">${input.value[0].toUpperCase()} ${input.value[1].toLowerCase()} </div>
        <input type="checkbox"
        class="checkbox mx-1">${input.value} ${input1.value}</span><button
        class="del-btn btn btn-primary">delete</button></li>`

        list.innerHTML+= newList
    }
    list.innerHTML +=""
}
list.addEventListener('click',(e)=> {
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove("block")

    }

    if (e.target.classList.contains('checkbox')){
        e.target.parentNode.classList.toggle('line')
    }
})


// className = "circle" >${input_text.value[0].toUpperCase()} ${input_text.value[1].toLowerCase()} < /div>