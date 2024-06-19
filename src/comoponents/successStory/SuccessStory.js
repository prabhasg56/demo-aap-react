import React from 'react';
import './SuccessStory.css';

const SuccessStory = () => {
    const stories = [
        {
            name: 'Sameer S.',
            title: 'Entrepreneur',
            quote: 'Mind Mastery Mechanism 2.0 is not just a program—it’s a revelation. My ability to lead with clarity and innovation has dramatically improved. Under Chirag’s guidance, I’ve not only met my personal and professional goals earlier than expected, I’ve set new, higher ones. This program will challenge and change you.',
        },
        {
            name: 'Himanshu K.',
            title: 'Vice President',
            quote: 'I was skeptical about another "growth" program, but Mind Mastery Mechanism 2.0 has been all about results. Chirag’s unique blend of psychological insight and practical strategies has enabled me to not only meet but exceed my ambitious business goals while improving my health and reconnecting with my family.',
        },
        {
            name: 'Shinoy K.',
            title: 'General Manager',
            quote: 'I entered the program hoping to get a few tips on leadership and personal growth but I came out with a revolutionary new way of thinking. Chirag’s approach has deeply impacted how I engage with people around me, bringing about a level of balance and success I didn’t think was possible.',
        }
    ];

    return (
        <div className="success-story-container">
            <h1 className="title">SUCCESS STORIES</h1>
            <div className="stories-carousel">
                {stories.map((story, index) => (
                    <div className="story-card" key={index}>
                        <h3>{story.name}</h3>
                        <h4>{story.title}</h4>
                        <p>{story.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessStory;
