
function simulateBurn() {
  let current = document.getElementById("burnAmount").innerText.split(" ")[0];
  let newAmount = Number(current) + 1000;
  document.getElementById("burnAmount").innerText = newAmount + " AHB";
}
