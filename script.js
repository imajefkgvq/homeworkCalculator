document.getElementById("calculate").addEventListener("click", () => {
  let totalMoney = document.getElementById("total").value;
  let year = document.getElementById("year").value;
  let persent = document.getElementById("percent").value;

  const n = year * 12;
  const r = persent / 100 / 12;
  let M = 0;
  if (document.getElementById("repayment").classList.contains("active")) {
    M = (totalMoney * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  } else {
    M = r * totalMoney;
  }
  document.getElementById("monthResult").textContent = `${M.toFixed(2)} T`;
  document.getElementById("totalRepay").textContent = `tenge ${(M * n).toFixed(
    2
  )}`;
});
document.getElementById("repayment").addEventListener("click", () => {
  document.getElementById("repayment").classList.add("active");
  document.getElementById("Interest").classList.remove("active");
});
document.getElementById("Interest").addEventListener("click", () => {
  document.getElementById("Interest").classList.add("active");
  document.getElementById("repayment").classList.remove("active");
});
