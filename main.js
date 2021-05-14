const qnas = document.querySelectorAll(".qna");

qnas.forEach((element) => {
  const qnaq = element.querySelector('.qna-q');
  const question = element.querySelector(".question");
  const arrow = element.querySelector(".arrow");
  const answer = element.querySelector(".answer");

  qnaq.addEventListener("click", function () {
    question.classList.toggle("questionFont");
    arrow.classList.toggle("arrowAngle");
    answer.classList.toggle("answerToggle");
  });
});


