import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LangContext } from './context/LangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import News from './pages/News';
import ContactUs from './pages/ContactUs';

// --- Translations ---
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    contact: "Contact Us",
    events: "Events",
    news: "News",
    programs: "Programs",
    login: "Student Portal",
    tag: "🚀 Admissions Open for 2026",
    heading1: "Where Leaders",
    heading2: "Are Born & Raised",
    subtext: "Join Subarthi College to experience a world-class education ecosystem driven by innovation, discipline, and excellence.",
    apply: "Apply Now",
    stat1: "Active Students",
    stat2: "University Pass",
    stat3: "Expert Teachers",
    stat4: "National Awards",

    // Principal Section
    p_sub: "Principal's Message",
    p_head: "Inspiring a Future of Excellence",
    p_quote: "Education is not just about academic success, but about building character, resilience, and empathy in every student.",
    p_text: "Welcome to Subarthi College. As we embark on another year of academic distinction, our focus remains on nurturing holistic development. We believe that every child has a unique potential waiting to be unlocked. Our dedicated faculty and state-of-the-art facilities are here to guide them.",
    p_name: "Miss. R.H.M. Ranatunga",
    p_title: "Principal, Subarthi College",

    // Vision & Mission
    vm_vision_title: "Our Vision",
    vm_vision_text: "An excellent child through optimal education.",
    vm_mission_title: "Our Mission",
    vm_mission_text: "To gift the country citizens full of human compassion and creative thinking by building a strong relationship between the school and the community and developing learning opportunities within an attractive educational background.",

    // Leaders Section
    leaders_title: "Meet Our Leaders",
    leaders_subtitle: "Meet the Leaders leading the way for 2025",
    l_head_boy: "School Development Principal",
    l_head_girl: "Primary Principal",
    l_games_cap: "Head Principal",

    // School History
    history_title: "Our Legacy",
    history_text1: "Subarthi College has been a beacon of knowledge and character building for over two decades. Founded with the vision of creating excellent citizens, we have consistently nurtured students to achieve their highest potential.",
    history_text2: "Our campus, surrounded by nature, provides the perfect environment for learning. From humble beginnings to a leading educational institution, our journey is a testament to the dedication of our staff and the brilliance of our students.",

    // Footer
    footer_search_placeholder: "Search for anything...",
    footer_search_btn: "Search"
  },
  si: {
    home: "මුල් පිටුව",
    about: "අපි ගැන",
    contact: "අප අමතන්න",
    events: "විශේෂ අවස්ථා",
    news: "පුවත්",
    programs: "පාඨමාලා",
    login: "සිසුන්ගේ ද්වාරය",
    tag: "🚀 2026 සඳහා අයදුම්පත් කැඳවනු ලැබේ",
    heading1: "හෙට ලොව දිනන",
    heading2: "නායකයින් බිහිවන තැන",
    subtext: "නවෝත්පාදනය, විනය සහ විශිෂ්ටත්වය පිරි ලෝක මට්ටමේ අධ්‍යාපන රටාවක් අත්විඳීමට සුභාරතී විද්‍යාලය සමඟ එක්වන්න.",
    apply: "අයදුම් කරන්න",
    stat1: "ඉගෙනුම ලබන සිසුන්",
    stat2: "විශ්වවිද්‍යාල ප්‍රවේශය",
    stat3: "පළපුරුදු ගුරුවරුන්",
    stat4: "ජාතික ජයග්‍රහණ",

    // Principal Section
    p_sub: "විදුහල්පති පණිවිඩය",
    p_head: "විශිෂ්ටත්වයේ අනාගතයක් කරා",
    p_quote: "අධ්‍යාපනය යනු හුදෙක් විභාග ජයග්‍රහණය පමණක් නොව, දරුවන් තුළ යහපත් ගුණධර්ම සහ පෞරුෂය ගොඩනැගීමයි.",
    p_text: "සුභාරතී විද්‍යාලයට ඔබව සාදරයෙන් පිළිගනිමු. අපගේ අරමුණ වන්නේ සෑම දරුවෙකු තුළම සැඟවී ඇති සුවිශේෂී හැකියාවන් මතු කර ගැනීමයි. අපගේ කැපවූ ගුරු මණ්ඩලය සහ නවීන පහසුකම් සමඟින් ඔබේ දරුවාගේ අනාගතය සාර්ථක කර ගැනීමට අපි ඇපකැප වී සිටිමු.",
    p_name: "ආර්.එච්.එම්. රණතුංග මිය",
    p_title: "විදුහල්පති - සුභාරතී විද්‍යාලය",

    // Vision & Mission
    vm_vision_title: "දැක්ම",
    vm_vision_text: "ප්‍රශස්ත අධ්‍යාපනයක් තුළින් විශිෂ්ට දරුවෙක්.",
    vm_mission_title: "මෙහෙවර",
    vm_mission_text: "පාසල හා ප්‍රජාව අතර මනා සම්බන්ධතාවක් ගොඩනගා ගනිමින් සිත් ගන්නා සුළු අධ්‍යාපනික පසුබිමක් තුළ ඉගෙනුම් අවස්ථා වර්ධනය කරමින්, මානව දයාවෙන් පිරිපුන් නිර්මාණශීලී චින්තනයෙන් හෙබි පුරවැසියන් රටට දායාද කිරීම.",

    // Leaders Section
    leaders_title: "ප්‍රධාන ගුරු මඩුල්ල",
    leaders_subtitle: "අපෙගෙ පාසලෙ පාධාන නියමුවරියන්",
    l_head_boy: "පාසල් සංවර්ධන විදුහල්පති",
    l_head_girl: "ප්‍රාථමික විදුහල්පති",
    l_games_cap: "ප්‍රධාන විදුහල්පති",

    // School History
    history_title: "අපගේ උරුමය",
    history_text1: "සුභාරතී විද්‍යාලය දශක දෙකකට වැඩි කාලයක් පුරා දැනුම සහ පෞරුෂ වර්ධනයේ කේන්ද්‍රස්ථානයක් වී ඇත. විශිෂ්ට පුරවැසියන් බිහි කිරීමේ දැක්ම පෙරදැරිව ආරම්භ වූ අප පාසල, සිසුන්ගේ උපරිම විභවයන් කරා ළඟා වීමට නිරන්තරයෙන් මග පෙන්වයි.",
    history_text2: " සොබාදහමෙන් වට වූ අපගේ පාසල් භූමිය ඉගෙනීමට ඉතා සුදුසු පරිසරයක් නිර්මාණය කරයි. කුඩා ආරම්භයක සිට ප්‍රමුඛ පෙළේ අධ්‍යාපන ආයතනයක් දක්වා වූ අපගේ ගමන, අපගේ කාර්ය මණ්ඩලයේ කැපවීම සහ සිසුන්ගේ දක්ෂතාවයට සාක්ෂියකි.",

    // Footer
    footer_search_placeholder: "ඕනෑම දෙයක් සොයන්න...",
    footer_search_btn: "සොයන්න"
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'si' : 'en'));

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      <Router>
        <div className={`App ${lang === 'si' ? 'si-font' : ''}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LangContext.Provider>
  );
}

export default App;