const db = require('../config/db');

// CREATE
exports.create = async (req, res) => {
    try {
        const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = req.body;
        const sql = "INSERT INTO Opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)";
        await db.query(sql, [Etunimi, Sukunimi, Osoite, Luokkatunnus]);
        res.json({ message: "Opiskelija lisätty", data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ
exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Opiskelija");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.update = async (req, res) => {
    try {
        const idopiskelija = req.params.id;
        const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = req.body;
        await db.query("UPDATE Opiskelija SET Etunimi = ?, Sukunimi = ?, Osoite = ?, Luokkatunnus = ? WHERE idopiskelija = ?", [Etunimi, Sukunimi, Osoite, Luokkatunnus, idopiskelija]);
        res.json({ message: "Opiskelija päivitetty", data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM Opiskelija WHERE idopiskelija = ?", [id]);
        res.json({ message: "Opiskelija poistettu" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
