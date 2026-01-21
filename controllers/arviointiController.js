const db = require('../config/db');

// CREATE
exports.create = async (req, res) => {
    try {
        const { idopiskelija, idOpintojakso, Paivamaara, Arvosana } = req.body;
        await db.query(
            "INSERT INTO Arviointi (idopiskelija, idOpintojakso, Paivamaara, Arvosana) VALUES (?, ?, ?, ?)",
            [idopiskelija, idOpintojakso, Paivamaara, Arvosana]
        );
        res.json({ message: "Arviointi lisätty", data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ
exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Arviointi");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.update = async (req, res) => {
    try {
        const { idopiskelija, idOpintojakso, Paivamaara, Arvosana } = req.body;
        await db.query(
            "UPDATE Arviointi SET Paivamaara = ?, Arvosana = ? WHERE idopiskelija = ? AND idOpintojakso = ?",
            [Paivamaara, Arvosana, idopiskelija, idOpintojakso]
        );
        res.json({ message: "Arviointi päivitetty", data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        const { idopiskelija, idOpintojakso } = req.params;
        await db.query(
            "DELETE FROM Arviointi WHERE idopiskelija = ? AND idOpintojakso = ?",
            [idopiskelija, idOpintojakso]
        );
        res.json({ message: "Arviointi poistettu" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
