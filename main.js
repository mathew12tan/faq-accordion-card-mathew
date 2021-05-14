document.querySelector(".questionInitial").classList.toggle("questionFont");
document.querySelector(".arrowInitial").classList.toggle("arrowAngle");
document.querySelector(".answerInitial").classList.toggle("answerToggle");

const qnas = document.querySelectorAll(".qna");

qnas.forEach((element) => {
  const qnaButton = element.querySelector(".qnaButton");
  const question = element.querySelector(".question");
  const arrow = element.querySelector(".arrow");
  const answer = element.querySelector(".answer");

  qnaButton.addEventListener("click", function () {
    question.classList.toggle("questionFont");
    arrow.classList.toggle("arrowAngle");
    answer.classList.toggle("answerToggle");
  });
});
