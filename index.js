function increment(counterId) {
  let countEl = document.getElementById("count-el" + counterId);
  let count = parseInt(countEl.textContent) || 0;
  count += 1;
  countEl.textContent = count;
  updateSumSquare();
}

function save(counterId) {
  let countEl = document.getElementById("count-el" + counterId);
  let saveEl = document.getElementById("save-el" + counterId);
  let count = parseInt(countEl.textContent) || 0;

  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  updateSumSquare();
}
function updateSumSquare() {
  let count1 = parseInt(document.getElementById("count-el1").textContent) || 0;
  let count2 = parseInt(document.getElementById("count-el2").textContent) || 0;
  let count3 = parseInt(document.getElementById("count-el3").textContent) || 0;

  let sum = count1 - count2 - count3;
  let sumSquareContent = document.getElementById("sum-square-content");

  if (sum > 0) {
    sumSquareContent.textContent = "TE AMO AMORE KEEP BEEN POSITIVE";
  } else if (sum < 0) {
    sumSquareContent.textContent = "AMORE STOP COMPLAINING AND HURTING YOURSELF PLEASE. LOVE ME MORE.";
  } else {
    sumSquareContent.textContent = "ITS ALL BALANCED. PLEASE TELL ME TE AMO MORE";
  }
}
