function getDigitalRoot(num) {
  let strNum = num.toString();
  while (strNum.length > 1) {
    strNum = strNum.split('').reduce((sum, n) => Number(sum) + Number(n), 0).toString();
  }
  return +strNum;
}

console.log(getDigitalRoot(235));
