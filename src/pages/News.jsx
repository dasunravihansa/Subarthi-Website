import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import ScrollAnimation from '../components/ScrollAnimation';

function News() {
    const { t } = useContext(LangContext);
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
                let url = `${API_BASE_URL}/api/news`;
                if (searchQuery) {
                    url += `?search=${searchQuery}`;
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setNewsList(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [searchQuery]);

    return (
        <div className="news-page" style={{ padding: '120px 20px 60px', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
            <ScrollAnimation>
                <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    {searchQuery ? `Search Results for "${searchQuery}"` : (t.news || "Latest News")}
                </h1>
                {searchQuery && (
                    <p style={{ textAlign: 'center', marginBottom: '40px', color: '#6b7280' }}>
                        Found {newsList.length} result(s)
                    </p>
                )}
            </ScrollAnimation>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#6b7280' }}>
                    Loading news from database...
                </div>
            ) : (
                <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {newsList.length > 0 ? newsList.map(item => (
                        <ScrollAnimation key={item._id || item.id}>
                            <div className="news-card" style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '30px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                borderTop: `5px solid ${item.category === 'Academic' ? '#2563eb' : item.category === 'Community' ? '#10b981' : '#f59e0b'}`,
                                transition: 'transform 0.3s ease'
                            }}>
                                <div className="news-date" style={{
                                    background: '#f3f4f6',
                                    display: 'inline-block',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: '#4b5563',
                                    marginBottom: '15px'
                                }}>
                                    {item.date}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#111827', fontFamily: 'Stick No Bills, sans-serif' }}>{item.title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: '1.6', fontFamily: 'Lato, sans-serif' }}>{item.description}</p>
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
                                    Read More
                                </button>
                            </div>
                        </ScrollAnimation>
                    )) : (
                        <div style={{ textAlign: 'center', gridColumn: '1/-1', color: '#6b7280' }}>
                            No news found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default News;
