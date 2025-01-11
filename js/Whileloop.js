let i = 0;
while (i <= 100) {
    console.log(i);
    i += 1;
}
function changeBackgroundColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}


const radius = 10;

for (let y = -radius; y <= radius; y++) {
  let row = '';

  for (let x = -radius; x <= radius; x++) {
    const distance = Math.sqrt(x * x + y * y);
    if (Math.abs(distance - radius) < 0.5) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}
