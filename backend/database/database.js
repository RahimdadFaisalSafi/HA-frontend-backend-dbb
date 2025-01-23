const Database = require("better-sqlite3");
const db = new Database("hausaufgabe.db", { verbose: console.log });

(function initDB() {
    try {
        db.prepare(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL
            )
        `).run();
        console.log("Database initialized successfully.");
    } catch (err) {
        console.error("Error initializing database:", err.message);
        process.exit(1);
    }
})();

module.exports = { db };


