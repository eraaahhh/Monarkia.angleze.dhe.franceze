document.addEventListener("DOMContentLoaded", () => {
  const quizCards = document.querySelectorAll(".quiz-card");

  quizCards.forEach((card) => {
    const options = card.querySelectorAll(".option");
    const feedback = card.querySelector(".feedback");

    options.forEach((button) => {
      button.addEventListener("click", () => {
        const isCorrect = button.dataset.correct === "true";

        options.forEach((opt) => {
          opt.disabled = true;
          opt.classList.remove("correct", "wrong");
        });

        if (isCorrect) {
          button.classList.add("correct");
          feedback.textContent = "Saktë! Përgjigja është e saktë.";
          feedback.style.color = "#1f6b38";
        } else {
          button.classList.add("wrong");
          const correctButton = [...options].find((opt) => opt.dataset.correct === "true");
          if (correctButton) {
            correctButton.classList.add("correct");
          }
          feedback.textContent = "Gabim. Përgjigja e saktë është: " + correctButton.textContent;
          feedback.style.color = "#8b2f2b";
        }
      });
    });
  });
});

