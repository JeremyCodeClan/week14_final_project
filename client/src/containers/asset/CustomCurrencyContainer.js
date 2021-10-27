import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomCurrency from 'components/asset/CustomCurrency';
import { initializeCustom, saveCustomNum, saveCustomIcon, saveCustomName } from 'modules/currencyCustom';

const CustomCurrencyContainer = ({ customName, customIcon, customCurrency }) => {
    
    const dispatch = useDispatch();
    const handleSaveNum = useCallback((v) => dispatch(saveCustomNum(v)), [dispatch]);
    const handleSaveIcon = useCallback((v) => dispatch(saveCustomIcon(v)), [dispatch]);
    const handleSaveName = useCallback((v) => dispatch(saveCustomName(v)), [dispatch]);
    const handleInitialize = useCallback(() => dispatch(initializeCustom()), [dispatch]);


    return (
        <CustomCurrency 
            handleSaveNum={handleSaveNum} handleSaveIcon={handleSaveIcon} handleSaveName={handleSaveName} handleInitialize={handleInitialize}
            customName={customName} customIcon={customIcon} customCurrency={customCurrency}
            
        />
    )
};

export default CustomCurrencyContainer;