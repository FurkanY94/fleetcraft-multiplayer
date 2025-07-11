let fuel = 100;
let money = 10000;
let crew = 3;

function updateStatus() {
  document.getElementById("status").innerHTML = `⛽ Yakıt: ${fuel} | 👥 Mürettebat: ${crew} | 💰 Para: $${money}`;
}
const startPorts = ["İstanbul", "Napoli", "Marsilya", "Barselona"];

function showStartSelectionUI() {
  const screen = document.getElementById("startScreen");
  const options = document.getElementById("portOptions");

  startPorts.forEach(port => {
    const btn = document.createElement("button");
    btn.textContent = port;
    btn.style.padding = "10px 20px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.backgroundColor = "#2d89ef";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";

    btn.onclick = () => {
      localStorage.setItem("fleetcraft_start_port", port);
      screen.style.display = "none";
      initializeGame(); // oyun artık başlasın
    };

    options.appendChild(btn);
  });

  screen.style.display = "block";
}

function startNapoli() {
  fuel -= 30;
  money += 3000;

  document.getElementById("story").innerHTML = `
    Napoli’ye doğru yelken açtın...<br>
    Sefer başarıyla tamamlandı. $3000 kazandın.<br><br>
    Yeni limanlar haritada belirdi.
  `;

  document.getElementById("newRoutes").style.display = "block";
  updateStatus();
}

function sailToAthens() {
  if (fuel < 20) {
    alert("Atina’ya gidecek kadar yakıtın yok!");
    return;
  }

  fuel -= 20;
  money += 2500;

  document.getElementById("story").innerHTML = `
    Atina’ya güvenli bir sefer yaptın.<br>
    $2500 kazandın.
  `;
  updateStatus();
}

function sailToMarseille() {
  if (fuel < 40) {
    alert("Marsilya’ya yelken açmak için yeterli yakıt yok!");
    return;
  }

  const firtina = Math.random() < 0.5;
  let ekstra = 0;
  let olay = "";

  if (firtina) {
    ekstra = 10;
    olay = "⛈ Fırtınaya yakalandın! 10 ekstra yakıt harcandı. Mürettebat morali düştü.<br>";
  } else {
    olay = "🟢 Sefer sorunsuz geçti.<br>";
  }

  fuel -= (40 + ekstra);
  money += 5000;

  document.getElementById("story").innerHTML = `
    ${olay}
    Marsilya’ya ulaştın. $5000 kazandın.
  `;
  updateStatus();
}

function repairShip() {
  if (money < 3000) {
    alert("Yetersiz bakiye!");
    return;
  }

  money -= 3000;
  fuel += 10;

  document.getElementById("story").innerHTML = `
    🔧 Gemi bakımı yapıldı. +10 yakıt kazandın.
  `;
  updateStatus();
}

function hireCrew() {
  if (money < 5000) {
    alert("Yetersiz bakiye!");
    return;
  }

  money -= 5000;
  crew += 1;

  document.getElementById("story").innerHTML = `
    👥 Yeni mürettebat işe alındı. Toplam: ${crew}
  `;
  updateStatus();
}

updateStatus();

