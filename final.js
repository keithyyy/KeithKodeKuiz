const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerHTML = mostRecentScore;

const max_score_listed = 10;

username.addEventListener('keyup', () => {

    saveHighScore = e => {
        e.preventDefault();

        const score = {
            score: mostRecentScore,
            name: username.value,
        }  

        highScores.push(score);
        console.log(highScores)


        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign("index.html");
    }
})