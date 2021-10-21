import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';

const ChartTabBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const ChartTabWrapper = styled.article`
    height: 3rem;
    display: flex;
`;

const Tabs = styled.section`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-plum);
    width: 30%;
    padding: 0.5rem;

    .big-value {
        font-size: var(--ft-xxl);
        padding: 0 0.5rem;
    }
`;


const ChartTab = () => {

    return (
        <ChartTabBlock>
            <ChartTabWrapper>
                <Tabs>
                    <div className="big-value">Tab / Tab / Tab / Tab / Tab</div>
                </Tabs>
            </ChartTabWrapper>
        </ChartTabBlock>
    )
};

export default ChartTab;
