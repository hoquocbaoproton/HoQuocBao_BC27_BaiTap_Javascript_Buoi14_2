'use strict';

/// Exercise 7

/**
 * INPUT: Người dùng nhập vào số có
 * PROCESS:
 * 1. Dom lấy các giá trị, gán biến input
 * 2. xét số abc, ta có:
 * số hàng đơn vị => c = abc % 10
 * số hàng chục => bc = abc % 100
 * số hàng trăm => abc = abc % 1000
 * 3. sử dụng switch case để gán giá trị
 * vd: hàng trăm => case 1: Một trăm, case 2: hai trăm
 * vd: hàng chục => case 2: hai mươi, case 4: bố mươi
 * vd: hàng đơn vị => case 4: bốn, case 5: năm
 * OUTPUT: xuất ra màn hình
 */

const btnReadEx7 = document.getElementById('btnReadEx7');

const readNum3digits = function () {
  const input = +document.getElementById('inputEx7').value;
  const exportTxtEx7 = document.getElementById('exportTxtEx7');

  const abc = input - (input % 1);
  const c = abc % 10;
  const b = (abc % 100) / 10 - (((abc % 100) / 10) % 1);
  const a = (abc - (abc % 100)) / 100;

  console.log(a, b, c, abc);

  let century;
  let decade;
  let unit;

  const printNum = function (century, decade, unit) {
    exportTxtEx7.textContent = `${century} ${decade} ${unit}`;
  };

  if (abc > 999) alert('số có ba chữ số');

  switch (a) {
    case 1:
      century = 'một trăm';
      break;
    case 2:
      century = 'hai trăm';
      break;
    case 3:
      century = 'ba trăm';
      break;
    case 4:
      century = 'bốn trăm';
      break;
    case 5:
      century = 'năm trăm';
      break;
    case 6:
      century = 'sáu trăm';
      break;
    case 7:
      century = 'bảy trăm';
      break;
    case 8:
      century = 'tám trăm';
      break;
    case 9:
      century = 'chí trămn';
      break;
    default:
      century = '';
  }

  switch (b) {
    case 1:
      decade = 'mười';
      break;
    case 2:
      decade = 'hai mươi';
      break;
    case 3:
      decade = 'ba mươi';
      break;
    case 4:
      decade = 'bố mươi';
      break;
    case 5:
      decade = 'nă mươi';
      break;
    case 6:
      decade = 'sá mươi';
      break;
    case 7:
      decade = 'bả mươi';
      break;
    case 8:
      decade = 'tá mươi';
      break;
    case 9:
      decade = 'ch mươin';
      break;
    default:
      decade = '';
  }

  switch (c) {
    case 1:
      unit = 'một';
      break;
    case 2:
      unit = 'hai';
      break;
    case 3:
      unit = 'ba';
      break;
    case 4:
      unit = 'bốn';
      break;
    case 5:
      if (century === '' && decade === '') {
        unit = 'năm';
      } else unit = 'lăm';
      break;
    case 6:
      unit = 'sáu';
      break;
    case 7:
      unit = 'bảy';
      break;
    case 8:
      unit = 'tám';
      break;
    case 9:
      unit = 'chín';
      break;
    default:
      unit = '';
  }

  printNum(century, decade, unit);
};

btnReadEx7.addEventListener('click', readNum3digits);
