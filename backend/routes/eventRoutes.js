import express from 'express';
import Event from '../models/Event.js';

const router = express.Router();

// @route   GET /api/events
// @desc    Get all events
router.get('/', async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            // Simple regex search for title or description
            query = {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const events = await Event.find(query).sort({ date: 1 }); // Sort by date ascending
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/events
// @desc    Create a new event (For testing/seeding)
router.post('/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
