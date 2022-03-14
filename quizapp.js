var fetchData=$.getJSON('./quizapp.json',function(data){
    return data
})
var afterThen;
fetchData.then((response)=>{
    console.log(response);
    afterThen = response
});

var quiz =  [
    {
      question: "Which was not one of the voldemort's Horcruxes?",
      options: ["Harry", "Nagini", "Helga's diedem", "Tom Riddle's Diary"],
      answer: "c",
      name: "Horcruxes"
    },
    {
      question: "Which of these are not one of Hargit's many pets?",
      options: ["Grawp", "Fluffy", "Aragog", "Noberta"],
      answer: "a",
      name: "pets"
    },
    {
      question: "Which class did serverus snape always wanted to teach?",
      options: [
        "Potions",
        "Charms",
        "Defence against dark arts",
        "Transfiguration"
      ],
      answer: "c",
      name: "Serverus's class"
    },
    {
      question: "Which Hogwarts house did Moaning Myrtle belong in ?",
      options: ["Gryffinder", "Slytherin", "Ravenclaw", "Hufflepuff"],
      answer: "c",
      name: "house"
    },
    {
      question: "What class did Neville end up teaching at Hogwarts",
      options: ["Astronomy", "Herbology", "Charms", "Muggle studies"],
      answer: "b",
      name: "Neville's class"
    }
];

var form = document.getElementById('form-quiz');
var mainQuestionDiv = document.getElementById('main-questions-div')
function createQuestion(data){
    var questionDiv = document.createElement('div');
    var question = document.createElement('div');
    questionDiv.className = "question";
    var questionHeading = document.createElement('h4');
    questionHeading.innerText=data.question;
    question.appendChild(questionHeading);
    questionDiv.appendChild(question);
    var options = document.createElement('div');
    options.className ='options';
    var optionVal= ['a','b','c','d'];
    for(var i=0;i<data.options.length;i++){
        var input= document.createElement('input');
        input.type = 'radio';
        var id = data.name +optionVal[i]
        input.id = id;
        input.value = optionVal[i];
        input.name = data.name
        input.className = data.name
        var label = document.createElement('label')
        label.htmlFor = id
        label.innerHTML = data.options[i]
        var newLine = document.createElement('br');
        options.appendChild(input)
        options.appendChild(label)
        options.appendChild(newLine)
    }
    questionDiv.appendChild(options)
    mainQuestionDiv.appendChild(questionDiv)
}
for(var i=0;i<quiz.length;i++){
    createQuestion(quiz[i])
}
function score(){
   
    var selectedArray =[];
    var dummy = document.getElementsByClassName('options');
    var answerArray = [];
    for(var i=0; i<dummy.length;i++){
        var check =false;
        var name = document.getElementsByClassName(quiz[i].name)
        answerArray[i] = quiz[i].answer
        for(var j=0; j<name.length;j++){
            if(name[j].checked==true){
                selectedArray[i]=name[j].value
            } 
        }  
    }
    var result = calculateScore(answerArray,selectedArray)
    console.log(result);
    var scoreDiv = document.getElementById('score-value')
    scoreDiv.innerHTML = result+'/5'; 
}

function calculateScore(array1, array2){
    var score =0;
    for(var i=0;i<array1.length;i++){
    if(array1[i]==array2[i]){
        score++
    }
    }
    return score
}
var submit= document.getElementById('submit-btn')
submit.addEventListener('click', function(e){
    e.preventDefault();
    score();
})



