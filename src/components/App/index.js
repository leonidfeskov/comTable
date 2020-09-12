import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../Header';
import Footer from '../Footer';
import ComparisonTable from '../ComparisonTable';
import Summary from '../Summary';
import Loading from '../Loading';

import './App.scss';

function App() {
    const loading = useSelector(({ loading }) => loading);
    return (
        <div className="container">
            <div className="main">
                <Header />
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <ComparisonTable />
                        </Grid>
                        <Grid item xs={12} sm={8} md={4} lg={4}>
                            <Summary />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer />
            {loading && <Loading />}
        </div>
    );
}

export default App;
