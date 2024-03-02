import React, { useState } from 'react';
import { Button, Select, MenuItem, Grid, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PrisonersDilemma = () => {
    const [highlight, setHighlight] = useState('');
    const [player1Strategy, setPlayer1Strategy] = useState('');
    const [player2Strategy, setPlayer2Strategy] = useState('');

    const revealResults = () => {
        let payoff;
        if (player1Strategy === "Cooperate" && player2Strategy === "Cooperate") {
            payoff = "(2,2)";
        } else if (player1Strategy === "Defect" && player2Strategy === "Defect") {
            payoff = "(1,1)";
        } else if (player1Strategy === "Cooperate" && player2Strategy === "Defect") {
            payoff = "(0,3)";
        } else if (player1Strategy === "Defect" && player2Strategy === "Cooperate") {
            payoff = "(3,0)";
        }

        setHighlight(payoff);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2>Prisoner's Dilemma</h2>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Player 1 Strategy</InputLabel>
                    <Select value={player1Strategy} onChange={e => setPlayer1Strategy(e.target.value)}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Cooperate">Cooperate</MenuItem>
                        <MenuItem value="Defect">Defect</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Player 2 Strategy</InputLabel>
                    <Select value={player2Strategy} onChange={e => setPlayer2Strategy(e.target.value)}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Cooperate">Cooperate</MenuItem>
                        <MenuItem value="Defect">Defect</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={revealResults}>Reveal Results</Button>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Cooperate</TableCell>
                                <TableCell>Defect</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">Cooperate</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(2,2)' ? 'yellow' : ''}}>(2,2)</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(0,3)' ? 'yellow' : ''}}>(0,3)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Defect</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(3,0)' ? 'yellow' : ''}}>(3,0)</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(1,1)' ? 'yellow' : ''}}>(1,1)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default PrisonersDilemma;
