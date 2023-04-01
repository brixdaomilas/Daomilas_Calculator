const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const resultInput = document.getElementById("resultInput");

submitBtn.addEventListener("click", function() {
  const operator = document.getElementById("operator").value;
  const firstNum = Number(document.getElementById("firstNum").value);
  const secondNum = Number(document.getElementById("secondNum").value);

  let answer;

  switch (operator) {
    case "+":
      answer = firstNum + secondNum;
      break;
    case "-":
      answer = firstNum - secondNum;
      break;
    case "*":
      answer = firstNum * secondNum;
      break;
    case "/":
      answer = firstNum / secondNum;
      break;
    default:
      answer = "  Invalid Operator Try Again!";
  }
  resultInput.value = answer;

});