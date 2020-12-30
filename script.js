document.querySelector('#check').addEventListener('click', function () {
  document.querySelector('#check').textContent = 'Lets begin ✔ ';
  document.querySelector('#form-fill').classList.remove('hidden');
});

// complete the dynamically built form
document.querySelector('#click').addEventListener('click', function () {
  const num = Number(document.querySelector('#Num').value);
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  document.querySelector('#playerNames').textContent = arr;
});
