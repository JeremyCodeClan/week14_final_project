import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_ASSETS = 'assets/INITIALIZE_ASSETS'; 
const SAVE_ASSETS = 'assets/SAVE_ASSETS';

export const initializeAssets = createAction(INITIALIZE_ASSETS);
export const saveAssets = createAction(SAVE_ASSETS, (value) => ({
    value
}));

const initialState = {
    assets: null,
};

const userAssets = handleActions(
    {
        [INITIALIZE_ASSETS]: (state) => initialState,
        [SAVE_ASSETS]: (state, { payload }) => ({
            assets: payload.value,
        }),
    },
    initialState,
)

export default userAssets;