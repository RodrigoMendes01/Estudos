const stageOne = document.querySelector('#stageOne')
const stageTwo = document.querySelector('#stageTwo')
const stageThree = document.querySelector('#stageThree')

function modifyProgressBar (event) {
  event.preventDefault()
  const progressBarValue = getComputedStyle(document.documentElement).getPropertyValue('--progress')

  if(event.target.textContent === '1/3') {
    document.documentElement.style.setProperty('--progress', '30')
  } else if (event.target.textContent === '2/3') {
    document.documentElement.style.setProperty('--progress', '70')
  } else {
    document.documentElement.style.setProperty('--progress', '100')
  }
}

stageOne.addEventListener('click', modifyProgressBar)
stageTwo.addEventListener('click', modifyProgressBar)
stageThree.addEventListener('click', modifyProgressBar)
