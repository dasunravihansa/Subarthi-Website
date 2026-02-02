import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const Footer = () => {
    const { t } = useContext(LangContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            // Check if we are currently on the news page
            if (location.pathname === '/news') {
                navigate(`/news?search=${encodeURIComponent(searchTerm)}`);
            } else {
                // Default to events search for other pages
                navigate(`/events?search=${encodeURIComponent(searchTerm)}`);
            }
            window.scrollTo(0, 0); // Scroll to top
        }
    };

    return (
        <div className="footer-container">
            {/* Animated Blobs */}
            <div className="footer-blob-1"></div>
            <div className="footer-blob-2"></div>

            {/* Title */}
            <h2 className="footer-title">Subarthi College</h2>

            {/* Contact Info in Footer */}
            <div className="footer-contact-info" style={{ marginBottom: '30px', color: 'white', textAlign: 'center' }}>
                <p>Kurungala road, kuliyapitiya Sri Lanka</p>
                <p>0372 281 356</p>
                <p>assaddunaasv@gmail.com</p>
            </div>

            {/* Search Box */}
            <div className="footer-search-box">
                <input
                    type="text"
                    className="footer-search-input"
                    placeholder={t.footer_search_placeholder || "Search..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button className="footer-search-btn" onClick={handleSearch}>
                    {t.footer_search_btn || "Search"}
                </button>
            </div>

            {/* Navigation Links */}
            <div className="footer-links">
                <Link to="/" className="footer-link">{t.home}</Link>
                <Link to="/about" className="footer-link">{t.about}</Link>
                <Link to="/events" className="footer-link">{t.events}</Link>
                <Link to="/news" className="footer-link">{t.news}</Link>
                <Link to="/contact" className="footer-link">{t.contact}</Link>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Subarthi College. All Rights Reserved.
                    <a
  href="https://my-portfolio-delta-ruby-18.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-des-btn"
>
  Design by Dasun
</a>

                </p>
            </div>
        </div>
    );
};

export default Footer;
