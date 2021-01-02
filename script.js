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
    // random player name
    const rand = Math.trunc(Math.random() * newArr.length);

    document.querySelector('#res').innerHTML =
      newArr[rand] + ' will give treat to all of you 😋';

    document.querySelector('#res').classList.remove('hidden');
  });
});

document.querySelector('.resetBtn').addEventListener('click', function () {
  document.querySelector('#form-fill').classList.add('hidden');
  document.querySelector('#check').innerHTML =
    ' Want to play a game ?<br /><br />Click me';
  document.querySelector('#Num').value = '';
  document.querySelector('#playerNames').classList.add('hidden');
  document.querySelector('#submitNames').classList.add('hidden');
  document.querySelector('#res').classList.add('hidden');
});
