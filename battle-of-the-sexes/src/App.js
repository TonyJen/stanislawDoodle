import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BattleOfTheSexes from './BattleOfTheSexes';
import PrisonersDilemma from './PrisonersDilemma';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#red',
        },
        background: {
            default: '#fff',
        },
    },
});

const App = () => {
    // ...
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/battle-of-the-sexes">Battle of the Sexes</Link>
                            </li>
                            <li>
                                <Link to="/prisoners-dilemma">Prisoner's Dilemma</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/battle-of-the-sexes" element={<BattleOfTheSexes />} />
                        <Route path="/prisoners-dilemma" element={<PrisonersDilemma />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
