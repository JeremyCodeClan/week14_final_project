import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

const ChartTabBlock = styled(Responsive)`
    margin-top: 1.5rem;
`;

const ChartTabWrapper = styled.article`
    height: 3rem;
    max-width: 850px;
    min-width: 850px;
`;

const Tabs = styled.section`
    width: 30%;
    display: flex;
    margin-left: 1rem;
    .tab-block {
        width: 47.5px;
        margin: 0 0.25rem;
        display: flex;
        justify-content: center;
        .tab-value {
            width: 100%;
            display: flex;
            justify-content: center;
            box-sizing: content-box;
            border: 1px solid var(--darkest-orange);
            border-radius: 0.35rem;
            cursor: pointer;
            padding: 0.15rem 0.5rem;
            font-size: var(--ft-md);
            color: var(--darkest-orange);
        }
    }
`;

// const TitleBlock = styled.article`
//     margin-left: 1.5rem;
//     margin-bottom: 1rem;
//     .title-text {
//         font-size: var(--ft-sm-heading);
//         color: var(--lightestest-navy);
//     }
// `;


const ChartTab = ({ handleChartInterval, chartInterval }) => {

    const onChangeChartInterval = (e) => { 
        handleChartInterval(e.target.attributes.value.value)
    };

    return (
        <>
            <ChartTabBlock>
                <ChartTabWrapper>
                    {/* <TitleBlock>
                        <div className="title-text">
                            Kline Chart
                        </div>
                    </TitleBlock> */}
                    <Tabs>
                        <section className="tab-block">
                            <div className="tab-value" value='1m' onClick={onChangeChartInterval}>1m</div>
                        </section>
                        <section className="tab-block">
                            <div className="tab-value" value='1h' onClick={onChangeChartInterval}>1h</div>
                        </section>
                        <section className="tab-block">
                            <div className="tab-value" value='1d' onClick={onChangeChartInterval}>1d</div>
                        </section>
                        <section className="tab-block">
                            <div className="tab-value" value='1w' onClick={onChangeChartInterval}>1w</div>
                        </section>
                    </Tabs>
                </ChartTabWrapper>
            </ChartTabBlock>
        </>
    )
};

export default ChartTab;
