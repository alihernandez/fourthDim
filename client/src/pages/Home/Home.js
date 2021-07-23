import React from 'react';
import fourthDim from '../../images/fourthDimStore.jpeg';
import milivy from '../../images/milesivy.jpeg';
import './Home.css';

const Home = () => {
    return(
        <div className="homeMain">
            <div className="homeContent">
            <h1>Home Page</h1>
            <img src={ fourthDim } alt="storePic" className="storeClothes"/>
            <h2>About:</h2>
            <p>Busey ipsum dolor sit amet. You gotta go through it to see there ain't nothing to it.Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing.
</p>
            <img src={ milivy } alt="mils" className="owners" />
            <h2>Contact:</h2>
            <p>contact info here</p>

            </div>
            
        </div>
    );
};

export default Home;