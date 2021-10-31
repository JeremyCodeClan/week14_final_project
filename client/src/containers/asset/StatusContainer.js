import React from 'react';
import Status from 'components/asset/Status'

const StatusContainer = ({ profile, gbpRate, myAssets, coinProductIdArr }) => {

    return (
        <>
            <Status profile={profile} myAssets={myAssets} gbpRate={gbpRate} coinProductIdArr={coinProductIdArr} />
        </>        

    )
}

export default StatusContainer;