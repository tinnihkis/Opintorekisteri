const db = require('../config/db');

// Hae kaikki opiskelijat
exports.getAllOpiskelijat = () => {
    return db.query('SELECT * FROM Opiskelija');
};

// Lisää uusi opiskelija
exports.createOpiskelija = (nimi, email) => {
    return db.query('INSERT INTO Opiskelija (nimi, email) VALUES (?, ?)', [nimi, email]);
};