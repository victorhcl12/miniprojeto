const imagemPrincipal = document.getElementById('imagem-principal');
const miniaturas = document.querySelectorAll('.miniatura');
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

// Adiciona evento de clique às miniaturas
miniaturas.forEach((miniatura) => {
  miniatura.addEventListener('click', () => {
    imagemPrincipal.src = miniatura.getAttribute('src');
  });
});

// Funções para controle de slides
let slideIndex = 1; // Inicializa o slideIndex em 1

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  if (n === slides.length) { slideIndex = slides.length }

  // Add this check to ensure slideIndex is within bounds
  if (slideIndex < 1 || slideIndex > slides.length) {
    return; // or throw an error, depending on your requirements
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);




{
  function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option =>{
     if( !option.checked){
         option.disabled = true;
     }
    });  
 } 
 
 function playSound() {
     let clickSound = document.getElementById('selecionasom');
     clickSound.play();
 }
 
 function submitQuiz() {
     
     let correctAnswer = {
         q1:"B",
         q2:"C",
         q3:"A",
         q4:"B",
         q5:"B",
         q6:"C",
         q7:"D",
         q8:"B",
         q9:"A",
         q10:"C",

 
      
     };
   
     document.getElementById('submit-btn').disabled = true;
     document.getElementById('reset-btn').disabled = false;
 
     let form = document.getElementById('quiz-form');
     let score = 0;
 
     for( let key in correctAnswer){
         let userAnswer = form.elements[key].value;
         if (userAnswer === correctAnswer[key]) {
             score++;
         }
     }
     let result = document.getElementById('resultE');        
     result.innerHTML = ` Você acertou ${score} pergunta`
    
      if(score === 10){
         let sucessoSound = document.getElementById('venceusom');
         sucessoSound.play();
      }
      else{
        let erroSound = document.getElementById('errosom');
        erroSound.play();
      }
  
 }
 function resetQuiz() {
    document.getElementById("quiz-form").reset();
   

    let result = document.getElementById("resultE");
    result.innerHTML = "";
  
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('reset-btn').disabled = true;
}


 
}