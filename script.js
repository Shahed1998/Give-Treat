document.querySelector('#check').addEventListener('click', function () {
  document.querySelector('#check').textContent = 'Lets begin ✔ ';
  document.querySelector('#form-fill').classList.remove('hidden');
});

document.querySelector('#click').addEventListener('click', function () {
  let playerNames = document.querySelector('#playerNames');
  const num = Number(document.querySelector('#Num').value);

  document.querySelector('#click').textContent = 'Clicked 🤩';
  document.querySelector('#playerNames').classList.remove('hidden');

  playerNames.innerHTML = '';
  for (let i = 0; i < num; i++) {
    playerNames.innerHTML += `<br><input type = "text" placeholder="player-${
      i + 1
    } name" name="form${i + 1}" id="form${i + 1}" class="form"/><br>`;
  }
  document.querySelector('#submitNames').classList.remove('hidden');

  document.querySelector('#sN').addEventListener('click', function () {
    const arr = [];
    for (let i = 0; i < num; i++) {
      const val =
        document.querySelector(`#form${i + 1}`)?.value ?? 'Wrong input';
      arr.push(val);
    }
    const unrepeatedValue = new Set(arr);
    const newArr = [...unrepeatedValue];
    console.log(newArr);
    // random player name
    const rand = Math.trunc(Math.random() * newArr.length);
    console.log(rand);

    document.querySelector('#res').innerHTML =
      'Among ' +
      newArr +
      '<br>' +
      newArr[rand] +
      ' will give treat to all of you';

    document.querySelector('#res').classList.remove('hidden');
  });
});
