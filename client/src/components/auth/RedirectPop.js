import React, { useEffect } from 'react';
import firebaseAuth from 'helpers/firebase/firebaseAuth';
import * as coinSerivce from 'helpers/api/service';

const RedirectPop = ({ code, userId, signedInSaveUid }) => {

    useEffect(() => {
        coinSerivce.redirectToken(code)
            .then((res) => {
                firebaseAuth.customerSignIn(res.data)
                    .then((res) => {
                        const parsedUid = res.user.uid.split(':')[1];
                        if (userId === null) {
                            signedInSaveUid(parsedUid)
                        }
                        window.close()
                    })
            })
    }, [])

    return (
        <h2>accessing...</h2>
    )
}

export default RedirectPop;