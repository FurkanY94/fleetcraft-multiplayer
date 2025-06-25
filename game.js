let fuel = 100;
let money = 10000;
let crew = 3;

function updateStatus() {
  document.getElementById("status").innerHTML = `⛽ Yakıt: ${fuel} | 👥 Mürettebat: ${crew} | 💰 Para: $${money}`;
}

// Diğer tüm fonksiyonlar...
updateStatus();
