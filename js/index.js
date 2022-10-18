
const questionList = document.querySelectorAll('.question');
console.log(questionList);

questionList.forEach(function(question){


    question.addEventListener('click', function(){

        //once ur in the question you find the answer which is the .question-answer class, then you toggle
        const answer = question.querySelector('.question-answer');
       
       
        questionList.forEach(function(item){
            if(item !== answer){
        item.querySelector('.question-answer').classList.remove("question-display");
        item.querySelector('h2').style.fontWeight=400;
        item.querySelector('.question-header').querySelector('svg').classList.remove('arrow');     
    }
  
        });

        answer.classList.toggle('question-display');
        question.querySelector('h2').style.fontWeight=700;
        question.querySelector('.question-header').querySelector('svg').classList.add('arrow');
    });

 

});

