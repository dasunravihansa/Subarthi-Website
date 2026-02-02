import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, toggleLang, t } = useContext(LangContext);
    useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : 'unset'; }, [isOpen]);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="logo">
                <div className="logo-dots">
                    <div className="l-dot blue"></div><div className="l-dot"></div>
                    <div className="l-dot"></div><div className="l-dot"></div>
                </div>&nbsp;Subarthi.
            </div>
            <ul className="nav-links">
                <li><Link to="/">{t.home}</Link></li>
                <li><Link to="/about">{t.about}</Link></li>
                <li><Link to="/events">{t.events}</Link></li>
                <li><Link to="/news">{t.news}</Link></li>
                <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="lang-btn" onClick={toggleLang}>
                    <span className="lang-icon">{lang === 'en' ? '🇺🇸' : '🇱🇰'}</span>{lang === 'en' ? ' EN' : ' SI'}
                </button>
                <button className="nav-btn nav-desktop-btn">{t.login}</button>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div><div className="bar"></div><div className="bar"></div>
                </div>
            </div>
            <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
                <Link to="/" className="mobile-link" onClick={toggleMenu}>{t.home}</Link>
                <Link to="/about" className="mobile-link" onClick={toggleMenu}>{t.about}</Link>
                <Link to="/events" className="mobile-link" onClick={toggleMenu}>{t.events}</Link>
                <Link to="/news" className="mobile-link" onClick={toggleMenu}>{t.news}</Link>
                <Link to="/contact" className="mobile-link" onClick={toggleMenu}>{t.contact}</Link>
                <button className="lang-btn" onClick={toggleLang} style={{ marginTop: '20px' }}>Switch to: {lang === 'en' ? 'Sinhala' : 'English'}</button>
                <button className="btn-mobile" onClick={toggleMenu}>{t.login}</button>
            </div>
        </nav>
    );
}

export default Navbar;
