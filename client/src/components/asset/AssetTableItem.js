import React from 'react';
import styled, { css } from 'styled-components';
import { refineNum, refineNumWithoutGbp } from 'helpers/calculation/calculator';
import { Link } from 'react-router-dom';

const AssetTableItemBlock = styled.article`
    height: 10rem;
`;

const AssetTableItemLink = styled(Link)`
    border-top: 1px solid var(--lightestestest-navy);
    border-bottom: 1px solid var(--lightestestest-navy);
    padding: 1.5rem 1rem;
    margin: 2rem auto;
    display: flex;
    justify-content: space-evenly;

    :hover {
        background: var(--whiter);
        border-right: 0.5px solid var(--lightestestest-navy);
        border-left: 0.5px solid var(--lightestestest-navy);
    }

    .item-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .first-value { margin-bottom: 0.75rem; }
        .item-wrapper {
            display: flex;
            flex-direction: column;
            .item-label {
                color: var(--lightestest-navy);
                font-size: var(--ft-md);
                margin-bottom: 0.25rem;
            }
            .first-value, .second-value {
                color: var(--lightest-navy);
                font-size: var(--ft-xl);
            }
        }
    }
`;

const LogoNameSection = styled.section`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1.5rem;
    .logoName-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo-block {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.75rem;
            .coin-img { height: 60px; }
        }
        .name-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .codename-Text { 
                color: var(--lightest-navy);
                font-size: var(--ft-xxl);
            }
            .fullname-Text {
                color: var(--lightestest-navy);
                font-size: var(--ft-lg);
                text-align: center;
            }
        }
    }
`;
const PriceAmountSection = styled.section`
    width: 25%;
    display: flex;
    justify-content: center;
`;
const CurrentPTotalPDailyPctSection = styled.section`
    width: 25%;
    display: flex;
    justify-content: center;
`;
const VolSection = styled.section`
    width: 25%;
    display: flex;
    justify-content: center;
`;

const AssetTableItem = ({ 
    assetObj, gbpRate, dailyTotal,
    customIcon, customCurrency
    }) => {

    const amount = parseFloat(refineNumWithoutGbp(assetObj['amount']));
    const currentPrice = parseFloat(refineNum(assetObj['currentValue'], gbpRate));
    const currentTotal = parseFloat(parseFloat(assetObj['currentTotal']).toFixed(4));
    const openPrice = parseFloat(refineNum(assetObj['openValue'], gbpRate));
    const openTotal = parseFloat(parseFloat(assetObj['openTotal']).toFixed(4));

    // percentages
    const dailyPercentage = ((((parseFloat(assetObj['currentValue']) * gbpRate) / openPrice) - 1) * 100).toFixed(2);
    const refinedDailyPer = Math.round(dailyPercentage * 100) / 100;
    const volPerToTotal =  ((currentTotal / dailyTotal) * 100).toFixed(2);
    
    return (
        <AssetTableItemBlock >
            <AssetTableItemLink to={`/chart/@${assetObj.product_id}`}>
                {assetObj !== null ? 
                <>
                    <LogoNameSection>
                        <div className='logoName-block'>
                            <div className='logo-block'>
                                <img className="coin-img" src={`/images/${assetObj.name}.svg`} />
                            </div>
                            <div className='name-block'>
                                <div className="codename-Text">{assetObj.name}</div>
                                <div className="fullname-Text">{assetObj.fullname}</div>
                            </div>
                        </div>
                    </LogoNameSection>
                    <PriceAmountSection>
                        <div className="item-block">
                            <div className="item-wrapper first-value">
                                <div className="item-label">R-T Price (£)</div>
                                <div className="first-value">{currentPrice}</div>
                            </div>
                            <div className="item-wrapper">
                                <div className="item-label">My Qty</div>
                                <div className="second-value">{amount}</div>
                            </div>
                        </div>
                    </PriceAmountSection>
                    <CurrentPTotalPDailyPctSection>
                        <div className="item-block">
                            <div className="item-wrapper first-value">
                                <div className="item-label">My Total {customIcon}</div>
                                <div className="first-value">{(currentTotal / customCurrency).toFixed(4)}</div>
                            </div>
                            <div className="item-wrapper">
                                <div className="item-label">My Open {customIcon}</div>
                                <div className="second-value">{(openTotal / customCurrency).toFixed(4)}</div>
                            </div>
                        </div>
                    </CurrentPTotalPDailyPctSection>
                    <VolSection>
                        <div className="item-block">
                            <div className="item-wrapper first-value">
                                <div className="item-label"> My 24h (%)</div>
                                <div className="first-value" style={{ color: refinedDailyPer < 0 ? "#343aed" : "#eb4034" }}>{refinedDailyPer}</div>
                            </div>
                            <div className="item-wrapper">
                                <div className="item-label">My Vol (%)</div>
                                <div className="second-value">{volPerToTotal}</div>
                            </div>
                        </div>
                    </VolSection>
                </>
                :
                <></>
                }
            </AssetTableItemLink>
        </AssetTableItemBlock>
    )
}

export default AssetTableItem;