import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import VisionMissionSection from '../components/VisionMissionSection';
import LeadersSection from '../components/LeadersSection';
import SchoolHistorySection from '../components/SchoolHistorySection';
import ScrollAnimation from '../components/ScrollAnimation';

function AboutUs() {
    return (
        <div className="about-us-page">
            <ScrollAnimation>
                <SchoolHistorySection />
            </ScrollAnimation>
            <ScrollAnimation>
                <PrincipalSection />
            </ScrollAnimation>
            <ScrollAnimation>
                <VisionMissionSection />
            </ScrollAnimation>
            <ScrollAnimation>
                <LeadersSection />
            </ScrollAnimation>
        </div>
    );
}

export default AboutUs;
