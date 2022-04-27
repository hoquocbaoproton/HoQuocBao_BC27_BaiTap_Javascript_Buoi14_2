'use strict';

/// Exercise 6

/**
 * INPUT: Người dùng nhập vào ngày tháng
 * PROCESS:
 * 1. Dom lấy các giá trị, gán biến date, month
 * 2. xét các điều kiện hợp lệ(nếu sai in ra màn hình)
 * 3.1
 * tháng 2:
 * nếu là năm nhuận: 28 ngày
 * nếu là năm không nhuận: 29 ngày
 * tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
 * tháng 4, 6, 9, 11 có 30 ngày
 */

const calcDateBtn = document.getElementById('calcDate');

const calcDate = function () {
  const month = +document.getElementById('monthEx6').value;
  const year = +document.getElementById('yearEx6').value;
  const exportTxtEx6 = document.getElementById('exportTxtEx6');

  let date;

  const exportDate = function () {
    exportTxtEx6.textContent = `số ngày của tháng: ${date}`;
  };

  if (Number.isInteger(month, year) === false || month < 1 || month > 12) {
    exportTxtEx6.style.backgroundColor = '#ffc107';
    exportTxtEx6.textContent =
      'ngày tháng phải là số nguyên dương hợp lệ, năm < 0 là trước công nguyên, >= 0  là sau công nguyên';
  } else {
    exportTxtEx6.style.backgroundColor = '#fff';
    switch (month) {
      case 2:
        if (year % 400 === 0 || (year % 4 !== 0 && year % 4 === 0)) {
          date = 29;
          exportDate(date);
        } else {
          date = 28;
          exportDate(date);
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        date = 31;
        exportDate(date);
        break;
      case 4:
      case 11:
      case 9:
      case 11:
        date = 30;
        exportDate(date);
    }
  }
};

calcDateBtn.addEventListener('click', calcDate);
