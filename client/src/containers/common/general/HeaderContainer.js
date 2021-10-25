import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { initializeUid } from 'modules/auth';
import { saveAssets, initializeAssets } from 'modules/userAssets';
import { saveUserProfile, initializeUserProfile } from 'modules/userProfile';
import { coinObjects } from 'helpers/coinlist/coinData';
import * as service from 'helpers/api/service';
import firebaseAuth from 'helpers/firebase/firebaseAuth';
import Header from 'components/common/general/Header'

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const { userId, assets, profile } = useSelector(({ auth, userAssets, userProfile }) => ({
        userId: auth.uid,
        assets: userAssets.assets,
        profile: userProfile.profile
    }))
    const signinFnc = () => firebaseAuth.signin();
    const signoutFnc = async () => {
        try {
            const accessToken = await firebaseAuth.getAccessToken(userId);
            // getting access_token!!!!! 
            console.log(accessToken.node_.value_)
            if (userId !== null) { service.requestSignout(userId); onInitializeUserId();}
            console.log('hey')
            if (assets !== null) onInitializeAssets();
            console.log('hoy')
            if (profile !== null) oninitializeUserProfile();
            console.log('wow')
        } catch (e) {
            console.error(e);
        }
        
    }

    const onSaveAssets = useCallback((payload) => dispatch(saveAssets(payload)), [dispatch])
    const onSaveUserProfile = useCallback((payload) => dispatch(saveUserProfile(payload)), [dispatch])

    const onInitializeAssets = useCallback(() => dispatch(initializeAssets()), [dispatch])
    const oninitializeUserProfile = useCallback(() => dispatch(initializeUserProfile()), [dispatch])

    const onInitializeUserId = useCallback(() => dispatch(initializeUid()), [dispatch])

    useEffect(() => {
        if (userId !== null &&  profile === null && assets === null) {
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