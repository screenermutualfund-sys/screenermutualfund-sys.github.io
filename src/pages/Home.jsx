import React from 'react';
import Hero from '../components/Hero';
import TrustPillars from '../components/TrustPillars';
import ERDStrategy from '../components/ERDStrategy';
import ClientCarousel from '../components/ClientCarousel';
import { Quote } from 'lucide-react';

const Testimonials = () => (
    <section className="section bg-off-white">
        <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">Real feedback from our partners</p>
            </div>
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <Quote size={32} className="text-primary" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                        <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: '#4A5568' }}>
                            "IPCS has been maintaining our facility for over 10 years. Their prevent-first approach has saved us significant costs and kept us audit-ready at all times."
                        </p>
                        <div className="author">
                            <strong style={{ display: 'block', color: '#002B5B' }}>Facility Manager</strong>
                            <span style={{ fontSize: '0.9rem', color: '#718096' }}>Leading Hotel Chain, Hyderabad</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <>
            <Hero />
            <TrustPillars />
            <ERDStrategy />
            <ClientCarousel />
            <Testimonials />
        </>
    );
};

export default Home;
