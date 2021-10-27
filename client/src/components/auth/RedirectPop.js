import React, { useEffect } from 'react';
import styled from 'styled-components';
import firebaseAuth from 'helpers/firebase/firebaseAuth';
import * as coinSerivce from 'helpers/api/service';

const RedirectLoader = styled.div`
    .squid-img {
        width: 600px;
    }
`;

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
        <div>
            <img className="squid-img" src={`/images/squidcard.jpeg`} />
        </div>
    )
}

export default RedirectPop;