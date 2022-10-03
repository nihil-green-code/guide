'use strict';

const number = 5;

document.write('<h2>삼각형 1</h2>');
for (let row = 0; row < number; row++) {
  for (let col = 0; col <= row; col++) {
    document.write('* ');
  }

  document.write('<br />');
}
document.write('<br />');

document.write('<h2>삼각형 2</h2>');
for (let row = 0; row < number; row++) {
  for (let col = 0; col < number - row; col++) {
    document.write('* ');
  }

  document.write('<br />');
}
document.write('<br />');

document.write('<h2>삼각형 3</h2>');
for (let row = 0; row < number; row++) {
  for (let col = 0; col < number; col++) {
    if (col < row) {
      document.write('&nbsp; ');
    } else {
      document.write('* ');
    }
  }

  document.write('<br />');
}
document.write('<br />');

document.write('<h2>삼각형 4</h2>');
for (let row = 0; row < number; row++) {
  for (let col = 0; col < number; col++) {
    if (col < number - 1 - row) {
      document.write('&nbsp; ');
    } else {
      document.write('* ');
    }
  }

  document.write('<br />');
}
document.write('<br />');