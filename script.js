document.querySelector('#check').addEventListener('click', function () {
  document.querySelector('#check').textContent = 'Lets begin ✔ ';
  document.querySelector('#form-fill').classList.remove('hidden');
});

// complete the dynamically built form
document.querySelector('#click').addEventListener('click', function () {
  const num = Number(document.querySelector('#Num').value);
  let playerNames = document.querySelector('#playerNames');
  playerNames.innerHTML = '';
  for (let i = 0; i < num; i++) {
    playerNames.innerHTML += `<br><input type = "text" placeholder="player Number ${
      i + 1
    }" name="form${i + 1}" id="form${i + 1}" /><br>`;
  }
});
