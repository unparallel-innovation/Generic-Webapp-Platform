import styles from "./footer.module.css";
import Image from "react-bootstrap/Image";

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={"d-flex align-items-center h-100 px-4"}>
                <Image src={"/EUFlag.png"} width={22} height={14} alt={"EU flag"}/>
                <div className={"ms-3 flex-grow-1"}>
                    <div className={`${styles.text}`}>
                        <i>PROJECT_NAME</i> has received funding from the European Union&apos;s <i>PROGRAMME_NAME</i> research and innovation programme under grant agreement no. <i>GRANT_AGREEMENT_NUMBER</i>.
                    </div>
                </div>
                {/*<div className={`${styles.privacy} float-right`}>Privacy Policy</div>*/}
            </div>
        </div>
    );
}
