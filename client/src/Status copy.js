import React from 'react';
import styled from 'styled-components';
import CustomCurrencyContainer from 'containers/asset/CustomCurrencyContainer';
import Responsive from 'components/common/general/Responsive';

const StatusBlock = styled(Responsive)`
    margin-top: 2rem;
`;


const ContentBlock = styled.article`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: space-between;
    align-item: center;
    .personal-contents {
        padding: 1rem;
        display: flex;
        justify-content: center;

        .profile-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-right: 3rem;
            .profile-name {
                margin-top: 0.5rem;
                color: var(--darker-orange);
                font-family: 'Sonsie One', cursive;
                font-size: var(--ft-lg);
            }
        }

        .price-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .total-div { margin-bottom: 1rem; }
            .first-block { margin-bottom: 0.5rem; }
            .total-div, .profit-div {
                display: flex;
                flex-direction: column;
                .total-unit, .profit-unit {
                    color: var(--lightestestest-navy);
                }
                .total-unit { 
                    font-size: var(--ft-xl); 
                    margin-bottom: 0.25rem;
                }
                .profit-unit { 
                    font-size: var(--ft-md);
                    margin-bottom: 0.15rem;
                }
                .total-value {
                    color: var(--lightestest-navy);
                    font-size: var(--ft-heading);
                }
                .profit-value {
                    font-size: var(--ft-xxl);
                }
            }

        }
    }
    .currency-contents, .personal-contents {
        width: 50%;
    }
    .currency-contents {
        display: flex;
        justify-content: end;
        align-items: center;
    }
`;

const ProfileImgBg = styled.section`
    width: 150px;
    height: 150px;
    border: 4px solid var(--darker-orange);
    border-radius: 100%;
    background: url(${(props) => props.profile}) center no-repeat;
    background-size: 145px 145px;
`; 

const Status = ({ 
    profile, myAssets, coinProductIdArr, gbpRate,
    customName, customIcon, customCurrency
    }) => {

    let dailyTotal = 0;
    let openTotal = 0;

    if (coinProductIdArr !== []) {
        coinProductIdArr.forEach((one, i) => {
            if (myAssets[one].currentTotal !== null) {
                dailyTotal += parseFloat(myAssets[one].currentTotal);
                openTotal += parseFloat(myAssets[one].openTotal);
            }
        })
    }

    const totalBal = parseFloat((dailyTotal * gbpRate / customCurrency).toFixed(4));
    const dailyProfit = parseFloat(((dailyTotal / openTotal - 1) * 100).toFixed(2));
    const dailyGainOrLose = parseFloat((openTotal / customCurrency * dailyProfit / 100).toFixed(2));


    return (
        <StatusBlock>
            <ContentBlock>
                <section className='personal-contents'>
                    <section className="profile-section">
                        <ProfileImgBg profile={profile.profileImg} />
                        <div className="profile-name">{profile.name}</div>
                    </section>
                    <section className="price-section">
                        <div className="total-div">
                            <div className="total-unit">Total balance {customIcon}</div>
                            <div className="total-value">{totalBal}</div>
                        </div>
                        <div className="daily-pro-bal">
                            <div className="profit-div first-block">
                                <div className="profit-unit">Daily Gain/Lose {customIcon}</div>
                                <div className="profit-value" style={{ color: dailyProfit < 0 ? "#343aed" : "#eb4034" }} >{dailyGainOrLose}</div>
                            </div>
                            <div className="profit-div">
                                <div className="profit-unit">Daily Profit %</div>


                                <div 
                                    className="profit-value" 
                                    style={{ color: dailyProfit < 0 ? "#343aed" : "#eb4034" }}
                                >
                                    {dailyProfit} %
                                </div>
                            
                            
                            </div>
                        </div>
                        
                    </section>
                </section>
                <section className='currency-contents'>
                    <CustomCurrencyContainer
                        customName={customName} customIcon={customIcon} customCurrency={customCurrency}
                    />
                </section>
            </ContentBlock>
        </StatusBlock>
    )
}

export default Status;