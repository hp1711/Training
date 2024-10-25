const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// POST request to save birth year
router.post('/addBirthYear', async (req, res) => {
    const { fullName, birthYear } = req.body;

    try {
        const newUser = new User({ fullName, birthYear });
        await newUser.save();
        res.status(200).send("Saved Successfully");
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Failed to save birth year', details: error.message });
    }
});

// GET request to calculate and return age
router.get('/getAge/:fullName', async (req, res) => {
    const { fullName } = req.params;

    try {
        const user = await User.findOne({ fullName });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const currentYear = new Date().getFullYear();
        const age = currentYear - user.birthYear;

        res.status(200).json({ age });
    } catch (error) {
        console.error('Error calculating age:', error);
        res.status(500).json({ error: 'Failed to calculate age' });
    }
});

module.exports = router;