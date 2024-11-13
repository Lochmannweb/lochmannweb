"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
};

const SplineContainer = styled.div({
    width: '100%',
    height: '100vh',
    marginTop: '-3rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        marginLeft: '10rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
        marginLeft: '22rem',
    },
});

const SplineFigure = () => {
    const [isSplineActive, setIsSplineActive] = useState(false);

    // Håndter "mousedown" for at aktivere figuren
    const handleMouseDown = () => {
        setIsSplineActive(true);
    };

    // Håndter "mouseup" for at deaktivere figuren
    const handleMouseUp = () => {
        setIsSplineActive(false);
    };

    return (
        <SplineContainer
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ overflow: isSplineActive ? 'auto' : 'hidden' }}
        >
            <Spline 
                className="Logo"
                scene="https://prod.spline.design/H02D-OFRDkl38SQg/scene.splinecode"
                style={{ pointerEvents: isSplineActive ? 'auto' : 'none' }}
            />
        </SplineContainer>
    );
};

export default SplineFigure;

