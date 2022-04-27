'use strict';

//// EXERCISE 8

/**
 * INPUT: Tọa độ của 3 sinh viên
 * PROCESS:
 * 1. Dom các giá trị, gán biến tọa độ lần lượt
 * [x, y] => tọa độ của trường
 * [x1, y1] => sinh viên 1
 * [x2, y2] => sinh viên 2
 * [x3, y3] => sinh viên 3

 * 2. Tính: khoảng cách d1, d2, d3 tương ứng với từ tọa độ các sinh viên đến trường theo công thức pytago trên mặt phẳng tọa độ
 * 3. so sánh khoảng cách, trả về khoảng cách lớn nhất
 * 
 * OUTPUT: in ra giao diện khoảng cách lớn nhất
 */

const compareBtn = document.getElementById('compareBtnEx8');

const compareCoordinates = function () {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  const name3 = document.getElementById('name3').value;
  const exportTxtEx8 = document.getElementById('exportTxtEx8');
  const [x, y] = [
    +document.getElementById('x').value,
    +document.getElementById('y').value,
  ];
  const [x1, y1] = [
    +document.getElementById('x1').value,
    +document.getElementById('y1').value,
  ];
  const [x2, y2] = [
    +document.getElementById('x2').value,
    +document.getElementById('y2').value,
  ];
  const [x3, y3] = [
    +document.getElementById('x3').value,
    +document.getElementById('y3').value,
  ];

  const d1 = Math.sqrt((x - x1) ** 2 + (y - y1) ** 2);
  const d2 = Math.sqrt((x - x2) ** 2 + (y - y2) ** 2);
  const d3 = Math.sqrt((x - x3) ** 2 + (y - y3) ** 2);

  if (d1 === d2 && d2 === d3) {
    exportTxtEx8.textContent = 'khoảng cách bằng nhau';
  } else {
    if (d1 > d2) {
      if (d2 > d3) {
        exportTxtEx8.textContent = `Sinh viên xa trường nhất là ${name1}`;
      } else if (d2 < d3) {
        if (d1 > d3) {
          exportTxtEx8.textContent = `Sinh viên xa trường nhất là ${name1}`;
        } else if (d1 < d3) {
          exportTxtEx8.textContent = `Sinh viên xa trường nhất là ${name3}`;
        }
      }
    } else if (d2 > d1) {
      if (d1 > d3) {
        exportTxtEx8.textContent = `Sinh viên xa trường nhất là ${name2}`;
      } else if (d1 < d3) {
        if (d3 > d2) {
          exportTxtEx8.textContent = `Sinh viên xa trường nhất là ${name3}`;
        } else if (d2 > d3) {
          exportTxtEx8.textContent = `Sinh viên xa trường nhất là ${name2}`;
        }
      }
    }
  }
};

compareBtn.addEventListener('click', compareCoordinates);
