import React from 'react';
import Status from 'components/asset/Status'

const StatusContainer = ({ 
        profile, gbpRate, myAssets, coinProductIdArr,
        customName, customIcon, customCurrency 
    }) => {

    return (
        <>
            <Status 
                profile={profile} myAssets={myAssets} gbpRate={gbpRate} coinProductIdArr={coinProductIdArr}
                customName={customName} customIcon={customIcon} customCurrency={customCurrency}
            />
        </>        

    )
}

export default StatusContainer;