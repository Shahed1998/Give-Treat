let game = true;
let num = 0;
const check = document.querySelector('#check');
const formFill = document.querySelector('#form-fill');
const clickBtn = document.querySelector('#click');
const plrNames = document.querySelector('#playerNames');
const submitNames = document.querySelector('#submitNames');
const sN = document.querySelector('#sN');
const result = document.querySelector('#res');
const number = document.querySelector('#Num');

// -------------------------------------Question Section---------------------------------------------------
check.addEventListener('click', function () {
  check.textContent = 'Lets begin ✔ ';
  formFill.classList.remove('hidden');
});

// -------------------------------------Form-fill Section---------------------------------------------------
clickBtn.addEventListener('click', function () {
  let playerNames = plrNames;
  num = Number(number.value);

  clickBtn.textContent = 'Clicked 🤩';
  plrNames.classList.remove('hidden');

  playerNames.innerHTML = '';
  for (let i = 0; i < num; i++) {
    playerNames.innerHTML += `<br><input type = "text" placeholder="player-${
      i + 1
    } name" name="form${i + 1}" id="form${i + 1}" class="form"/><br>`;
  }
  submitNames.classList.remove('hidden');
  // -------------------------------------Submit-names Section---------------------------------------------------
  sN.addEventListener('click', function () {
    if (game) {
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
      console.log(newArr);
      result.innerHTML = 'Among'+newArr+'<br/><br/>'+newArr[rand] + ' will give treat to all of you 😋';

      result.classList.remove('hidden');
      game = false;
    }
  });
});

// -------------------------------------Reset Section---------------------------------------------------
document.querySelector('.resetBtn').addEventListener('click', function () {
  formFill.classList.add('hidden');
  check.innerHTML = ' Want to play a game ?<br /><br />Click me';
  number.value = '';
  plrNames.classList.add('hidden');
  submitNames.classList.add('hidden');
  result.classList.add('hidden');
  clickBtn.innerHTML = `<a href="#playerNames" class="ancClick">Click me</a>`;
  game = true;
  num = 0;
});
