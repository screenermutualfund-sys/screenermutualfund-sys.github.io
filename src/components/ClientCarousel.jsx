import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import './ClientCarousel.css';

const clients = [
    { name: "Swathi Group of Hotels", logo: null },
    { name: "HTC Global Services", logo: "/logos/htc.png" },
    { name: "Ohris Group", logo: "/logos/ohris.png" },
    { name: "Corporation Bank", logo: "/logos/corpbank.png" }, // Using user uploaded logo
    { name: "Pista House", logo: "/logos/pista.png" },
    { name: "RA CHEM Pharma", logo: "/logos/rachem.png" },
    { name: "Nandini Group", logo: null },
    { name: "Udupi Ahaar", logo: null },
    { name: "Suprabath Group", logo: null },
    { name: "Hotel NKM’s Grand", logo: null },
    { name: "Zuari Cement", logo: "/logos/zuari.png" },
    { name: "AMD", logo: "/logos/amd.png" },
    { name: "Yatri Nivas", logo: null },
    { name: "Vasavi Engineering College", logo: "/logos/vasavi.png" },
    { name: "Megasoft Technologies", logo: "/logos/megasoft.png" }
];

const ClientCard = ({ client }) => {
    const [imgError, setImgError] = useState(false);

    // Specific logos that need to be larger to match others visually
    const isSmallLogo = client.name === "HTC Global Services" || client.name === "Ohris Group" || client.name === "Zuari Cement";

    // Specific logos that need to be smaller (AMD is too big)
    const isLargeLogo = client.name === "AMD";

    let logoClass = "client-logo";
    if (isSmallLogo) logoClass += " logo-enlarged";
    if (isLargeLogo) logoClass += " logo-reduced";

    return (
        <div className="client-card" title={client.name}>
            {client.logo && !imgError ? (
                <>
                    <img
                        src={client.logo}
                        alt={client.name}
                        className={logoClass}
                        onError={() => setImgError(true)}
                    />
                    <div className="client-tooltip">{client.name}</div>
                </>
            ) : (
                <div className="client-fallback">
                    <Building2 size={24} className="client-icon" />
                    <span className="client-text">{client.name}</span>
                </div>
            )}
        </div>
    );
};

const ClientCarousel = () => {
    return (
        <section className="section bg-white client-section">
            <div className="container text-center">
                <h2 className="section-title">Trusted By Industry Leaders</h2>
                <p className="section-subtitle">Delivering excellence to 400+ satisfied clients</p>

                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {/* Triple the list for smoother infinite loop on wide screens */}
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <div key={index} className="client-slide">
                                <ClientCard client={client} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
