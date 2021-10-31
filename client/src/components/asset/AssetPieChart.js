import React from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

const ChartBlock = styled(Responsive)`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-item: middle;
`;

const ChartWrapper = styled.article`

`;

const AssetPieChart = ({ chartData }) => {

    return (
        <>
            <ChartBlock>
                <ChartWrapper>
                    {chartData.length > 1 ? 
                        (
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={chartData}
                            options={{
                                legend: { position: 'side', alignment: 'middle' },
                                pieStartAngle: 100,
                                chartArea: {
                                left: "20%",
                                width: "90%",
                                height: "90%"
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />) : (<></>
                    )}
                </ChartWrapper>
            </ChartBlock>
        </>
    )
}

export default AssetPieChart;