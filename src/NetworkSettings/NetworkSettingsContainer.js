import React from 'react'
import NetworkSettings from './NetworkSettings'
import {formValueSelector} from "redux-form";
import {initValuesFromLocalStorage, loadDataToLSThunk, refreshValues} from "./NetworkSettingsReducer";
import {connect} from "react-redux";




class ContactPage extends React.Component {

    componentDidMount() {
        if(!localStorage.getItem("myData")){
            this.props.loadDataToLS(this.props.initialValues)
        }else {
            this.props.init()
        }

    }

    submit = values => {
        this.props.loadDataToLS(values);
    }

    render() {
        return <NetworkSettings {...this.props} onSubmit={this.submit}/>
    }
}

const mapStateToProps = (state) => {
    return {
        myValues:formValueSelector('networkSettings')(state, 'IP', 'DNS', 'IPW', 'DNSW', 'wifi'),
        initialValues: state.network.data
    }
}

const mapDispatchToProps  = (dispatch) => {
   return {
       loadDataToLS: data => dispatch(loadDataToLSThunk(data)),
       init: () => {
           dispatch(initValuesFromLocalStorage())
       },
       refreshValues: ()=> dispatch(refreshValues())
   }
}



export default connect(mapStateToProps, mapDispatchToProps )(ContactPage)
