let str = ``;

function clickBtn() {
  if (
    (str.length === 0 && event.path[0].value === '*') ||
    (str.length === 0 && event.path[0].value === '+') ||
    (str.length === 0 && event.path[0].value === '-') ||
    (str.length === 0 && event.path[0].value === '/')
  ) {
    return false;
  }
  if (
    event.path[0].value === '1' ||
    event.path[0].value === '2' ||
    event.path[0].value === '3' ||
    event.path[0].value === '4' ||
    event.path[0].value === '5' ||
    event.path[0].value === '6' ||
    event.path[0].value === '7' ||
    event.path[0].value === '8' ||
    event.path[0].value === '9' ||
    event.path[0].value === '0' ||
    event.path[0].value === '+' ||
    event.path[0].value === '-' ||
    event.path[0].value === '*' ||
    event.path[0].value === '/'
  ) {
    str += event.path[0].value;
  }
  inputCalc.value = str;
  if (
    str.includes('+') ||
    str.includes('-') ||
    str.includes('*') ||
    str.includes('/')
  ) {
    let blockBtn = document.querySelectorAll('.btnS');
    for (let i = 0; i < blockBtn.length; i++) {
      blockBtn[i].disabled = true;
    }
  }
  if (event.path[0].value === '=' && str.includes('+')) {
    let tmp = str.split('+');
    str = parseInt(tmp[0]) + parseInt(tmp[1]);
    inputCalc.value = str;
    let temp = document.querySelector('.btnPlus');
    temp.disabled = true;
    let tempNumber = document.querySelectorAll('.btn');
    for (let i = 0; i < tempNumber.length; i++) {
      tempNumber[i].disabled = true;
    }
  } else if (event.path[0].value === '=' && str.includes('-')) {
    let tmp = str.split('-');
    str = parseInt(tmp[0]) - parseInt(tmp[1]);
    inputCalc.value = str;
    let temp = document.querySelector('.btnPlus');
    temp.disabled = true;
    let tempNumber = document.querySelectorAll('.btn');
    for (let i = 0; i < tempNumber.length; i++) {
      tempNumber[i].disabled = true;
    }
  } else if (event.path[0].value === '=' && str.includes('*')) {
    let tmp = str.split('*');
    str = parseInt(tmp[0]) * parseInt(tmp[1]);
    inputCalc.value = str;
    let temp = document.querySelector('.btnPlus');
    temp.disabled = true;
    let tempNumber = document.querySelectorAll('.btn');
    for (let i = 0; i < tempNumber.length; i++) {
      tempNumber[i].disabled = true;
    }
  } else if (event.path[0].value === '=' && str.includes('/')) {
    let tmp = str.split('/');
    if (parseInt(tmp[1]) === 0) {
      inputCalc.value = 'Сannot be divided by "0"';
    } else {
      str = parseInt(tmp[0]) / parseInt(tmp[1]);
      inputCalc.value = str;
    }
    let temp = document.querySelector('.btnPlus');
    temp.disabled = true;
    let tempNumber = document.querySelectorAll('.btn');
    for (let i = 0; i < tempNumber.length; i++) {
      tempNumber[i].disabled = true;
    }
  }
}
