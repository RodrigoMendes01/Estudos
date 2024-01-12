const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const phoneInput = document.querySelector('#phone')
const addBtn = document.querySelectorAll(".btn-add")
const progressBar = document.querySelector('.progressbar')


let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

addBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const newStage = document.createElement('div')
    newStage.classList = 'progress-step'

    progressBar.appendChild(newStage)

    updateProgressbar
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 99 + "%";
}

phoneInput.addEventListener('input', formatPhoneNumber)


function formatPhoneNumber() {
  let onlyNumbers = phoneInput.value.replace(/\D/g, '');
  
  onlyNumbers = onlyNumbers.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  
  phoneInput.value = onlyNumbers;
}
