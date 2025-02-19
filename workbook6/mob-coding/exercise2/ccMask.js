//* Your task is to write a function maskify, which changes all but the last four characters into '#'.

//* return masked string
function maskify(cc) {
  let maskedCC = "";
  const digitNumbers = cc.length;
  for (let i = 0; i < digitNumbers; i++) {
    if (i < digitNumbers - 4) {
      maskedCC += "#";
    } else {
      maskedCC += cc[i];
    }
  }
  return maskedCC;
}