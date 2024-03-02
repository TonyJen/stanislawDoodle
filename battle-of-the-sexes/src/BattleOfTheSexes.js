import React, { useState } from 'react';
import { Button, Select, MenuItem, Grid, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BattleOfTheSexes = () => {
    const [highlight, setHighlight] = useState('');
    const [player1Strategy, setPlayer1Strategy] = useState('');
    const [player2Strategy, setPlayer2Strategy] = useState('');

    const revealResults = () => {
        let payoff;
        if (player1Strategy === "Opera" && player2Strategy === "Opera") {
            payoff = "(2,1)";
        } else if (player1Strategy === "Football" && player2Strategy === "Football") {
            payoff = "(1,2)";
        } else if (player1Strategy === "Opera" && player2Strategy === "Football") {
            payoff = "(0,0)";
        } else if (player1Strategy === "Football" && player2Strategy === "Opera") {
            payoff = "(0,0)";
        }

        setHighlight(payoff);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2>Battle of the Sexes</h2>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Player 1 Strategy</InputLabel>
                    <Select value={player1Strategy} onChange={e => setPlayer1Strategy(e.target.value)}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Opera">Opera</MenuItem>
                        <MenuItem value="Football">Football</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Player 2 Strategy</InputLabel>
                    <Select value={player2Strategy} onChange={e => setPlayer2Strategy(e.target.value)}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Opera">Opera</MenuItem>
                        <MenuItem value="Football">Football</MenuItem>
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
                                <TableCell>Opera</TableCell>
                                <TableCell>Football</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">Opera</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(2,1)' ? 'yellow' : ''}}>(2,1)</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(0,0)' ? 'yellow' : ''}}>(0,0)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Football</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(0,0)' ? 'yellow' : ''}}>(0,0)</TableCell>
                                <TableCell style={{backgroundColor: highlight === '(1,2)' ? 'yellow' : ''}}>(1,2)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default BattleOfTheSexes;