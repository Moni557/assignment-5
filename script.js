let heartCount = 0;
let coins = 100;
let copyCount = 0;

const heartBtns = document.querySelectorAll(".heart-btn");
const heartNavbarBtn = document.getElementById("heart-btn");
const coinCount = document.getElementById("coin-count");
const copyBadge = document.getElementById("copy-count");
const historyList = document.getElementById("history-list");
const clearHistory = document.getElementById("clear-history");

// Heart functionality
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartNavbarBtn.textContent = "💗 " + heartCount;
  });
});

// Copy functionality
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector(".service-number").textContent;

    navigator.clipboard.writeText(number);
    copyCount++;
    copyBadge.textContent = copyCount + " Copy";
    alert("Copied: " + number);
  });
});

// Call functionality
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const name = card.querySelector(".service-name").textContent;
    const number = card.querySelector(".service-number").textContent;

    if (coins < 20) {
      alert("Not enough coins! Need at least 20 coins.");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert("Calling " + name + " at " + number);

    const li = document.createElement("li");
    li.className = "flex justify-between text-sm border-b pb-1";
    li.innerHTML = `<span>${name} (${number})</span><span class="text-gray-500">${new Date().toLocaleTimeString()}</span>`;
    historyList.appendChild(li);
  });
});

// Clear History
clearHistory.addEventListener("click", () => {
  historyList.innerHTML = "";
});
