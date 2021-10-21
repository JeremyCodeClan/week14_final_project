import React from 'react';
import styled from 'styled-components';
import Reponsive from 'components/common/Responsive';
import TableItem from 'components/market/TableItem';
import { withRouter } from 'react-router-dom';

const TableListBlock = styled(Reponsive)`
    margin-top: 2rem;
`;

const TableListWrapper = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightestest-steel);

    padding: 0 1rem;
`;

const TableList = ({ bts_usdt, eth_usdt, sol_usdt, dot_usdt, doge_usdt }) => {

    const coinArr = [bts_usdt, eth_usdt, sol_usdt, dot_usdt, doge_usdt];

    // testing
    const coinTableNode = coinArr.map((val, index) => {
        return (<TableItem key={index} coin={val} />)
    })

    return (
        <TableListBlock>
            <TableListWrapper>
                {coinTableNode}
            </TableListWrapper>
        </TableListBlock>
    )
}

export default withRouter(TableList);