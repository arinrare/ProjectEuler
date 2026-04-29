
    

window.onload = (event) => {
    let sidebar = document.getElementById('sidebar')
    let x = 0;
    problems.forEach(() => {
        if(problems[x].completed) {
            let problemNum = problems[x].number;
            let problemTitle = problems[x].title;
            let problemQuestionRaw = problems[x].question;
            let problemQuestion = problemQuestionRaw.replace(/\\n/g, '\n');
            let elem = document.createElement('div');
            let numElem = document.getElementById('problemNumber');
            let titleElem = document.getElementById('problemTitle');
            let questionElem = document.getElementById('problemQuestion');
            let resultHeaderElem = document.getElementById('problemResultHeader');
            let problemAnswer = document.getElementById('problemAnswer');
            let runTimeElem = document.getElementById('runtime');
            let problemCode = document.getElementById('problemCode');

            elem.innerHTML = "<a href='#'><div id=" + 'problem' + problemNum + " data-problem=" + problemNum + " class='menuitem'>" + "Problem " + problemNum + "</div></a>";
            elem.addEventListener('click', (event) => {
                
                numElem.innerText = 'Problem ' + problemNum;
                titleElem.innerText = problemTitle;
                questionElem.innerHTML = problemQuestion;
                resultHeaderElem.innerText = 'Answer: ';
                if (problemFunctions['problem' + problemNum]) {
                    document.getElementById('loadingGif').style.display = 'block';
                    setTimeout(() => {
                        const timeStart = performance.now();
                        problemFunctions['problem' + problemNum](timeStart).then(function(answerRet) {
                            problemAnswer.innerText = answerRet.answer;
                            const runTime = answerRet.timeFinish - timeStart;
                            runTimeElem.innerText = 'Performance: ' + runTime + 'ms';
                            problemCode.innerText = problemFunctions['problem' + problemNum];
                            document.getElementById('loadingGif').style.display = 'none';
                        });
                    }, 50);
                    
                }
                else {
                    problemAnswer.innerText = '';
                    problemCode.innerText = '';
                }

            });
            sidebar.appendChild(elem);
            x++;
        }
    });

    document.getElementById('codeCopy').addEventListener('click', (event) => {
        let problemNum = document.getElementById('problemNumber').textContent;
        problemNum = problemNum.toLowerCase().replace(' ', '');
        const text = problemFunctions[problemNum];
        clipContent(text);
        
    });

    async function clipContent(text) {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(text);
                console.log('Content copied to clipboard');
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                console.log('Content copied to clipboard');
            }
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
}

