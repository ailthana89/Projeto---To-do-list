/*
  Exercício 2
  -----------
  Adicionar tarefas
  1. selecione o input e o botão da página.
  2. crie uma função "addTask" que adicione os valores inseridos no input dentro de uma div na página.
  3. adicione um observador de "click" no botão para executar a função addTask.
*/

//seu código vai aqui

const input = document.querySelector('#input')

const botao = document.querySelector('#add')

const listaTarefas = document.querySelector('#lista')

function addTarefa() {
    // listaTarefas.innerText = input.value (comando para exibir o valor do input)

    //criando um li para receber a tarefa do input
    const tarefa = document.createElement('li')
    //atribuindo ao innerText do li (tarefa) o valor do input
    tarefa.innerText = input.value
    //adiciona tarefa (li) dentro da lista de tarefas (ul)
    listaTarefas.appendChild(tarefa)

}

botao.addEventListener('click', addTarefa)

// botao.addEventListener('click', function() {
//     console.log('clique!')
//     console.log(input.value)

// })

