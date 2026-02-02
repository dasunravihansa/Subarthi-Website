import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import ScrollAnimation from '../components/ScrollAnimation';
import contactBg from '../images/b2.jpg';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function ContactUs() {
    const { t } = useContext(LangContext);

    return (
        <div className="contact-us-page">

            {/* 1. Header Section (Style of SchoolHistorySection) */}
            <ScrollAnimation>
                <section className="history-section" style={{ backgroundImage: `url(${contactBg})` }}>
                    <div className="history-overlay">
                        <div className="history-content">
                            <h2 className="section-title history-title">{t.contact || "Contact Us"}</h2>
                            <p className="history-text">
                                We are here to answer your questions and help you on your educational journey.
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>

            {/* 2. Contact Cards Section (Style of VisionMissionSection) */}
            <ScrollAnimation>
                <section className="vm-section">
                    <div className="vm-container" style={{ flexWrap: 'wrap' }}>
                        {/* Address Card */}
                        <div className="vm-card vision">
                            <div className="vm-icon-box">
                                <MapPin size={32} />
                            </div>
                            <h3 className="vm-title">Visit Us</h3>
                            <p className="vm-text">
                                Kurunegala Road,<br />
                                Kuliyapitiya, Sri Lanka
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="vm-card mission">
                            <div className="vm-icon-box">
                                <Phone size={32} />
                            </div>
                            <h3 className="vm-title">Call Us</h3>
                            <p className="vm-text">
                                0372 281 356<br />
                                Mon-Fri, 8am - 4pm
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="vm-card vision">
                            <div className="vm-icon-box">
                                <Mail size={32} />
                            </div>
                            <h3 className="vm-title">Email Us</h3>
                            <p className="vm-text" style={{ wordBreak: 'break-all' }}>
                                assaddunaasv@gmail.com
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>

            {/* 3. Form & Map Section (Style of PrincipalSection) */}
            <ScrollAnimation>
                <section className="principal-section">
                    <div className="principal-container" style={{ alignItems: 'flex-start' }}>

                        {/* Left: Map (Mimics Principal Image) */}
                        <div className="principal-img-box" style={{ minHeight: '1000px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.270379268664!2d80.0416667!3d7.4352778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae339684615781d%3A0xdac7eadd0e80bd15!2sAssadduma%20Subharthi%20Vidyalaya!5e0!3m2!1sen!2slk!4v1701660000000!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0, width: '100%', height: '100%', borderRadius: '30px', boxShadow: '20px 20px 0px #f3f4f6' }}
                                allowFullScreen="true"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Right: Form (Mimics Principal Content) */}
                        <div className="principal-content">
                            <span className="sub-heading">GET IN TOUCH</span>
                            <h2 className="principal-heading">Send a Message</h2>
                            <div className="quote-box">
                                <p className="quote-text" style={{ fontStyle: 'normal' }}>
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form action="https://formsubmit.co/rasindu076@gmail.com" method="POST" style={{ display: 'grid', gap: '20px' }}>
                                <input type="hidden" name="_captcha" value="false" />

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontFamily: '"Outfit", sans-serif' }}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #e5e7eb', fontFamily: '"Lato", sans-serif' }}
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontFamily: '"Outfit", sans-serif' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #e5e7eb', fontFamily: '"Lato", sans-serif' }}
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontFamily: '"Outfit", sans-serif' }}>Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #e5e7eb', fontFamily: '"Lato", sans-serif', resize: 'none' }}
                                        placeholder="How can we help?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ marginTop: '10px' }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}

export default ContactUs;
