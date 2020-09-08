import React from 'react';
import Container from '@material-ui/core/Container';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <Container maxWidth="lg">
                Copyright © Leonid Feskov 2020.
            </Container>
        </div>
    );
}
