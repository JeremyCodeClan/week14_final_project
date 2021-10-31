import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const CustomBlock = styled.article`
    display: flex;
    justify-content: end;
    align-items: center;
`;

const CustomerWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 0.5rem;
    border-radius: 1.5rem;
    .title-block {
        color: var(--darker-orange);
        font-size: var(--ft-xxl);
        margin-bottom: 0.25rem;
    }
    .inputs-block {
        display: flex;
        margin: 0 0.5rem;
        justify-content: space-between;
        .name-value-block, .icon-input {
            display: flex;
            flex-direction: column;
        }
        .name-value-block { 
            width: 60%;
            .name-input, .value-input {
                margin: 0.25rem;
            }
            .name-input, .value-input {
                .cc-name {
                    color: var(--lightestestest-navy);
                    font-size: var(--ft-lg);
                    margin-bottom: 0.5rem;
                } 
                .cc-input {
                    padding-left: 0.5rem;
                    height: 1.5rem;
                    background: var(--white);
                    border-radius: 0.25rem;
                    border: 0.5px solid var(--lightestestest-navy);
                }
            }
        }
        .icon-block { 
            width: 30%;
            margin: 0.25rem;
            .icon-name {
                color: var(--lightestestest-navy);
                font-size: var(--ft-lg);
                margin-bottom: 0.5rem;
            } 
            .icon-input {
                width: 77.5px;
                font-size: 3.25rem;
                padding-left: 0.5rem;
                height: 4.75rem;
                background: var(--white);
                border-radius: 0.25rem;
                border: 0.5px solid var(--lightestestest-navy);
            }
        }
    }
    .cc-button-block {
        display: flex;
        justify-content: end;
        .cc-button-play {
            margin: 0.5rem 1.25rem;
            color: white;
            width: 75px;
            height: 1.5rem;
            background: var(--darkest-teal);
            border: none;
            border-radius: 0.25rem;
            border: 0.5px solid var(--lightestestest-navy);
        }
    }
`;

const CustomCurrency = ({ handleSaveNum, handleSaveIcon, handleSaveName }) => {

    const nameRef = useRef('')
    const valueRef = useRef('')
    const IconRef = useRef('')

    const [ccName, setCcName] = useState('')
    const [ccIcon, setCcIcon] = useState('')
    const [ccValue, setCcValue] = useState(0)

    const onClickSubmit = (e) => {
        handleSaveName(ccName);
        handleSaveIcon(ccIcon);
        handleSaveNum(parseFloat(ccValue));
        nameRef.current.value = ''
        IconRef.current.value = ''
        valueRef.current.value = 0.00
        e.preventDefault();
    }

    return (
            <CustomBlock>
                <CustomerWrapper onSubmit={onClickSubmit}>
                    <section className="title-block">
                        <div>Custom currency</div>
                    </section>
                    <section className="inputs-block">
                        <section className="name-value-block">
                            <div className="name-input">
                                <label className='cc-name'>Name</label>
                                <input ref={nameRef} className='cc-input' type='text' required maxLength='15' onChange={(e) => setCcName(e.target.value)}/>
                            </div>
                            <div className="value-input">
                                <label className='cc-name'>Value (£)</label>
                                <input ref={valueRef} className='cc-input' type='number' step="0.10" placeholder="0.00" required  onChange={(e) => setCcValue(e.target.value)}/>
                            </div>
                        </section>
                        <section className="icon-block">
                            <label className='icon-name'>Icon</label>
                            <input ref={IconRef} className='icon-input' type='text' required maxLength='2' onChange={(e) => setCcIcon(e.target.value)}/>
                        </section>
                    </section>
                    <section className='cc-button-block'>
                        <button className='cc-button-play'>Create</button>
                    </section>
                </CustomerWrapper>
            </CustomBlock>
    )
};

export default CustomCurrency;