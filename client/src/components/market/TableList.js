import React from 'react';
import styled from 'styled-components';
import TableItem from 'components/market/TableItem';
import Responsive from 'components/common/general/Responsive';
import { withRouter } from 'react-router-dom';

const TableListBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const TableListWrapper = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightestest-steel);

    padding: 0 1rem;
`;

const TableList = ({ coinArr, gbpRate }) => {

    // testing
    const coinTableNode = coinArr.map((val, index) => {
        if (val !== null) { return <TableItem key={index} coin={val} gbpRate={gbpRate} /> }
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