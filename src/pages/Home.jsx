import React from 'react';
import HeroSection from '../components/HeroSection';
import PrincipalSection from '../components/PrincipalSection';
import VisionMissionSection from '../components/VisionMissionSection';
import LeadersSection from '../components/LeadersSection';
import ScrollAnimation from '../components/ScrollAnimation';

function Home() {
    return (
        <>
            <HeroSection />
            <ScrollAnimation>
                <PrincipalSection />
            </ScrollAnimation>
            <ScrollAnimation>
                <VisionMissionSection />
            </ScrollAnimation>
            <ScrollAnimation>
                <LeadersSection />
            </ScrollAnimation>
        </>
    );
}

export default Home;
