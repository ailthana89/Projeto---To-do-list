
const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const input = document.querySelector('#todoInput').value
    const tarefa = document.createElement('li')
    const paragrafo = document.createElement('p')
    const span = document.createElement('span')

    const listaTarefa = document.querySelector('#todoLista') 
    const marcarBtn = document.querySelector('#todoMarcarTodos')   
    const removeBtn = document.querySelector('#todoRemoverTodos')   

   
    if (input.trim() === "") {
        alert("Digite sua mensagem")
        return false
      }

    paragrafo.innerText = input
    span.innerText = 'X'

    span.classList.add('btn-excluir')

    listaTarefa.appendChild(tarefa)
    tarefa.appendChild(paragrafo)
    tarefa.appendChild(span)

    span.addEventListener('click', function(){
        listaTarefa.removeChild(tarefa)
    })

    paragrafo.addEventListener('click', function(){
        paragrafo.classList.toggle('checked');  
    })

    marcarBtn.addEventListener('click', function(){
        listaTarefa.forEach(paragrafo.classList.toggle('checked'))
    })

    removeBtn.addEventListener('click', function(){
        tarefa.remove(paragrafo)
    })

    form.reset()
    
    //drag and drop
    tarefa.setAttribute('draggable', true)
    listaTarefa.addEventListener('dragstart', function(e){
        dragging = e.target.closest('li')
    listaTarefa.addEventListener('dragover', function(e){
            e.preventDefault()
            const node = e.target.closest('li')
            this.insertBefore(dragging, node)
        })
        listaTarefa.addEventListener('dragend', function(e){
        dragging = null
        })
    })
})







 

 























// const input = document.querySelector('#todoInput') 

// const btn = document.querySelector('#todoSubmit') //input botão

// const divTarefa = document.querySelector('#todoTarefas') //Div da lista


// function toDoList () {

//     if (input.value === '') {
//         alert("Digite sua mensagem")
//     }else {
//         const tarefa = document.createElement('li')
//         tarefa.innerText = input.value
//         listaTarefa.appendChild(tarefa)  
//     }
// }


// const i;

// for (i = 0; i < closebtn.length; i++) {
//     closebtn[i].addEventListener('click', function(){
//         this.parentElement.style.display = 'none';
// });

// const listaCheck = document.querySelector('.todo__tarefas-lista li .checked')

// .addEventListener('click', function(e){
//     if(e.target.tagName === 'tarefa') {
//         e.target.classList.toggle('checked')
//     }
// }, false);


// for (let i = 0; i < divTarefa.length; i++) {
//     const lista = () => {
//     divTarefas[i].style.display = 'none'
//     }
//     divTarefas[i].addEventListener('click', lista)
// }



