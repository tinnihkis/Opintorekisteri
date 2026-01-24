const db = require('../config/db');

// Hae kaikki arvioinnit
exports.getAllArvioinnit = () => {
    return db.query('SELECT * FROM Arviointi');
};

// Lisää uusi arviointi
exports.createArviointi = (opiskelija_id, opintojakso_id, arvosana) => {
    return db.query(
        'INSERT INTO Arviointi (opiskelija_id, opintojakso_id, arvosana) VALUES (?, ?, ?)',
        [opiskelija_id, opintojakso_id, arvosana]
    );
};

// Päivitä arviointi
exports.updateArviointi = (id, arvosana) => {
    return db.query(
        'UPDATE Arviointi SET arvosana = ? WHERE arviointi_id = ?',
        [arvosana, id]
    );
};

// Poista arviointi
exports.deleteArviointi = (id) => {
    return db.query(
        'DELETE FROM Arviointi WHERE arviointi_id = ?',
        [id]
    );
};
