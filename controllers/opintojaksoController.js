const db = require('../config/db');

exports.create = async (req, res) => {
    try {
        const { Nimi, Laajuus, Koodi } = req.body;
        await db.query("INSERT INTO Opintojakso (Nimi, Laajuus, Koodi) VALUES (?, ?, ?)", [Nimi, Laajuus, Koodi]);
        res.json({ message: "Opintojakso lisätty", data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Opintojakso");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const idOpintojakso = req.params.id;
        const { Nimi, Laajuus, Koodi } = req.body;
        await db.query("UPDATE Opintojakso SET nimi = ?, laajuus = ?, koodi = ? WHERE idOpintojakso = ?", [Nimi, Laajuus, Koodi, idOpintojakso]);
        res.json({ message: "Opintojakso päivitetty", data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM Opintojakso WHERE idOpintojakso = ?", [id]);
        res.json({ message: "Opintojakso poistettu" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
