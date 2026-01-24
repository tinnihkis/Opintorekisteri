const db = require('../config/db');

// Hae kaikki opintojaksot
exports.getAllOpintojaksot = () => {
    return db.query('SELECT * FROM Opintojakso');
};

// Lisää uusi opintojakso
exports.createOpintojakso = (Nimi, Laajuus, Koodi) => {
    return db.query(
        'INSERT INTO Opintojakso (Nimi, Laajuus, Koodi) VALUES (?, ?, ?)',
        [Nimi, Laajuus, Koodi]
    );
};

// Päivitä opintojakso
exports.updateOpintojakso = (id, Nimi, Laajuus, Koodi) => {
    return db.query(
        'UPDATE Opintojakso SET Nimi = ?, Laajuus = ?, Koodi = ? WHERE idOpintojakso = ?',
        [Nimi, Laajuus, Koodi, id]
    );
};

// Poista opintojakso
exports.deleteOpintojakso = (id) => {
    return db.query(
        'DELETE FROM Opintojakso WHERE idOpintojakso = ?',
        [id]
    );
};
