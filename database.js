// /meu-projeto-backend/database.js
// ... código existente ...

// Adicione esta nova tabela:
db.run(`CREATE TABLE IF NOT EXISTS tarefas (
id INTEGER PRIMARY KEY AUTOINCREMENT,
titulo TEXT NOT NULL,
descricao TEXT,
concluida BOOLEAN DEFAULT 0,
data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

module.exports = db;
