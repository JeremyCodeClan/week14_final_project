import React from 'react';
import styled from 'styled-components';
import AssetTableItem from './AssetTableItem';
import Responsive from 'components/common/general/Responsive';
import { withRouter } from 'react-router-dom';

const AsssetTableListBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const AssetTableListWrapper = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightestest-steel);

    padding: 0 1rem;
`;

const AssetTableList = ({ myAssets, coinProductIdArr, gbpRate }) => {
    
    let dailyTotal = 0;
    if (coinProductIdArr !== []) {
        coinProductIdArr.forEach((one, i) => {
            if (myAssets[one]['currentTotal'] !== null) {
                dailyTotal += parseFloat(myAssets[one]['currentTotal']);
            }
        })
    }

    const coinTableNode = coinProductIdArr.map((coin, index) => {
        if (
            coin !== null && 
            myAssets[coin]['currentValue'] !== null && 
            myAssets[coin]['openValue'] !== null &&
            myAssets[coin]['currentTotal'] !== null &&
            myAssets[coin]['openTotal'] !== null
            ) {
            const assetObj = {
                name: myAssets[coin]['name'], 
                amount: myAssets[coin]['amount'],
                fullname: myAssets[coin]['fullname'],
                product_id: myAssets[coin]['product_id'],
                currentValue: myAssets[coin]['currentValue'],
                openValue: myAssets[coin]['openValue'],
                currentTotal: myAssets[coin]['currentTotal'],
                openTotal: myAssets[coin]['openTotal'],
            }
            return <AssetTableItem key={index} gbpRate={gbpRate} assetObj={assetObj} coinProductIdArr={coinProductIdArr} dailyTotal={dailyTotal} /> 
            }
    })

    return (
        <AsssetTableListBlock>
            <AssetTableListWrapper>
                {coinTableNode}
            </AssetTableListWrapper>
        </AsssetTableListBlock>
    )
}

export default withRouter(AssetTableList);