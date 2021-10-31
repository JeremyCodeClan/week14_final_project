import React from 'react';
import Price from 'components/chart/Price';

const PriceContainer = ({ coinCode, openRef, closeRef, highRef, lowRef }) => {
    return (
        <Price 
            coinCode={coinCode}
            openRef={openRef} 
            closeRef={closeRef} 
            highRef={highRef} 
            lowRef={lowRef}
        />
    )
}

export default PriceContainer;