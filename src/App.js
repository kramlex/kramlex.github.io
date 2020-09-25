import React, {useState} from 'react';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './global';
import {darkTheme, lightTheme} from './theme';
import Main from './components/MainLayout';

function App() {
    const [theme, setTheme] = useState('light')
    const onToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
            <GlobalStyles theme={theme === 'light' ? lightTheme : darkTheme} />
            <Main
                theme={theme}
                onToggleTheme={onToggleTheme}
            />
        </ThemeProvider>
    )
}

export default App;
