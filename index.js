
let scoreHome = 0
let scoreAway = 0

let homeScoreBtnOne = document.getElementById("home1")
let homeScoreBtnTwo = document.getElementById("home2")
let homeScoreBtnThree = document.getElementById("home3")

let homeScoreEl = document.getElementById("home_score")
let awayScoreEl = document.getElementById("away_score")


function add1home()
{
    scoreHome+=1;
    homeScoreEl.textContent = scoreHome
}

function add2home()
{
    scoreHome+=2;
    homeScoreEl.textContent = scoreHome
}

function add3home()
{
    scoreHome+=3;
    homeScoreEl.textContent = scoreHome
}

function add1away()
{
    scoreAway+=1;
    awayScoreEl.textContent = scoreAway
}

function add2away()
{
    scoreAway+=2;
    awayScoreEl.textContent = scoreAway
}

function add3away()
{
    scoreAway+=3;
    awayScoreEl.textContent = scoreAway
}