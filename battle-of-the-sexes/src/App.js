import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, Container, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    { text: 'Battle of the Sexes', path: '/battle-of-the-sexes' },
                    { text: 'Prisoner\'s Dilemma', path: '/prisoners-dilemma' }
                ].map((item, index) => (
                    <ListItem button key={item.text} component={Link} to={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
                <Container maxWidth="md">
                    <Box my={4}>
                        <Routes>
                            <Route path="/battle-of-the-sexes" element={<BattleOfTheSexes />} />
                            <Route path="/prisoners-dilemma" element={<PrisonersDilemma />} />
                        </Routes>
                    </Box>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;