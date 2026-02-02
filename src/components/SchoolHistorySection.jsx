import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import bgImage from '../images/b1.png';

function SchoolHistorySection() {
    const { t } = useContext(LangContext);

    return (
        <section className="history-section" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="history-overlay">
                <div className="history-content">
                    <h2 className="section-title history-title">{t.history_title}</h2>
                    <p className="history-text">{t.history_text1}</p>
                    <p className="history-text">{t.history_text2}</p>
                </div>
            </div>
        </section>
    );
}

export default SchoolHistorySection;
