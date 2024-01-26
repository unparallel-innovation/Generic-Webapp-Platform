import styles from "./index.module.scss";
import Image from "react-bootstrap/Image";
import {Button} from "react-bootstrap";
import {signIn} from "next-auth/react";

export default function Login() {
	return (
		<div className={"d-flex w-100 align-items-center justify-content-center"}>
			<div className={`w-25 p-3 ${styles.loginRectangle}`}>
				<div className={"d-flex justify-content-center"}>
					<h1>Common UI</h1>
				</div>
				<div className={"d-flex align-items-center justify-content-center mt-4"}>
					<Button variant={"outline-dark"} onClick={() => signIn("keycloak")}>
						<div className={"d-flex align-items-center px-2"}>
							<Image className={"me-3"} src={"/keycloakLogo.png"} width={25} height={25} alt={"Keycloak logo"}/>
							Sign in with Keycloak
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
}
