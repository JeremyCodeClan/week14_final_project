import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_CURRENCY_GBP = 'currencyGbp/INITIALIZE_CURRENCY_GBP'; 
const CHANGE_CURRENCY_GBP = 'currencyGbp/CHANGE_CURRENCY_GBP';

export const initializeGbp = createAction(INITIALIZE_CURRENCY_GBP);
export const saveGbpRate = createAction(CHANGE_CURRENCY_GBP, (value) => ({
    value
}));

const initialState = {
    rate: 0.73,
};

const currencyGbp = handleActions(
    {
        [INITIALIZE_CURRENCY_GBP]: (state) => initialState,
        [CHANGE_CURRENCY_GBP]: (state, { payload }) => ({
            rate: payload.value,
        }),
    },
    initialState,
)

export default currencyGbp;