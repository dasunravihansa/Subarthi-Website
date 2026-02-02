import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

function VisionMissionSection() {
    const { t } = useContext(LangContext);
    return (
        <section className="vm-section">
            <div className="vm-container">
                <div className="vm-card vision">
                    <div className="vm-icon-box">👁️</div>
                    <h3 className="vm-title">{t.vm_vision_title}</h3>
                    <p className="vm-text">{t.vm_vision_text}</p>
                </div>
                <div className="vm-card mission">
                    <div className="vm-icon-box">🎯</div>
                    <h3 className="vm-title">{t.vm_mission_title}</h3>
                    <p className="vm-text">{t.vm_mission_text}</p>
                </div>
            </div>
        </section>
    );
}

export default VisionMissionSection;
