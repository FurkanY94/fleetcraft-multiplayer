const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Public klasörünü servis et
app.use(express.static(path.join(__dirname, 'public')));

// Oyuncu verilerini tut
let players = {};

io.on('connection', (socket) => {
  console.log(`🔗 Yeni oyuncu bağlandı: ${socket.id}`);

  socket.on("registerPlayer", (data) => {
    players[socket.id] = {
      name: data.name || "Bilinmeyen",
      location: data.location || "İstanbul",
      money: 10000
    };
    io.emit("playerList", players);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Oyuncu ayrıldı: ${socket.id}`);
    delete players[socket.id];
    io.emit("playerList", players);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
