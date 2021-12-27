const input = document.querySelector('[data-input]');
const ul = document.querySelector('[data-ul]');

input.addEventListener('search', () =>{
   const valor = input.value 
   fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
   .then(resposta =>{
       return resposta.json()
   })
   .then(dados =>{
       
       listar(dados)
   })
   input.value = ""
})

function listar (dados){

    const li = document.createElement('li')
    li.classList.add('row', `${dados.types[0].type.name}`)
    
    ul.appendChild(li)

    
    
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    div1.classList.add('col')
    div2.classList.add('col')
    
    
    
    li.appendChild(div1)
    li.appendChild(div2)
    li.appendChild(BotaoDeleta())
    
    const id = document.createElement('p')
    id.setAttribute('class','h-auto d-inline-block fw-bold w-25 p-3 mt-1 fs-4 text-info')
    div1.appendChild(id)
    id.innerText = dados.id
    
    const nome = document.createElement('p')
    nome.setAttribute('class','d-inline fw-bold w-25 p-3 fs-4  text-info')
    
    div1.appendChild(nome)
    nome.innerText = dados.name 
    
    const tipo = document.createElement('p')
    tipo.setAttribute('class','d-inline fw-bold w-25 p-3 fs-4  text-info')
    div1.appendChild(tipo)
    tipo.innerText = dados.types[0].type.name
    
    const imagem = document.createElement('img')
    div2.appendChild(imagem)
    imagem.setAttribute('src', `${dados.sprites.front_default}`)
    
  
} 

const BotaoDeleta = function (){
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('col')
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.setAttribute('class', 'btn btn-danger');
    
    botaoDeleta.addEventListener('click', () =>{
        const paibtndeleta = botaoDeleta.parentElement;
        paibtndeleta.remove();
    })
    return botaoDeleta
}