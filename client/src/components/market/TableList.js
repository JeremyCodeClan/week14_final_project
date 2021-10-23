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

const TableList = (props) => {

    // testing
    const coinTableNode = props.coinArr.map((val, index) => {
        if (val !== null) { return <TableItem key={index} coin={val} /> }
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