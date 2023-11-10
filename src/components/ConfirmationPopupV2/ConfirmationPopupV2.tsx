import React, { FC, useEffect, useState } from "react";
import styles from "@/components/ConfirmationPopup/ConfirmationPopup.module.css";
import Popup from "../Popup/Popup";
import SVG from "../SVG/SVG";
import Loader from "../Loader/Loader";

interface IConfirmationPopupProps {
  heading?: string;
  body: React.ReactNode;
  yesButtonName?: string;
  noButtonName?: string;
  yesButtonHandler: () => void;
  noButtonHandler?: () => void;
  closePopupHandler: () => void;
  loading?: boolean;
  loadingText?: string;
  isYesDisabled?: boolean;
  highlightYesButton?: boolean
}

const ConfirmationPopupV2: FC<IConfirmationPopupProps> = (props) => {
  const {
    heading = "Confirm",
    body,
    yesButtonHandler,
    yesButtonName = "Okay",
    noButtonName = "Cancel",
    noButtonHandler,
    closePopupHandler,
    loading = false,
    loadingText = "",
    isYesDisabled = false,
    highlightYesButton = true
  } = props;

  const getButtonClass = (highlight: boolean): string => {
    if(highlight) return 'button-primary';
    else return 'button-transparent button-border-primary button-border-normal';
  }

  const popupHeader = (
    <div className={styles.confirmationPopupHeader}>
      <p className={styles.confirmationHeading}>{heading}</p>
      <span onClick={closePopupHandler}>
        <SVG iconName="close" className={styles.closeIcon} />
      </span>
    </div>
  );

  const popupBody = (
    <div className={styles.confirmationPopupBody}>
      {loading ? (
        <Loader loadingText={loadingText} />
      ) : (
        <>
          {typeof body === "string" ? (
            <p className={styles.confirmationMessage}>{body}</p>
          ) : (
            <> {body}</>
          )}
        </>
      )}
    </div>
  );

  const popupFooter = (
    <div className={styles.confirmationPopupFooter}>
      <button
        type="button"
        className={`button ${getButtonClass(!highlightYesButton)}`}
        onClick={() => {
          noButtonHandler?.() ?? closePopupHandler?.();
        }}
      >
        {noButtonName}
      </button>
      <button
        type="button"
        className={`button ${getButtonClass(highlightYesButton)}`}
        onClick={yesButtonHandler}
        disabled={isYesDisabled}
      >
        {yesButtonName}
      </button>
    </div>
  );

  return (
    <Popup
      popupBody={popupBody}
      popupHeader={popupHeader}
      popupFooter={popupFooter}
    />
  );
};

export default ConfirmationPopupV2;
