import React from 'react';
import './ClientCarousel.css';

const clients = [
    "Swathi Group of Hotels", "HTC Global Services", "Ohris Group",
    "Corporation Bank", "Pista House", "RA CHEM Pharma",
    "Nandini Group", "Udupi Ahaar", "Suprabath Group",
    "Hotel NKM’s Grand", "Zuari Cement", "AMD",
    "Yatri Nivas", "Vasavi Engineering College", "Megasoft Technologies"
];

const ClientCarousel = () => {
    return (
        <section className="section bg-white client-section">
            <div className="container text-center">
                <h2 className="section-title">Trusted By Industry Leaders</h2>
                <p className="section-subtitle">Delivering excellence to 400+ satisfied clients</p>

                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {/* Double the list for seamless loop */}
                        {[...clients, ...clients].map((client, index) => (
                            <div key={index} className="client-slide">
                                <span className="client-name">{client}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
