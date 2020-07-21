import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ComparisonTable from '../ComparisonTable';
import Summary from '../Summary';

function App() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom>
                Прими решение
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ComparisonTable />
                </Grid>
                <Grid item xs={4}>
                    <Summary />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
