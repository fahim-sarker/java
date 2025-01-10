let i = 0;
while (i <= 100) {
    console.log(i);
    i += 1;
}
function changeBackgroundColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
