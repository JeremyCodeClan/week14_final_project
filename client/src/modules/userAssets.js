import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


const INITIALIZE_ASSETS = 'assets/INITIALIZE_ASSETS'; 
const SAVE_ASSETS = 'assets/SAVE_ASSETS';
const CHANGE_MYTICKER_FIELD = 'assets/CHANGE_MYTICKER_FIELD';

export const initializeAssets = createAction(INITIALIZE_ASSETS);
export const saveAssets = createAction(SAVE_ASSETS, (value) => ({
    value
}));
export const changeMyTickerField = createAction(CHANGE_MYTICKER_FIELD, ({ advanced, product, key, data }) => ({
    advanced,
    product,
    key,
    data
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
        [CHANGE_MYTICKER_FIELD]: (state, { payload: { advanced, product, key, data } }) =>
        produce(state, draft => {
            draft[advanced][product][key] = data;
        }),
    },
    initialState,
)

export default userAssets;