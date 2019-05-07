import React from 'react'
import {Field, reduxForm} from 'redux-form'
import style from './NetworkSettingsStyles.module.css'
import {formValueSelector} from 'redux-form';

let NetworkSettings = props => {
    let isEthernetFolowingIPBlocked = props.myValues.IP === 'autoIP';
    let classDisabledAPI = isEthernetFolowingIPBlocked ? `${style.inputFields} ${style.opasity}` : style.inputFields;
    let isEthernetFolowingDNSLocked = props.myValues.DNS === 'obtainDNS';
    let classDisabledDNS = isEthernetFolowingDNSLocked ? `${style.inputFields} ${style.opasity}` : style.inputFields;

    let isWirelessFolowingIPBlocked = props.myValues.IPW === 'autoIPW';
    let classDisabledAPIW = isWirelessFolowingIPBlocked ? `${style.inputFields} ${style.opasity}` : style.inputFields;
    let isWirelessFolowingDNSLocked = props.myValues.DNSW === 'obtainDNSW';
    let classDisabledDNSW = isWirelessFolowingDNSLocked ? `${style.inputFields} ${style.opasity}` : style.inputFields;

    let isEnebleWifiLocked = props.myValues.wifi == !false ? true : props.myValues.wifi;
    let classDisabledWirelesSettings = isEnebleWifiLocked ? style.emptyStyle : style.opasity;

    const {handleSubmit, initialValues} = props;

    return (

        <form onSubmit={handleSubmit} className={style.mainBlock}>
            {console.log(initialValues)}
            <div className={style.ethernetSettings}>
                <h3>Ethernet Settings</h3>
                <div>
                    <label className={style.radioContainer}>Obtain an IP automatically (DHCP/BootP)
                        <Field className={style.radioCheckmark} name="IP" component="input" type="radio"
                               value="autoIP"/>
                        <span className={style.radioCheckmark}></span>
                    </label>
                    <label className={style.radioContainer}>Use the folowing IP adress:
                        <Field className={style.radioCheckmark} name="IP" component="input" type="radio"
                               value="folowingIP"/>
                        <span className={style.radioCheckmark}></span>
                    </label>
                </div>

                <div className={classDisabledAPI}>
                    <div>
                        <label>IP address:<span>*</span> </label>
                        <Field name="IPAddress" component="input" type="text"
                               disabled={isEthernetFolowingIPBlocked}/>
                    </div>
                    <div>
                        <label>Subnet Mask:<span>*</span> </label>
                        <Field name="subnetMask" component="input" type="text"
                               disabled={isEthernetFolowingIPBlocked}/>
                    </div>
                    <div>
                        <label>Default Gateway: </label>
                        <Field name="defaultGateway" component="input" type="text"
                               disabled={isEthernetFolowingIPBlocked}/>
                    </div>
                </div>

                <label className={style.radioContainer}>Obtain DNS server automatically
                    <Field className={style.radioStyle} component="input" type="radio" name="DNS"
                           value="obtainDNS"/>
                    <span className={style.radioCheckmark}></span>
                </label>

                <label className={style.radioContainer}>Use the folowing DNS server address:
                    <Field className={style.radioStyle} component="input" type="radio" name="DNS"
                           value="folowingDNS"/>
                    <span className={style.radioCheckmark}></span>
                </label>

                <div className={classDisabledDNS}>
                    <div>
                        <label>Preffered DNS server:<span>*</span> </label>
                        <Field name='preferedDNS' component="input" type="text"
                               disabled={isEthernetFolowingDNSLocked}/>
                    </div>
                    <div>
                        <label>Alternative DNS server: </label>
                        <Field name='alternativDNS' component="input" type="text"
                               disabled={isEthernetFolowingDNSLocked}/>
                    </div>
                </div>
            </div>

            <div className={style.wirelessSettings}>
                <h3>Wireless Settings</h3>
                <div>
                    <label className={style.checkboxContainer}>Enable wifi:
                        <Field className={style.checkboxStyle} name="wifi" component="input" type="checkBox"/>
                        <span className={style.checkmark}></span>
                    </label>
                </div>

                <div className={classDisabledWirelesSettings}>
                    <div className={style.inputFields}>
                        <div>
                            <label>Wireless Network Name:<span>*</span></label>
                            <Field className={style.selectStyle} name="networkName" component='select'
                                   disabled={!isEnebleWifiLocked}>
                                <option defaultValue="" value="">Please select</option>
                                <option value="SSID1">SSID1</option>
                                <option value="SSID2">SSID2</option>
                                <option value="SSID3">SSID3</option>
                            </Field>
                            <span className={style.refreshBtn}></span>
                        </div>
                    </div>

                    <div>
                        <label className={style.checkboxContainer}>Enable Wireless Security:
                            <Field className={style.checkboxStyle} name="security" component="input" type="checkBox"
                                   value="securityKey" disabled={!isEnebleWifiLocked}/>
                            <span className={style.checkmark}></span>
                        </label>
                    </div>

                    <div className={style.inputFields}>
                        <div>
                            <label>Security Key:<span>*</span> </label>
                            <Field name="SecurityKey" component="input" type="text" disabled={!isEnebleWifiLocked}/>
                        </div>
                    </div>

                    <label className={style.radioContainer}>Obtain an IP automatically (DHCP/BootP)
                        <Field className={style.radioCheckmark} name="IPW" component="input" type="radio"
                               value="autoIPW" disabled={!isEnebleWifiLocked}/>
                        <span className={style.radioCheckmark}></span>
                    </label>
                    <label className={style.radioContainer}>Use the folowing IP adress:
                        <Field className={style.radioCheckmark} name="IPW" component="input" type="radio"
                               value="folowingIPW" disabled={!isEnebleWifiLocked}/>
                        <span className={style.radioCheckmark}></span>
                    </label>

                    <div className={classDisabledAPIW}>
                        <div>
                            <label>IP address:<span>*</span> </label>
                            <Field name="WIPAddress" component="input" type="text"
                                   disabled={isWirelessFolowingIPBlocked || !isEnebleWifiLocked}/>
                        </div>
                        <div>
                            <label>Subnet Mask:<span>*</span> </label>
                            <Field name="WsubnetMask" component="input" type="text"
                                   disabled={isWirelessFolowingIPBlocked || !isEnebleWifiLocked}/>
                        </div>
                        <div>
                            <label>Default Gateway: </label>
                            <Field name="WdefaultGateway" component="input" type="text"
                                   disabled={isWirelessFolowingIPBlocked || !isEnebleWifiLocked}/>
                        </div>
                    </div>

                    <label className={style.radioContainer}>Obtain DNS server automatically
                        <Field className={style.radioStyle} component="input" type="radio" name="DNSW"
                               value="obtainDNSW" disabled={!isEnebleWifiLocked}/>
                        <span className={style.radioCheckmark}></span>
                    </label>

                    <label className={style.radioContainer}>Use the folowing DNS server address:
                        <Field className={style.radioStyle} component="input" type="radio" name="DNSW"
                               value="folowingDNSW" disabled={!isEnebleWifiLocked}/>
                        <span className={style.radioCheckmark}></span>
                    </label>

                    <div className={classDisabledDNSW}>
                        <div>
                            <label>Preffered DNS server:<span>*</span> </label>
                            <Field name="prefferedDNSW" component="input" type="text"
                                   disabled={isWirelessFolowingIPBlocked || !isEnebleWifiLocked}/>
                        </div>
                        <div>
                            <label>Alternative DNS server: </label>
                            <Field name="alternativeDNSW" component="input" type="text"
                                   disabled={isWirelessFolowingIPBlocked || !isEnebleWifiLocked}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.buttonsBlock}>
                <button className={`${style.footerButton} ${style.activeButton}`} type="submit">Save</button>
                <button className={style.footerButton} type="reset" onClick={props.refreshValues}>Cancel</button>
            </div>

        </form>
    )
}

NetworkSettings = reduxForm({
    form: 'networkSettings',
    enableReinitialize: true
})(NetworkSettings)

export default NetworkSettings
