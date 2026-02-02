import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import principalImage from '../images/principal.jpeg';
import headGirlImg from '../images/1.jpeg';
import headBoyImg from '../images/2.jpeg';

function LeadersSection() {
    const { t } = useContext(LangContext);

    // Leaders Data Array
    const leaders = [
        {
            id: 1,
            name: "R.A.M.රනතුන්ග මිය", // You can change this name if needed
            role: t.l_games_cap, // "Head Principal"
            image: principalImage
        },
        {
            id: 2,
            name: "C.H.M.G.ඉන්ද්‍රචාපා මිය", // Change to School Development Principal's name
            role: t.l_head_boy, // "School Development Principal"
            image: headBoyImg
        },
        {
            id: 3,
            name: "W.D.S ගුනරත්න මිය ", // Change to Primary Principal's name
            role: t.l_head_girl, // "Primary Principal"
            image: headGirlImg
        }
    ];

    return (<section className="leaders-section"> <h2 className="section-title">{t.leaders_title}</h2> <p className="section-subtitle">{t.leaders_subtitle}</p> <div className="leaders-grid"> {leaders.map((leader) => (<div className="leader-card" key={leader.id}> <div className="leader-img-box"> <img src={leader.image} alt={leader.name} className="leader-img" /> </div> <div className="leader-info"> <h3 className="leader-name">{leader.name}</h3> <span className="leader-role">{leader.role}</span> </div> </div>))} </div> </section>);
}

export default LeadersSection;
