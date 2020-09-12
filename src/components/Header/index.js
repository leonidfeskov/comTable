import React from 'react';
import Container from '@material-ui/core/Container';

import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <Container maxWidth="lg">
                <div className="header-logo" />
            </Container>
        </div>
    );
}
