import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import principalImage from '../images/principal.jpeg';

function PrincipalSection() {
    const { t } = useContext(LangContext);
    return (
        <section className="principal-section" id="about">
            <div className="principal-container">
                <div className="principal-img-box">
                    <img src={principalImage} alt="Principal" className="principal-img" />
                </div>
                <div className="principal-content">
                    <span className="sub-heading">{t.p_sub}</span>
                    <h2 className="principal-heading">{t.p_head}</h2>
                    <div className="quote-box"><p className="quote-text">"{t.p_quote}"</p></div>
                    <p className="principal-text">{t.p_text}</p>
                    <div className="signature-area">
                        <div className="signature-name">{t.p_name}</div>
                        <div className="signature-title">{t.p_title}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrincipalSection;
