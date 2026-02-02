import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple JSON file database
const DB_FILE = path.join(__dirname, 'events.json');
const NEWS_DB_FILE = path.join(__dirname, 'news.json');

// Initialize DB file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
    const initialEvents = [
        {
            _id: "1",
            title: "Annual Sports Meet 2025",
            date: "2025-03-15",
            description: "Join us for a day of athleticism and team spirit at the college grounds. Track and field events start at 8:00 AM.",
            category: "Sports"
        },
        {
            _id: "2",
            title: "Sinhala & Tamil New Year",
            date: "2025-04-10",
            description: "Celebrating the cultural heritage with traditional games, food table, and avurudu kumara/kumariya selection.",
            category: "Cultural"
        },
        {
            _id: "3",
            title: "Science & Art Exhibition",
            date: "2025-05-20",
            description: "A showcase of innovation and creativity by our talented students. Open for public viewing.",
            category: "Academic"
        }
    ];
    fs.writeFileSync(DB_FILE, JSON.stringify(initialEvents, null, 2));
    console.log('✅ Created events.json with sample data');
}

// Initialize News DB file if it doesn't exist
if (!fs.existsSync(NEWS_DB_FILE)) {
    const initialNews = [
        {
            _id: "1",
            title: "College Science Fair Winners",
            date: "2025-02-10",
            description: "Congratulations to our students who won first place in the National Science Fair with their innovative renewable energy project.",
            category: "Academic"
        },
        {
            _id: "2",
            title: "New Library Wing Opening",
            date: "2025-01-25",
            description: "The new state-of-the-art library wing is now open for students, featuring digital archives and study pods.",
            category: "Infrastructure"
        },
        {
            _id: "3",
            title: "Charity Walk 2024 Success",
            date: "2024-12-20",
            description: "Our annual charity walk raised over 1 million rupees for the local community hospital. Thank you to all who participated!",
            category: "Community"
        }
    ];
    fs.writeFileSync(NEWS_DB_FILE, JSON.stringify(initialNews, null, 2));
    console.log('✅ Created news.json with sample data');
}

// GET all events with optional search
app.get('/api/events', (req, res) => {
    try {
        const { search } = req.query;
        const eventsData = fs.readFileSync(DB_FILE, 'utf8');
        let events = JSON.parse(eventsData);

        if (search) {
            const searchLower = search.toLowerCase();
            events = events.filter(event =>
                event.title.toLowerCase().includes(searchLower) ||
                event.description.toLowerCase().includes(searchLower)
            );
        }

        // Sort by date
        events.sort((a, b) => new Date(a.date) - new Date(b.date));

        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new event
app.post('/api/events', (req, res) => {
    try {
        const eventsData = fs.readFileSync(DB_FILE, 'utf8');
        const events = JSON.parse(eventsData);

        const newEvent = {
            _id: Date.now().toString(),
            ...req.body
        };

        events.push(newEvent);
        fs.writeFileSync(DB_FILE, JSON.stringify(events, null, 2));

        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET all news with optional search
app.get('/api/news', (req, res) => {
    try {
        const { search } = req.query;
        const newsData = fs.readFileSync(NEWS_DB_FILE, 'utf8');
        let news = JSON.parse(newsData);

        if (search) {
            const searchLower = search.toLowerCase();
            news = news.filter(item =>
                item.title.toLowerCase().includes(searchLower) ||
                item.description.toLowerCase().includes(searchLower)
            );
        }

        // Sort by date (newest first)
        news.sort((a, b) => new Date(b.date) - new Date(a.date));

        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new news item
app.post('/api/news', (req, res) => {
    try {
        const newsData = fs.readFileSync(NEWS_DB_FILE, 'utf8');
        const news = JSON.parse(newsData);

        const newNewsItem = {
            _id: Date.now().toString(),
            ...req.body
        };

        news.push(newNewsItem);
        fs.writeFileSync(NEWS_DB_FILE, JSON.stringify(news, null, 2));

        res.status(201).json(newNewsItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Subarthi College API is running... (Using JSON file storage)');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📁 Using JSON file database at: ${DB_FILE}`);
});
