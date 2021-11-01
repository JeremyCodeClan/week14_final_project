import React from 'react';
import styled from 'styled-components';
import TableItem from 'components/market/TableItem';
import Responsive from 'components/common/general/Responsive';
import { withRouter } from 'react-router-dom';

const TableListBlock = styled(Responsive)`
    margin-top: 2rem;
`;
const TableListWrapper = styled.article`
    padding: 0 1rem 4rem;
`;
const TableMenuBlock = styled.section`
    height: 3rem;
`;
const TableMenuWrapper = styled.div`
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-evenly;
    background: var(--brightest-white);
    .testText { color: var(--darkest-orange); }
    .menu-image-block {
        display: flex;
        width: 40%;
    }
    .image-block, .coinName-block { 
        width: 50%;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .image-block {
        align-items: center;
        margin-right: 3rem;
        justify-content: end;
    }
    .menu-price-block, .menu-percent-block, .menu-vol-block { 
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


const TableList = ({ coinArr, gbpRate }) => {

    // testing
    const coinTableNode = coinArr.map((val, index) => {
        if (val.value !== null) { return <TableItem key={index} coin={val} gbpRate={gbpRate} /> }
    })

    return (
        <TableListBlock>
            <TableListWrapper>
                <TableMenuBlock>
                    <TableMenuWrapper>
                        <div className="menu-image-block">
                            <div className="image-block testText">Logo</div>
                            <div className="coinName-block testText">Name</div>
                        </div>
                        
                        <div className="menu-price-block">
                            <div className="testText">R-T Price (£)</div>
                        </div>
                        <div className="menu-percent-block">
                            <div className="testText">Daily Pct (%)</div>
                        </div>
                        <div className="menu-vol-block">
                            <div className="testText">Daily V (£ MM) </div>
                        </div>
                    </TableMenuWrapper>
                </TableMenuBlock>
                {coinTableNode}
            </TableListWrapper>
        </TableListBlock>
    )
}

export default withRouter(TableList);