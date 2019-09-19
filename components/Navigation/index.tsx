import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navigation = () => {
    return (
        <nav>
            <AppBar>
                <Toolbar>
                    <Typography variant='h4'>Lawyer</Typography>
                </Toolbar>
            </AppBar>
            Some navigation
        </nav>
    )
}

export default Navigation;