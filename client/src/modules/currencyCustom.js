import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_CURRENCY_CUSTOM = 'currencyCustom/INITIALIZE_CURRENCY_CUSTOM'; 
const SAVE_CUSTOM_NAME = 'currencyCustom/SAVE_CUSTOM_NAME';
const SAVE_CUSTOM_ICON = 'currencyCustom/SAVE_CUSTOM_ICON';
const SAVE_CUSTOM_NUM = 'currencyCustom/SAVE_CUSTOM_NUM';

export const initializeCustom = createAction(INITIALIZE_CURRENCY_CUSTOM);
export const saveCustomName = createAction(SAVE_CUSTOM_NAME, value => value);
export const saveCustomIcon = createAction(SAVE_CUSTOM_ICON, value => value);
export const saveCustomNum = createAction(SAVE_CUSTOM_NUM, value => value);

const initialState = {
    name: null,
    icon: null,
    currency: 1
};

const currencyCustom = handleActions(
    {
        [INITIALIZE_CURRENCY_CUSTOM]: (state) => initialState,
        [SAVE_CUSTOM_NAME]: (state, { payload: value }) => ({
            ...state,
            name: value,
        }),
        [SAVE_CUSTOM_ICON]: (state, { payload: value }) => ({
            ...state,
            icon: value,
        }),        
        [SAVE_CUSTOM_NUM]: (state, { payload: value }) => ({
            ...state,
            currency: value,
        }),
    },
    initialState,
)

export default currencyCustom;