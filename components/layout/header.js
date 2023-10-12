import {useSession, signOut} from "next-auth/react";
import {NavDropdown, Nav, Navbar} from "react-bootstrap";
import styles from "./header.module.css";
import { PersonCircle } from "react-bootstrap-icons";

export default function Header(){
    const {data: session} = useSession();
    return (
        <Navbar className={`${styles.navbar} px-4 py-3`} variant={"light"}>
            <Navbar.Brand href={"/"}>
                <Navbar.Text className={"text-dark"}><i>PROJECT_ICON</i></Navbar.Text>
            </Navbar.Brand>

            <Nav className={"justify-content-end w-100"}>
                <NavDropdown title={
                    <PersonCircle color={"dark"} size={"25"}/>
                } menuVariant={"dark"} align={"end"}>
                    <NavDropdown.Item disabled>
                        {session.user.name}
                    </NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item>
                        <div onClick={() => signOut()}>
                            Sign out
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}
