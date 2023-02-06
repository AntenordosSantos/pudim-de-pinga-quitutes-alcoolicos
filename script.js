//validar idade
var  n1 = Number(window.prompt('Em que ano você nasceu?'));
let data = new Date()
let ano = data.getFullYear()
var  idade = ano - n1;
var maior = idade >= 18 ? ' e você é maior de idade!' : ' anos e você não tem idade para isso!';
window.alert(`Você tem ` + idade + maior);

//abrir imagem e texto 
let img = document.createElement('img')
img.setAttribute('id', 'foto')
function pudim() {
    img.setAttribute('src', 'pd.pq.png')
    peq.innerHTML = `Pensado em quem ama a verdadeira <strong>Cachaça brasileira</strong>.
    Não vai ao forno mantendo o teor e o sabor daquela purinha que só quem gosta sabe do seu valor!`
    peq.appendChild(img)
    peg.innerHTML = "Saiba mais..."
    cors.innerHTML = "Saiba mais..."
}
function familia() {
    img.setAttribute('src', 'pudim.grande.jpg')
    peg.innerHTML = `Acreditando em momentos de descontração com amigos temos o <strong>Pudim de Pinga Tamanho Família!</strong>`
    peg.appendChild(img)
    peq.innerHTML = "Saiba mais..."
    cors.innerHTML = "Saiba mais..."
}
function corsario() {
    img.setAttribute('src', 'pudim.corsario.png')
    cors.innerHTML = `<strong>Mousse de Chocolate ao Rum</strong> uma receita que vai conquistar seu paladar e alegrar seu dia!`
    cors.appendChild(img)
    peq.innerHTML = "Saiba mais..."
    peg.innerHTML = "Saiba mais..."
}

/*  abrir imagem e texto entrando na area

let p = document.getElementById('peq')
p.addEventListener('mouseenter', entrar)

function entrar() {
    img.setAttribute('src', 'pudim.peq.jpg')
    peq.innerText = `Pensado em quem ama a verdadeira <strong>Cachaça brasileira</strong>.<br>
   Não vai ao forno mantendo o teor e o sabor daquela purinha que só quem gosta sabe do seu valor!`
   peq.appendChild(img)
} */