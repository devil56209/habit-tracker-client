import React from 'react';
import HeroBanner from './HeroBanner';
import WhyHabits from './WhyHabits';

const Home = () => {
    return (
        <div>
            
            <section className='bg-cover'>
                    <HeroBanner></HeroBanner>
            </section>
            <section>
                <WhyHabits></WhyHabits>
            </section>
            
            
        </div>
    );
};

export default Home;