const db = require('../config/db');

exports.getAllOpiskelijat = () => {
    return db.query('SELECT * FROM Opiskelija');
};

exports.createOpiskelija = (Etunimi, Sukunimi, Osoite, Luokkatunnus) => {
    return db.query(
        'INSERT INTO Opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
        [Etunimi, Sukunimi, Osoite, Luokkatunnus]
    );
};

exports.updateOpiskelija = (id, Etunimi, Sukunimi, Osoite, Luokkatunnus) => {
    return db.query(
        'UPDATE Opiskelija SET Etunimi = ?, Sukunimi = ?, Osoite = ?, Luokkatunnus = ? WHERE idopiskelija = ?',
        [Etunimi, Sukunimi, Osoite, Luokkatunnus, id]
    );
};

exports.deleteOpiskelija = (id) => {
    return db.query(
        'DELETE FROM Opiskelija WHERE idopiskelija = ?',
        [id]
    );
};
