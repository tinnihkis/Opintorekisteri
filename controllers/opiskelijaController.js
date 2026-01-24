const Opiskelija = require('../models/opiskelija');

// CREATE
exports.create = async (req, res) => {
    try {
        const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = req.body;
        await Opiskelija.createOpiskelija(Etunimi, Sukunimi, Osoite, Luokkatunnus);
        res.json({ message: "Opiskelija lisätty" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ
exports.getAll = async (req, res) => {
    try {
        const [rows] = await Opiskelija.getAllOpiskelijat();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = req.body;
        await Opiskelija.updateOpiskelija(id, Etunimi, Sukunimi, Osoite, Luokkatunnus);
        res.json({ message: "Opiskelija päivitetty" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Opiskelija.deleteOpiskelija(id);
        res.json({ message: "Opiskelija poistettu" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
