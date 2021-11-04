import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { initializeUid } from 'modules/auth';
import { saveAssets, initializeAssets } from 'modules/userAssets';
import { saveUserProfile, initializeUserProfile } from 'modules/userProfile';
import { initializeCustom } from 'modules/currencyCustom';
import { coinObjects } from 'helpers/coinlist/coinData';
import * as service from 'helpers/api/service';
import firebaseAuth from 'helpers/firebase/firebaseAuth';
import Header from 'components/common/general/Header'

const HeaderContainer = ({ history }) => {

    const dispatch = useDispatch();
    const { userId, assets, profile, customCurreny } = useSelector(({ auth, userAssets, userProfile, currencyCustom }) => ({
        userId: auth.uid,
        assets: userAssets.assets,
        profile: userProfile.profile,
        customCurreny: currencyCustom.name,
    }))
    const signinFnc = () => firebaseAuth.signin();
    const signoutFnc = async () => {
        try {
            const firebaseAccess = await firebaseAuth.getAccessToken(userId);
            const accessToken = firebaseAccess.node_.value_;

            if (userId !== null) { service.requestSignout(userId, accessToken); onInitializeUserId();}

            // if (userId !== null) { service.requestSignout(userId, accessToken); onInitializeUserId();}
            if (assets !== null) onInitializeAssets();
            if (profile !== null) oninitializeUserProfile();
            if (customCurreny !== null) onInitializeCustomCurreny();
        } catch (e) {
            console.error(e);
        }
        history.push('/')
    }

    const onSaveAssets = useCallback((payload) => dispatch(saveAssets(payload)), [dispatch]);
    const onSaveUserProfile = useCallback((payload) => dispatch(saveUserProfile(payload)), [dispatch]);

    const onInitializeAssets = useCallback(() => dispatch(initializeAssets()), [dispatch]);
    const oninitializeUserProfile = useCallback(() => dispatch(initializeUserProfile()), [dispatch]);

    const onInitializeUserId = useCallback(() => dispatch(initializeUid()), [dispatch]);

    const onInitializeCustomCurreny =  useCallback(() => dispatch(initializeCustom()), [dispatch]);

    useEffect(() => {
        if ((userId !== null &&  profile === null) || (userId !== null && assets === null)) {
            service.getAssets(userId)
                .then((res) => {
                    const convertArrayToObject = (array, key) => {
                        const initialValue = {};
                        return array.reduce((obj, item) => {
                          return {
                            ...obj,
                            [item[key]]: item,
                          };
                        }, initialValue);
                      };
                    let refinedData = res.data.map((coin, index) => {
                        return { 
                            name: coin.currency,
                            amount: parseFloat(coin.amount),
                            fullname: coinObjects[coin.currency].fullName,
                            product_id: coinObjects[coin.currency].product_id,
                            currentValue: null,
                            openValue: null,
                            currentTotal: null,
                            openTotal: null,
                        }
                    })
                    let newRefined = convertArrayToObject(refinedData, 'name');
                    onSaveAssets(newRefined)
            })
            service.getProfile(userId)
                .then((res) => {
                    const parsedData = JSON.parse(res.data)
                    let refinedData = {
                        name: parsedData.name,
                        profileImg: parsedData.avatar_url
                    }
                    onSaveUserProfile(refinedData)
                })
        }
    }, [userId])

    return (
        <Header 
            userId={userId} 
            onInitializeUserId={onInitializeUserId}
            signinFnc={signinFnc} 
            signoutFnc={signoutFnc} 
        />
    )
}

export default withRouter(HeaderContainer);