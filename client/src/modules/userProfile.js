import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_USER_PROFILE = 'profile/INITIALIZE_USER_PROFILE'; 
const SAVE_USER_PROFILE = 'profile/SAVE_USER_PROFILE';

export const initializeUserProfile = createAction(INITIALIZE_USER_PROFILE);
export const saveUserProfile = createAction(SAVE_USER_PROFILE, (value) => ({
    value
}));

const initialState = {
    profile: null,
};

const userProfile = handleActions(
    {
        [INITIALIZE_USER_PROFILE]: (state) => initialState,
        [SAVE_USER_PROFILE]: (state, { payload }) => ({
            profile: payload.value,
        }),
    },
    initialState,
)

export default userProfile;