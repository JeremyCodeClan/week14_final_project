import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_UID = 'auth/INITIALIZE_UID'; 
const SAVE_UID_VALUE = 'auth/SAVE_UID_VALUE';

export const initializeUid = createAction(INITIALIZE_UID);
export const saveUidValue = createAction(SAVE_UID_VALUE, (value) => ({
    value
}));

const initialState = {
    uid: null,
};

const auth = handleActions(
    {
        [INITIALIZE_UID]: (state) => initialState,
        [SAVE_UID_VALUE]: (state, { payload }) => ({
            uid: payload.value,
        }),
    },
    initialState,
)

export default auth;