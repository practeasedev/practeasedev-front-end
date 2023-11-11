import {FC, ReactNode} from 'react';
import styles from '@/components/Popup/Popup.module.css';
import SVG from '../SVG/SVG';

interface IPopupProps {
    popupHeader: ReactNode
    popupFooter: ReactNode
    popupBody: ReactNode
}

const Popup: FC<IPopupProps> = (props) => {
    const {popupHeader, popupFooter, popupBody} = props
    return (
        <div className={styles.popupOuterContainer}>
            <div className={styles.popupInnerContainer}>
                <div className={styles.popupUpper}>
                    {popupHeader}
                    {popupBody}
                </div>
                <div className={styles.popupLower}>
                    {popupFooter}
                </div>
            </div>
        </div>
    );
};

export default Popup;