import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import authService from 'helpers/firebaseServices/authService';
import * as coinSerivce from 'helpers/api/service';

const RedirectPop = ({ location }) => {

    useEffect(() => {
        const queryString = location.search;
        const code = new URLSearchParams(queryString).get("code")
        
        coinSerivce.redirectToken(code)
            .then((res) => {
                authService.customerSignIn(res.data)
                    .then((res) => {
                        console.log(res)
                    })
            })
    }, [])



    return (
        <h2>accessing...</h2>
    )
}

export default withRouter(RedirectPop);