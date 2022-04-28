///////

/// Exercise 5
/**
 * INPUT: Người dùng nhập vào ngày tháng năm
 * 1. Dom lấy các giá trị, gán biến date, month, year
 * 2. xét các điều kiện hợp lệ(nếu sai in ra màn hình):
 * - các giá trị nhập vào là số nguyên dương
 * - tháng <= 12, trong đó:
 * tháng có 28 ngày: tháng 2
 * tháng có 30 ngày: 4, 6, 9, 11
 * tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12
 * 3.1 nếu người dùng nhập ngày đầu tháng:
 * - ngày sau tăng một
 * - ngày trước trả về ngày cuối tháng và tháng giảm 1, nếu là tháng 1 thì trả về tháng 12
 * 3.2 nếu người dùng nhập ngày cuối tháng
 * - ngày sau trả về ngày đầu tháng tháng và tháng tăng 1, nếu là tháng 12 thì trả về tháng 1
 * - ngày trước giảm 1
 */

/// Note: cho mình sử dụng một số tính năng mới của ES6 như const và let để tổ chức code tốt hơn một ít nhe, mình mới học thêm và muốn ứng dụng, chưa clean lắm. Và trong bài tập JS buổi 11, mình có dùng if(input = input - (input % 1) === true) để xét số nguyên, nên ở đây mình thay thế nó bằng isInteger cho nhanh và ko bị dài

const prevDateBtn = document.getElementById('prevDateBtn');
const nextDateBtn = document.getElementById('nextDateBtn');
const unValidCalendar = function (date, month, year) {
  if (
    Number.isInteger(date, month, year) === false ||
    date <= 0 ||
    date > 31 ||
    month <= 0 ||
    month > 12
  )
    return true;
};

const prevDate = function () {
  let date = +document.getElementById('dateEx5').value;
  let month = +document.getElementById('monthEx5').value;
  let year = +document.getElementById('yearEx5').value;
  const exportTxtEx5 = document.getElementById('exportTxtEx5');

  let checkYear = year < 1 ? 'Trước công nguyên' : 'Sau công nguyên';

  const decreaseDate = function (date, month, year) {
    if (date === 1) {
      date = 31;

      month === 1 ? (month = 12) : (month -= 1);
      exportTxtEx5.style.backgroundColor = '#fff';
      exportTxtEx5.textContent = `Ngày tháng năm trước đó là: ${date} / ${month} / ${year} ${checkYear}`;
    } else {
      date -= 1;
      exportTxtEx5.style.backgroundColor = '#fff';
      exportTxtEx5.textContent = `Ngày tháng năm trước đó là: ${date} / ${month} / ${year} ${checkYear}`;
    }
  };

  if (unValidCalendar(date, month, year)) {
    exportTxtEx5.style.backgroundColor = '#ffc107';
    exportTxtEx5.textContent =
      'ngày tháng phải là số nguyên dương hợp lệ, năm < 0 là trước công nguyên, >= 0  là sau công nguyên';
    return;
  }
  switch (month) {
    case 1:
      year -= 1;
      decreaseDate(date, month, year);
      break;
    case 2:
      if (date > 28) {
        exportTxtEx5.style.backgroundColor = '#ffc107';
        exportTxtEx5.textContent = 'tháng 2 chỉ có 28 ngày';
      } else {
        decreaseDate(date, month, year);
      }
      break;
    case 3:
    case 5:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      decreaseDate(date, month, year);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (date > 30) {
        exportTxtEx5.style.backgroundColor = '#ffc107';
        exportTxtEx5.textContent = `tháng ${month} chỉ có 30 ngày`;
      } else {
        decreaseDate(date, month, year);
      }
      break;
  }
};
//};

const nextDate = function () {
  let date = +document.getElementById('dateEx5').value;
  let month = +document.getElementById('monthEx5').value;
  let year = +document.getElementById('yearEx5').value;
  const exportTxtEx5 = document.getElementById('exportTxtEx5');

  let checkYear;
  if (year < 1) {
    checkYear = 'Trước công nguyên';
  } else {
    checkYear = 'Sau công nguyên';
  }

  const increaseDate = function (date, month, year) {
    if (date === 31) {
      date = 1;
      month === 12 ? (month = 1) : (month += 1);
      exportTxtEx5.style.backgroundColor = '#fff';
      exportTxtEx5.textContent = `Ngày tháng năm sau đó là: ${date} / ${month} / ${year} ${checkYear}`;
    } else {
      date += 1;
      exportTxtEx5.style.backgroundColor = '#fff';
      exportTxtEx5.textContent = `Ngày tháng năm sau đó là: ${date} / ${month} / ${year} ${checkYear}`;
    }
  };

  if (unValidCalendar(date, month, year)) {
    exportTxtEx5.style.backgroundColor = '#ffc107';
    exportTxtEx5.textContent =
      'ngày tháng phải là số nguyên dương hợp lệ, năm < 0 là trước công nguyên, >= 0  là sau công nguyên';
    return;
  } // else {
  switch (month) {
    case 12:
      if (date === 31) {
        year += 1;
        increaseDate(date, month, year);
      } else {
        increaseDate(date, month, year);
      }
      break;
    case 2:
      if (date === 28) {
        date = 1;
        month += 1;
        exportTxtEx5.style.backgroundColor = '#fff';
        exportTxtEx5.textContent = `Ngày tháng năm sau đó là: ${date} / ${month} / ${year} ${checkYear}`;
      } else if (date > 28) {
        exportTxtEx5.style.backgroundColor = '#ffc107';
        exportTxtEx5.textContent = `tháng ${month} chỉ có 28 ngày`;
      } else {
        exportTxtEx5.style.backgroundColor = '#fff';
        increaseDate(date, month, year);
      }
      break;
    case 1:
    case 3:
    case 5:
    case 5:
    case 7:
    case 8:
    case 10:
      increaseDate(date, month, year);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (date === 30) {
        date = 1;
        month += 1;
        exportTxtEx5.style.backgroundColor = '#fff';
        exportTxtEx5.textContent = `Ngày tháng năm sau đó là: ${date} / ${month} / ${year} ${checkYear}`;
      } else if (date === 31) {
        exportTxtEx5.style.backgroundColor = '#ffc107';
        exportTxtEx5.textContent = `tháng ${month} chỉ có 30 ngày`;
      } else {
        exportTxtEx5.style.backgroundColor = '#fff';
        increaseDate(date, month, year);
      }
      break;
  }
};
//};

prevDateBtn.addEventListener('click', prevDate);
nextDateBtn.addEventListener('click', nextDate);
