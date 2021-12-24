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
})



function listar (dados){

    const li = document.createElement('li')
    li.classList.add('row')
    ul.appendChild(li)


    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    div1.classList.add('col')
    div2.classList.add('col')


    li.appendChild(div1)
    li.appendChild(div2)



    const id = document.createElement('p')
    div1.appendChild(id)
    id.innerText = dados.id

    const nome = document.createElement('p')
    div1.appendChild(nome)
    nome.innerText = dados.name 

    const tipo = document.createElement('p')
    div1.appendChild(tipo)
    tipo.innerText = dados.types[0].type.name

    const imagem = document.createElement('img')
    div2.appendChild(imagem)
    imagem.setAttribute('src', `${dados.sprites.front_default}`)
     
    
    
    
} 