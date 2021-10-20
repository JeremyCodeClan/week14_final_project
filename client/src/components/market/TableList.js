import React from 'react';
import styled from 'styled-components';
import Reponsive from 'components/common/Responsive';
import TableItem from 'components/market/TableItem';

const TableListBlock = styled(Reponsive)`
    margin-top: 3rem;
`;

const TableListWrapper = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightestest-steel);

    padding: 0 1rem;
`;

const TableList = ({ bts_usd, eth_usd }) => {
    
    const testingArr = [...Array(5).keys()];
    const btcTableNode = testingArr.map((val, index) => {
        return (<TableItem key={index} coin={bts_usd} />)
    })
    const ethTableNode = testingArr.map((val, index) => {
        return (<TableItem key={index} coin={eth_usd} />)
    })

    return (
        <TableListBlock>
            <TableListWrapper>
                {btcTableNode}
                {ethTableNode}
            </TableListWrapper>
        </TableListBlock>
    )
}

export default TableList;