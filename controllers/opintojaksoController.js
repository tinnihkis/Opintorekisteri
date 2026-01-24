const Opintojakso = require('../models/opintojakso');

// CREATE
exports.create = async (req, res) => {
    try {
        const { Nimi, Laajuus, Koodi } = req.body;
        await Opintojakso.createOpintojakso(Nimi, Laajuus, Koodi);
        res.json({ message: "Opintojakso lisätty" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ
exports.getAll = async (req, res) => {
    try {
        const [rows] = await Opintojakso.getAllOpintojaksot();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nimi, Laajuus, Koodi } = req.body;
        await Opintojakso.updateOpintojakso(id, Nimi, Laajuus, Koodi);
        res.json({ message: "Opintojakso päivitetty" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Opintojakso.deleteOpintojakso(id);
        res.json({ message: "Opintojakso poistettu" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
