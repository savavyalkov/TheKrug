let currentStep = 1;

function showStep(step) {
  document.querySelectorAll(".step").forEach((el) => {
    el.classList.remove("active");
  });

  document.querySelector(`.step-${step}`).classList.add("active");

  updateProgress(step);
}

function updateProgress(step) {
  document.querySelectorAll(".step-bar").forEach((bar, index) => {
    bar.classList.toggle("active", index < step);
  });
}

// STEP 1 -> 2
document.querySelector(".btn-next").addEventListener("click", () => {
  currentStep = 2;
  showStep(currentStep);
});

// STEP 2 -> 3
document.querySelector(".btn-dalee").addEventListener("click", () => {
  currentStep = 3;
  showStep(currentStep);
});

// BACK (если добавишь кнопку назад)
function prevStep() {
  currentStep--;
  showStep(currentStep);
}

function updateProgress(step) {
  const bars = document.querySelectorAll(".step-bar");

  bars.forEach((bar, index) => {
    if (index < step) {
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
    }
  });
}
