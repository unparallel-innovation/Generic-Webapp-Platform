import styles from './index.module.scss'
import Image from "react-bootstrap/Image";
interface FooterProps {
	projectName:string,
	programmeName:string,
	grantAgreementNumber:string | number
}

export default function Footer({projectName, programmeName, grantAgreementNumber}:FooterProps){
	return (
		<div className={styles.footer}>
			<div className={"d-flex align-items-center h-100 px-4"}>
				<Image src={"/EUFlag.png"} width={22} height={14} alt={"EU flag"}/>
				<div className={"ms-3 flex-grow-1"}>
					<div className={`${styles.text}`}>
						<i>{projectName}</i> has received funding from the European Union&apos;s <i>{programmeName}</i> research and innovation programme under grant agreement no. <i>{grantAgreementNumber}</i>.
					</div>
				</div>
				{/*<div className={`${styles.privacy} float-right`}>Privacy Policy</div>*/}
			</div>
		</div>
	);
}