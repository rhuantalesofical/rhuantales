var res = document.getElementById('resposta')
var sty = document.getElementById('style')
function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var num = document.getElementById('txt')
    var dado = num.value
    var erro = document.getElementById('erro');
    var genero = ''
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var p = document.getElementById('p')
    if(dado == '' || dado > ano){
        erro.innerHTML = '[ERRO]'
        p1.style.background = 'red'
        p2.style.background = 'red'
        p.style.background = 'red'
        document.body.style.background = 'rgb(122, 16, 16)'
    }else{
        var rsex = document.getElementsByName('rsex')
        var idade = ano - num.value
        if(rsex[0].checked){
            genero = 'homen '
        }if(rsex[1].checked ){
            genero = 'mulher '
        }if(idade >= 0 && idade <= 10) {
            genero = 'criança'
        }if(idade >= 10 && idade <= 18) {
            genero += '-adolecente'
        }if(idade >= 18 && idade <= 50) {
            genero += '-adulto(a)'
        }if(idade >= 50 && idade <= 80) {
            genero += '-idoso(a)'
        }if(idade > 100) {
            genero += '-- ja falecido!!!'
        }
        
    }
    res.innerHTML = `detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
}

function volta(){
    var voltar = document.getElementsByTagName('div')[1]
    p1.style.background = ''
    p2.style.background = ''
    p.style.background = ''
    document.body.style.background = ''
    erro.innerHTML = ''
    res.innerHTML = ''
}