import React from 'react';
import {MainDiv} from './MainLayout';
import Header from './Header';
import Landing from './Landing';

const Home = ({theme, onToggleTheme}) => {
    return (
        <MainDiv>
            <Header
                theme={theme}
                onToggleTheme={onToggleTheme}
            />
            <Landing theme={theme}/>
        </MainDiv>
    )
}

export default Home
