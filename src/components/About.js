import React from 'react';
import Photo from '../photos/me.png'

const About = () => {
    return (
        <div className='about'>
            <img className='my-photo' src={Photo} alt=''/>
            <h1 className='page-headers'>About Me</h1>
            <p>Ever since I found my passion for coding, I haven't been able to quench the thirst for learning more. The first programming language I started with was C++ and it was then that I decided programming was one of the coolest things ever. I have since put a lot of focus in JavaScript, while also looking into other programming languages and their awesome potential.</p>
        </div>
    );
};

export default About;