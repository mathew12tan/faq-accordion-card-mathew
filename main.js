const qnas = document.querySelectorAll(".qna");

qnas.forEach((element) => {
  const question = element.querySelector(".question");
  const arrow = element.querySelector(".arrow");
  const answer = element.querySelector(".answer");

  element.addEventListener("click", function () {
    question.classList.toggle('questionFont');
    arrow.classList.toggle('arrowAngle');
    answer.classList.toggle('answerToggle');
  });
});

