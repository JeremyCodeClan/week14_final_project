import React from 'react';
import Price from 'components/chart/Price';

const PriceContainer = ({ openRef, closeRef, highRef, lowRef }) => {
    return (
        <Price 
            openRef={openRef} 
            closeRef={closeRef} 
            highRef={highRef} 
            lowRef={lowRef}
        />
    )
}

export default PriceContainer;