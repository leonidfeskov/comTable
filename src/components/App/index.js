import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ComparisonTable from '../ComparisonTable';
import Summary from '../Summary';

function App() {
    return (
        <Container maxWidth="lg">
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <ComparisonTable />
                    </Grid>
                    <Grid item xs={4}>
                        <Summary />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;
