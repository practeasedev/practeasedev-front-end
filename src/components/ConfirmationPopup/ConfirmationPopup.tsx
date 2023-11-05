import React, { ChangeEvent, FC, useState } from 'react';
import styles from '@/components/ConfirmationPopup/ConfirmationPopup.module.css';
import Popup from '../Popup/Popup';
import SVG from '../SVG/SVG';
import Radio from '../Radio/Radio';
import { REASONS_FOR_ACCOUNT_DELETE } from '@/common/Constants';
import Loader from '../Loader/Loader';

interface IConfirmationPopupProps {
    message: string;
    yesButtonName: string;
    noButtonName: string;
    yesButtonHandler: ((x:string) => void) | (() => void);
    noButtonHandler?: () => void;
    closePopupHandler: () => void;
    loading: boolean
}

const ConfirmationPopup: FC<IConfirmationPopupProps> = (props) => {
    const {message, yesButtonHandler, yesButtonName, noButtonName, noButtonHandler, closePopupHandler, loading } = props;
    const [reasonForDelete, setReasonForDelete] = useState<string>('');
    const [otherReason, setOtherReason] = useState<string>('');

    const reasonForDeleteChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setReasonForDelete(value);
    }

    const otherReasonChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setOtherReason(value);
    }
    
    const popupHeader = (
        <div className={styles.confirmationPopupHeader}>
            <p className={styles.confirmationHeading}>Confirm</p>
        <span onClick={() => {closePopupHandler()}}>
                <SVG iconName='close' className={styles.closeIcon} />
            </span>
        </div>
    );

    const popupBody =  (
        <div className={styles.confirmationPopupBody}>
            {loading ? (<Loader loadingText='Deleting User ...' />) : (
                <>
                    <p className={styles.confirmationMessage}>{message}</p>
                    <div className={styles.reasonsForDeleteContainer}>
                        <p className={styles.reasonsTitle}>Reason for deleting your account</p>
                        <div className={styles.reasonOptions}>
                            {REASONS_FOR_ACCOUNT_DELETE.map((reason) => (
                                <Radio
                                    label={reason.label}
                                    value={reason.value}
                                    name="reason-for-delete"
                                    changeHandler={reasonForDeleteChangeHandler}
                                    checked = {reasonForDelete === reason.value}
                                    labelSize='normal'
                                    radioButtonSize='normal'
                                />
                            ))}
                            {reasonForDelete === "other" ? (
                                <input
                                    className="input"
                                    name="other-reason"
                                    value={otherReason}
                                    onChange={otherReasonChangeHandler}
                                /> 
                            ) : null}
                        </div>
                    </div>
                </>
            )}
        </div>
    );

    const popupFooter = (
        <div className={styles.confirmationPopupFooter}>
            <button type="button" className='button button-primary' onClick={() => {noButtonHandler ? noButtonHandler() : closePopupHandler()}}>
                {noButtonName}
            </button>
            <button type="button" className='button button-transparent button-border-primary button-border-normal' onClick={() => {yesButtonHandler(reasonForDelete === 'other' ? otherReason : reasonForDelete)}} disabled={(reasonForDelete === '') || (reasonForDelete === 'other' && otherReason === '')}>
                {yesButtonName}
            </button>
        </div>
    );

    return (
        <Popup
            popupBody = {popupBody}
            popupHeader = {popupHeader}
            popupFooter = {popupFooter}
        />
    );
};

export default ConfirmationPopup;
