const progress = document.querySelector('#progress');
const percent = document.querySelector('#percent');
const runButton = document.querySelector('#run');

let percentCount = 0;

function runProgress(){

    progress.style.width = 100 + '%';

    var myVar = setInterval(() => {

        percentCount++;

        percent.innerHTML = percentCount + '%';
        
        console.log(percentCount)

        if(percentCount === 100){

            clearInterval(myVar);

        }

    
    },20)

    runButton.removeEventListener('click', runProgress);

}


runButton.addEventListener('click', runProgress);