import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

function HeroSection() {
    const { t } = useContext(LangContext);
    const handleCardClick = (e) => {
        if (navigator.vibrate) navigator.vibrate(50);
        const card = e.currentTarget;
        card.classList.add('clicked');
        setTimeout(() => card.classList.remove('clicked'), 400);
    };

    return (
        <div className="hero-section" id="home">
            <div className="hero-content">
                <span className="tag">{t.tag}</span>
                <h1 className="main-heading">{t.heading1} <br /><span style={{ color: '#2563eb' }}>{t.heading2}</span></h1>
                <p className="sub-text">{t.subtext}</p>
                <button className="btn-primary" onClick={() => { if (navigator.vibrate) navigator.vibrate(50); }}>{t.apply}</button>
            </div>
            <div className="stats-grid-mobile">
                <div className="float-card pos-1" onClick={handleCardClick}><div className="icon-box" style={{ background: '#dbeafe', color: '#2563eb' }}>👥</div><div className="stat-info"><h4>2,000+</h4><p>{t.stat1}</p></div></div>
                <div className="float-card pos-2" onClick={handleCardClick}><div className="icon-box" style={{ background: '#d1fae5', color: '#10b981' }}>🎓</div><div className="stat-info"><h4>89%</h4><p>{t.stat2}</p></div></div>
                <div className="float-card pos-3" onClick={handleCardClick}><div className="icon-box" style={{ background: '#fef3c7', color: '#d97706' }}>👨‍🏫</div><div className="stat-info"><h4>120+</h4><p>{t.stat3}</p></div></div>
                <div className="float-card pos-4" onClick={handleCardClick}><div className="icon-box" style={{ background: '#ede9fe', color: '#8b5cf6' }}>🏆</div><div className="stat-info"><h4>50+</h4><p>{t.stat4}</p></div></div>
            </div>
        </div>
    );
}

export default HeroSection;
