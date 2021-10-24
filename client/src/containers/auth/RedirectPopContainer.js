import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUidValue } from 'modules/auth';
import RedirectPop from 'components/auth/RedirectPop';
import { withRouter } from 'react-router';

const RedirectPopContainer = ({ location }) => {
    
    const dispatch = useDispatch();
    const queryString = location.search;
    const code = new URLSearchParams(queryString).get("code")

    const { userId } = useSelector(({ auth }) => ({ userId: auth.uid }));

    const signedInSaveUid = useCallback((payload) => {
        dispatch(saveUidValue(payload))
    }, [dispatch]);

    return (
        <RedirectPop code={code} userId={userId} signedInSaveUid={signedInSaveUid} />
    )
}

export default withRouter(RedirectPopContainer);