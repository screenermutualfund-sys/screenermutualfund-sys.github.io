import React from 'react';

const About = () => {
    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>About Us</h1>
                    <p className="text-secondary" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
                        A company of caring professional people, delivering only the best class of service.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '4rem' }}>

                    {/* Mission & Vision */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div className="bg-off-white" style={{ padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                            <h2 className="text-primary" style={{ marginBottom: '1rem' }}>Our Mission</h2>
                            <p>
                                At Industrial Pest Control Services, it is our mission to provide the highest quality service of
                                unmatched value to our clients through the efforts of a highly dedicated, trained and productive
                                workforce who share a commitment to long term growth and success of the company.
                            </p>
                        </div>
                        <div className="bg-off-white" style={{ padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary-light)' }}>
                            <h2 className="text-primary" style={{ marginBottom: '1rem' }}>Our Vision</h2>
                            <p>
                                To be a company of caring professional people, delivering only the best class of service.
                            </p>
                        </div>
                    </div>

                    {/* History */}
                    <div>
                        <h2 className="text-primary" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Our History</h2>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Since its founding in Hyderabad in 1982, Industrial Pest Control Services has become one of the
                            leading firm rendering the Pest Control Services in and around Hyderabad and Secunderabad.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We are also one amongst the few Pest Control firms in Hyderabad that provides <strong>“Green Pest Management”</strong> using “natural” pesticides.
                            With a rich experience, a committed team of diligent and experts we are capable of catering our services to the various clients spread widely.
                        </p>
                        <p>
                            On the request of the clients, if required, we as a firm provide the Certificate of the Service, that
                            will hold good for the time period mentioned in the certificate.
                        </p>
                    </div>

                    {/* People & Purpose */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div className="bg-off-white" style={{ padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                            <h2 className="text-primary" style={{ marginBottom: '1rem' }}>Our People</h2>
                            <p>
                                We make sure that we have the right people for the right job and the right attitude to getting it
                                done. So when we say that IPCS is a caring company delivering only the best class of service, we
                                really mean it!
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Our team of experts has in-depth knowledge and hands-on experience in their respective domains.
                                Our service is based on the principles of <strong>Integrated Pest Management (IPM)</strong>,
                                executed by trained pest management professionals (PMPs).
                            </p>
                        </div>
                        <div className="bg-off-white" style={{ padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-primary-light)' }}>
                            <h2 className="text-primary" style={{ marginBottom: '1rem' }}>Our Purpose</h2>
                            <p>
                                We work smart to manage our operations with care for the health, cleanliness, safety and
                                prosperity of our employees, customers, communities and the environment. Through systems
                                review and open communications, we work to continuously improve outcomes and build
                                reliable future generation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
