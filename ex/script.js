const Paragrafo1 = document.getElementById('Paragrafo1')
const Paragrafo2 = document.getElementsByClassName('Paragrafo2')[0]
const botao = document.querySelector('#botao')

botao.addEventListener('click', function () {
    Paragrafo1.textContent = 'A aula da Keliven é top risos'
    Paragrafo2.textContent = 'O bilhete é verdade'
})


const link = document.getElementById('link')
const imagem = document.getElementById('imagem')
const botaoImagem = document.getElementById('botaoImagem')



link.setAttribute('href', 'www.toddynhoéloucuragi.com.br')
link.textContent = 'Visitar o toddy'

link.style.color = 'red'

var imagemAtual = 1

botaoImagem.addEventListener('click', function(){
    if(imagemAtual === 1) {
        imagem.setAttribute('src', 'imagem2.jpg')
        imagemAtual = 2
    }else{
        imagem.setAttribute('src', 'imagem1.jpg')
        imagemAtual = 1
    }
})
