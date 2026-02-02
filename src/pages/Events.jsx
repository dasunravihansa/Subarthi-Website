import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import ScrollAnimation from '../components/ScrollAnimation';

function Events() {
    const { t } = useContext(LangContext);
    const [eventsList, setEventsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                // Adjust this URL if your backend runs on a different port
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
                let url = `${API_BASE_URL}/api/events`;
                if (searchQuery) {
                    url += `?search=${searchQuery}`;
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                setEventsList(data);
            } catch (error) {
                console.error("Error fetching events:", error);
                // Fallback / Error state could act here
                // For now, we might show empty or a static list if DB fails
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [searchQuery]);

    return (
        <div className="events-page" style={{ padding: '120px 20px 60px', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
            <ScrollAnimation>
                <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    {searchQuery ? `Search Results for "${searchQuery}"` : t.events}
                </h1>
                {searchQuery && (
                    <p style={{ textAlign: 'center', marginBottom: '40px', color: '#6b7280' }}>
                        Found {eventsList.length} result(s)
                    </p>
                )}
            </ScrollAnimation>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#6b7280' }}>
                    Loading events from database...
                </div>
            ) : (
                <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {eventsList.length > 0 ? eventsList.map(event => (
                        <ScrollAnimation key={event._id || event.id}>
                            <div className="event-card" style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '30px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                borderTop: `5px solid ${event.category === 'Sports' ? '#2563eb' : event.category === 'Cultural' ? '#10b981' : '#f59e0b'}`,
                                transition: 'transform 0.3s ease'
                            }}>
                                <div className="event-date" style={{
                                    background: '#f3f4f6',
                                    display: 'inline-block',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: '#4b5563',
                                    marginBottom: '15px'
                                }}>
                                    {event.date}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#111827', fontFamily: 'Stick No Bills, sans-serif' }}>{event.title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: '1.6', fontFamily: 'Lato, sans-serif' }}>{event.description}</p>
                                <button style={{
                                    marginTop: '20px',
                                    padding: '10px 20px',
                                    border: 'none',
                                    background: '#111827',
                                    color: 'white',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontFamily: 'Outfit, sans-serif'
                                }}>
                                    View Details
                                </button>
                            </div>
                        </ScrollAnimation>
                    )) : (
                        <div style={{ textAlign: 'center', gridColumn: '1/-1', color: '#6b7280' }}>
                            No events found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Events;
