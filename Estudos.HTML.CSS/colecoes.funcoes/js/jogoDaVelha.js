let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

function iniciar(){
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1

    for(let i=0; i<3; i++){
        tabuleiro[1] = []
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0
        }
    }

    exibir()    
}

function exibir(){
    let tabela = '<table cellpadding="10" border = "1"'

    for(let i = 0; i < 3; i++){
        tabela +='<tr>'

        for(let j = 0; j < 3; j ++){

            switch(tabuleiro[i][j]){
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = '_'
            }
            tabela += '<td>' + marcador + '</td>'
            
        }
        
        tabela += '</tr>'       
    }

    tabela +='</table>'
    board.innerHTML = tabela

}

function jogar (){

    aviso.innerHTML='Vez do jogador: ' + numeroJogador()

    linha = document.getElementById('linha').value - 1
    coluna = parseInt(document.getElementById('coluna').value - 1)

    if(tabuleiro[linha][coluna] == 0) {
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1

    } else{
        aviso.innerHTML = 'Esse campo já foi marcado.'
    }

    jogador++
    exibir()
    checar()
}

function checar(){

    //Linhas
    for(let i = 0; i < 3; i++){
    let soma = 0
    soma = tabuleiro[1][0] + tabuleiro[1][1] + tabuleiro[1][2]
    
    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
    }
    }

    //Colunas
    for(let i = 0; i < 3; i++){
        let soma = 0
        soma = tabuleiro[0][1] + tabuleiro[1][1] + tabuleiro[2][1]
        
        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
        }

    //Diagonal
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]

    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
    }
   
}

function numeroJogador(){
    return jogador%2 + 1
}