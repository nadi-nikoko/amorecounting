function increment(counterId) {
  let countEl = document.getElementById("count-el" + counterId);
  let count = parseInt(countEl.textContent) || 0;
  count += 1;
  countEl.textContent = count;
}

function save(counterId) {
  let countEl = document.getElementById("count-el" + counterId);
  let saveEl = document.getElementById("save-el" + counterId);
  let count = parseInt(countEl.textContent) || 0;

  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
}
