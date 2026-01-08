import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';

import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';

const blogData = [
    {
        id: 1,
        title: "The Pest Control Partnership: 40 Years of Doing It Right",
        category: "Our Philosophy & Approach",
        date: "Jan 15, 2026",
        author: "Founder",
        image: blog1,
        excerpt: "After four decades in this industry, I have learned one undeniable truth: quick fixes do not last. Real pest control isn't just about spraying chemicals.",
        content: `
            <p>After four decades in this industry, I have learned one undeniable truth: quick fixes do not last. Real pest control isn't just about spraying chemicals; it is about understanding nature and protecting your property for the long term.</p>
            
            <p>We have survived in this business for over 40 years because we build trust. We don't cut corners. We use only the highest quality materials available. Why? Because cheap materials fail. When materials fail, pests return, and you become frustrated. We use products that are proven to work effectively and safely.</p>
            
            <p>Our process is simple but thorough. We inspect first. We listen to your concerns. Then, we design a plan specifically for your situation. We execute that plan with precision.</p>
            
            <p>However, effective pest control is a shared responsibility. We bring the expertise and the best tools. You bring the daily maintenance. We need you to fix leaky faucets, seal up food, and keep clutter down. When we work together, we create an environment where pests cannot thrive. We are your partners in protecting your home.</p>
        `
    },
    {
        id: 2,
        title: "Protecting Your Home: A Structured Approach to Residential Pests",
        category: "Residential Services",
        date: "Jan 12, 2026",
        author: "Senior Technician",
        image: blog2,
        excerpt: "Your home is your sanctuary. In my 40 years of experience, I have seen how quickly an infestation can steal your peace of mind. We are here to restore it.",
        content: `
            <p>Your home is your sanctuary. In my 40 years of experience, I have seen how quickly an infestation can steal your peace of mind. We are here to restore it.</p>

            <p>When we treat a home, we don't guess. We follow a proven structure to ensure nothing is missed.</p>

            <p>First, we conduct a complete interior and exterior inspection. We look for entry points that others might miss. Second, we create a customized treatment plan based on the specific pests we find. Third, we apply high-grade treatments, focusing on the exterior perimeter to stop bugs before they get inside. We use materials designed for long-lasting residential protection.</p>

            <p>We also believe in honesty. We will tell you what you need to do to help. This is shared responsibility. Simple things like trimming bushes away from the house and keeping trash cans sealed make a huge difference. We do our part with the best materials, and you do yours with sanitation. Together, we keep your home safe.</p>
        `
    },
    {
        id: 3,
        title: "Protecting Your Business Reputation: Discreet and Effective Solutions",
        category: "Commercial Services",
        date: "Jan 08, 2026",
        author: "Commercial Lead",
        image: blog3,
        excerpt: "It only takes one pest sighting to ruin a business's reputation. If you run a restaurant, warehouse, or office, you cannot afford that risk.",
        content: `
            <p>I have seen it happen too many times in my career: it only takes one pest sighting to ruin a business's reputation. If you run a restaurant, warehouse, or office, you cannot afford that risk.</p>

            <p>Commercial pest control requires a different level of competence. It demands discretion and rigorous documentation. We understand this deeply.</p>

            <p>Our process starts with a zero-tolerance audit. We identify vulnerable areas in your facility. We then implement a tailored plan using industrial-strength, high-quality materials designed for heavy-duty commercial environments. We schedule services during off-hours to avoid disrupting your operations.</p>

            <p>But we need your help. Pest control is a shared responsibility, especially in commercial settings. Your staff must be trained on proper sanitation protocols and reporting procedures. If a door sweep is broken, it needs to be fixed immediately. We provide the barrier; your team maintains the discipline. We are your partners in regulatory compliance and brand protection.</p>
        `
    },
    {
        id: 4,
        title: "Defending Your Investment: Long-Term Termite Solutions",
        category: "Termite Protection",
        date: "Jan 05, 2026",
        author: "Termite Specialist",
        image: blog4,
        excerpt: "Termites are silent destroyers. By the time you see them, the damage is usually severe. You cannot gamble with termite protection.",
        content: `
            <p>In over 40 years, I have seen termites cause devastating financial damage to good people. Termites are silent destroyers. By the time you see them, the damage is usually severe.</p>

            <p>You cannot gamble with termite protection. This is why we only use top-tier, proven termiticides and baiting systems. Cheaper alternatives break down too quickly in the soil. We use materials that create a lasting barrier around your foundation.</p>

            <p>Our process is incredibly detailed.</p>
            <ul>
                <li>We perform a deeply thorough inspection of your foundation, basement, and crawlspace.</li>
                <li>We determine the best treatment method—either liquid trenching or advanced bait stations.</li>
                <li>We apply the materials meticulously, ensuring no gaps exist in the protective zone.</li>
            </ul>

            <p>We also need you to manage moisture. Termites love water. As part of shared responsibility, you must ensure gutters drain away from the house and that there are no plumbing leaks. We build the fortress, but you must keep the moat dry.</p>
        `
    },
    {
        id: 5,
        title: "Rodent Control: It’s Not About Traps, It’s About Exclusion",
        category: "Rodent Exclusion",
        date: "Dec 28, 2025",
        author: "IPCS Expert",
        image: blog5,
        excerpt: "Many people think rodent control is just setting a few snap traps. If you don't close the door, they will just keep coming in.",
        content: `
            <p>Many people think rodent control is just setting a few snap traps. In my four decades of experience, I can tell you that is barely half the job. If you don't close the door, they will just keep coming in.</p>

            <p>Rats and mice carry diseases and chew wires. They are a serious threat. Our approach focuses on "exclusion"—keeping them out physically.</p>

            <p>We start with a detective's eye. We inspect your entire property to find entry points the size of a dime. We know exactly where to look. Once identified, we use high-quality, durable materials like steel wool, metal flashing, and industrial sealant to close those holes permanently. These materials cannot be chewed through. Only after sealing the exterior do we focus on trapping the remaining rodents inside.</p>

            <p>This is where shared responsibility is critical. You must eliminate attractants. Don't leave pet food outside. Clean up fallen fruit in the yard. If you stop feeding them and we stop them from entering, the problem is solved.</p>
        `
    },
    {
        id: 6,
        title: "A Promise Backed by 40 Years: Understanding Our Guarantee and Your Role",
        category: "Warranty & Partnership",
        date: "Dec 15, 2025",
        author: "Management",
        image: blog6,
        excerpt: "We stand firmly behind the quality of our work. However, honesty is the foundation of trust. Pest control is a shared responsibility.",
        content: `
            <p>In my 40-plus years in the pest control industry, I have learned that peace of mind is the most valuable thing we offer. You need to know that when you hire us, the job is done right.</p>

            <p>We stand firmly behind the quality of our work. Because we follow structured processes and use only high-quality, proven materials, we offer a one-year guarantee on most of our major services, such as termite protection and rodent exclusion.</p>

            <p>However, honesty is the foundation of trust. We must be clear that we cannot offer this same one-year guarantee for mosquito and cockroach treatments. This is not because our products are weak; it is because these pests are heavily influenced by daily sanitation.</p>

            <p>Pest control is a shared responsibility. It is a partnership between our expertise and your household maintenance.</p>

            <p>No matter how accurate, professional, or potent our service is, pests will return if the environment invites them back. For example, if stagnant water is left sitting in plant saucers or buckets outdoors, it will inevitably attract new mosquitoes within days of our treatment. Similarly, if garbage is allowed to pile up indoors or crumbs are left on counters, you cannot expect cockroaches to stay away.</p>

            <p>The purpose of our warranty is to ensure that we have done everything correctly on our end. It is our promise of competence. If we make a mistake in our application or slip up on any of our promises, we will return to fix the issue. We will do this free of cost, with absolutely no extra charges to you.</p>

            <p>We commit to providing the best defensive barrier possible using top-tier materials. We ask you to commit to maintaining a clean environment so that barrier can do its job. When we work together as partners, your home stays protected.</p>
        `
    }
];

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    // Scroll to top when opening a post or going back
    const handleViewPost = (post) => {
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setSelectedPost(null);
        window.scrollTo(0, 0);
    };

    if (selectedPost) {
        return (
            <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
                <div className="container">
                    <article className="blog-detail fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <button
                            onClick={handleBack}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-primary)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem',
                                padding: 0
                            }}
                        >
                            <ArrowLeft size={18} /> Back to Articles
                        </button>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                background: 'var(--color-bg-off-white)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '50px',
                                color: 'var(--color-primary)',
                                fontWeight: 700,
                                fontSize: '0.85rem'
                            }}>
                                {selectedPost.category}
                            </span>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
                            {selectedPost.title}
                        </h1>

                        <div style={{ display: 'flex', gap: '2rem', color: '#718096', marginBottom: '2rem', fontSize: '0.95rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {selectedPost.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={18} /> {selectedPost.author}</span>
                        </div>

                        {/* Detail View Image */}
                        <div style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '500px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '3rem',
                            boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    maxHeight: '500px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        <div
                            className="blog-content"
                            style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#2D3748' }}
                            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        />
                    </article>
                </div>
            </div>
        );
    }

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>Knowledge Hub</h1>
                    <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Expert insights, safety tips, and industry updates from Hyderabad's leading pest control specialists.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {blogData.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handleViewPost(post)}
                            style={{
                                background: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-border)',
                                transition: 'all 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer'
                            }}
                            className="hover-card"
                        >
                            {/* Card Image */}
                            <div style={{
                                width: '100%',
                                height: '220px',
                                borderBottom: '1px solid #E2E8F0',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s'
                                    }}
                                />
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: '#718096' }}>
                                    <span style={{
                                        background: 'var(--color-bg-off-white)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        color: 'var(--color-primary)',
                                        fontWeight: 600
                                    }}>
                                        {post.category}
                                    </span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    marginBottom: '1rem',
                                    color: 'var(--color-primary)',
                                    fontWeight: 700,
                                    lineHeight: 1.4
                                }}>
                                    {post.title}
                                </h3>
                                <p style={{ color: '#4A5568', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                    {post.excerpt}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#4A5568' }}>
                                        <Calendar size={14} /> {post.date}
                                    </span>
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}>
                                        Read Full Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
