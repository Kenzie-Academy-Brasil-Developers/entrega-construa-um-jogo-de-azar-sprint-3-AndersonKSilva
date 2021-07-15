const rockUser = document.querySelector('.rock_user')
const paperUser = document.querySelector('.paper_user')
const scissorUser = document.querySelector('.scissor_user')
const result = document.querySelector('.final')
const rockComputer = document.querySelector('.rock_computer')
const paperComputer= document.querySelector('.paper_computer')
const scissorComputer = document.querySelector('.scissor_computer')
const ptsUser = document.querySelector('.pts_user')
const ptsComputer = document.querySelector('.pts_computer')

rockUser.addEventListener('click', function(){
    rand = randonnum()
    val = 0;
    rockUser.style.opacity = 100+'%'
    paperUser.style.opacity = 50+'%'
    scissorUser.style.opacity = 50+'%'
    compare(val, rand)
    console.log(val)
    console.log(rand)
});
paperUser.addEventListener('click', function(){
    rand = randonnum()
    val = 1;
    rockUser.style.opacity = 50+'%'
    paperUser.style.opacity = 100+'%'
    scissorUser.style.opacity = 50+'%'
    compare(val, rand)
    console.log(val)
    console.log(rand)
});
scissorUser.addEventListener('click', function(){
    val = 2;
    rand = randonnum()
    rockUser.style.opacity = 50+'%'
    paperUser.style.opacity = 50+'%'
    scissorUser.style.opacity = 100+'%'
    compare(val, rand)
    console.log(val)
    console.log(rand)
});

function randonnum(num){
    randoms = Math.floor(Math.random()*3);
    if(randoms===0){
        rockComputer.style.opacity = 100+'%'
        paperComputer.style.opacity = 50+'%'
        scissorComputer.style.opacity = 50+'%'
    }else if(randoms===1){
        rockComputer.style.opacity = 50+'%'
        paperComputer.style.opacity = 100+'%'
        scissorComputer.style.opacity = 50+'%'
    }else if(randoms===2){
        rockComputer.style.opacity = 50+'%'
        paperComputer.style.opacity = 50+'%'
        scissorComputer.style.opacity = 100+'%'
    }

    return randoms

}
let ptssUser = 0;
let ptssComputer = 0;
function compare(user, computer){
    if(user === computer){
        console.log('Draw')
        result.innerText = 'Empate';
    }else if(user ===1){
        if(computer === 0){
            result.innerText = 'Ganhou'
            ptssUser++;
            ptsUser.innerText = ptssUser
        }
        else{
            result.innerText = "Perdeu"
            ptssComputer++;
            ptsComputer.innerText = ptssComputer
        }
    }else if(user === 2){
        if(computer === 0){
            result.innerText = "Perdeu"
            ptssComputer++;
            ptsComputer.innerText = ptssComputer
        }
        else{
            result.innerText = 'Ganhou'
            ptssUser++;
            ptsUser.innerText = ptssUser
        }
    }
    else if(user === 0){
        if(computer === 1){
            result.innerText = 'Perdeu'
            ptssComputer++;
            ptsComputer.innerText = ptssComputer
        }
        else{
            result.innerText = "Ganhou"
            ptssUser++;
            ptsUser.innerText = ptssUser
        }
    }
}