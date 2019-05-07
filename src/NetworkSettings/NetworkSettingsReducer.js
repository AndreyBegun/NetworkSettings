let initialState = {

    data: {
        DNS: "obtainDNS",
        IP: "autoIP",
        wifi: false,
        IPW: "autoIPW",
        DNSW: "obtainDNSW"
    }
}

const NetwarkSettingsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOAD_DATA_TO_LS': {

            return {...state, data: action.data}
        }
        case 'GET_DATA_FROM_LS': {

            return {...state, data: action.data}
        }

        case 'REFRESH_VALUES':
            return {
                ...state, data: {
                    DNS: "obtainDNS",
                    IP: "autoIP",
                    wifi: false,
                    IPW: "autoIPW",
                    DNSW: "obtainDNSW"
                }
            }

        default:
            return state;
    }
}
export default NetwarkSettingsReducer;

//обернуть thunkcreator
export const loadDataToLS = (data) => {
    localStorage.setItem('myData', JSON.stringify(data));
}

export const getDataFromLS = () => {
    return JSON.parse(localStorage.getItem('myData'));
}

export const loadDataToLSThunk = (data) => (dispatch) => {
    // promise loadDataToLS(data).then(() => getDataFromLS()).then((data) => dispatch({type: 'LOAD_DATA_TO_LS', data: data}))
    loadDataToLS(data);
    dispatch({type: 'LOAD_DATA_TO_LS', data: data})
}

export const initValuesFromLocalStorage = () => dispatch => {
    dispatch({type: 'GET_DATA_FROM_LS', data: getDataFromLS()})
}

export const refreshValues = () => dispatch => {
    dispatch({type: 'REFRESH_VALUES'})
}

