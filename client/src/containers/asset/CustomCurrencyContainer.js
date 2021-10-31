import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomCurrency from 'components/asset/CustomCurrency';
import { saveCustomNum, saveCustomIcon, saveCustomName } from 'modules/currencyCustom';

const CustomCurrencyContainer = () => {
    
    const dispatch = useDispatch();
    const handleSaveNum = useCallback((v) => dispatch(saveCustomNum(v)), [dispatch]);
    const handleSaveIcon = useCallback((v) => dispatch(saveCustomIcon(v)), [dispatch]);
    const handleSaveName = useCallback((v) => dispatch(saveCustomName(v)), [dispatch]);

    return (
        <CustomCurrency handleSaveNum={handleSaveNum} handleSaveIcon={handleSaveIcon} handleSaveName={handleSaveName} />
    )
};

export default CustomCurrencyContainer;