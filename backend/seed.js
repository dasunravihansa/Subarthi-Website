import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from './models/Event.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/subarthi_college";

const sampleEvents = [
    {
        title: "Annual Sports Meet 2025",
        date: "2025-03-15",
        description: "Join us for a day of athleticism and team spirit at the college grounds. Track and field events start at 8:00 AM.",
        category: "Sports"
    },
    {
        title: "Sinhala & Tamil New Year",
        date: "2025-04-10",
        description: "Celebrating the cultural heritage with traditional games, food table, and avurudu kumara/kumariya selection.",
        category: "Cultural"
    },
    {
        title: "Science & Art Exhibition",
        date: "2025-05-20",
        description: "A showcase of innovation and creativity by our talented students. Open for public viewing.",
        category: "Academic"
    }
];

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('✅ Connected to DB for Seeding');

        // Clear existing events
        await Event.deleteMany({});
        console.log('🗑️  Cleared existing events');

        // Insert new events
        await Event.insertMany(sampleEvents);
        console.log('🌱 Seeded sample events');

        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
