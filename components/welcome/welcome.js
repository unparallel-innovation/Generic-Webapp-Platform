import {useSession} from "next-auth/react";
import {Card} from "react-bootstrap";
import Date from "../date";
import jwt_decode from "jwt-decode";
import FrontendHelper from "@unparallel/frontend-helper";

async function getSession(){
    const fh = new FrontendHelper();
    const session = await fh.getSession("http://localhost:3000");

    return session;
}

export default function Welcome() {
    const {data: session, status} = useSession();
    const decodedToken = jwt_decode(session.accessToken);
    const roles = decodedToken["resource_access"].account.roles;
    const displayRoles = roles.map((item, index) => {
        if(index < roles.length - 1)
            return <span key={index}>{item}, </span>
        else
            return <span key={index}>{item}</span>
    });

    getSession().then(session => console.log(session));

    return (
        <div className={"d-flex w-100 py-3"}>
            <div className={"w-25 mx-3"}>
                <Card>
                    <Card.Img src={"/welcome.png"} alt={"Welcome image"}/>
                    <Card.ImgOverlay className={"d-flex align-items-center justify-content-center"}>
                        <div>
                            <h5>Welcome to the Common UI</h5>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className={"w-25 mx-3"}>
                <Card>
                    <Card.Img src={"/welcome.png"} alt={"Welcome image"}/>
                    <Card.ImgOverlay className={"d-flex flex-column justify-content-center"}>
                        <div>
                            <b>Username:</b> {session.user.name}<br/>
                        </div>
                        <div>
                            <b>Email:</b> {session.user.email}
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className={"w-25 mx-3"}>
                <Card>
                    <Card.Img src={"/welcome.png"} alt={"Welcome image"}/>
                    <Card.ImgOverlay className={"d-flex flex-column justify-content-center"}>
                        <div>
                            <b>Status:</b> {status}<br/>
                        </div>
                        <div>
                            <b>Expiry Date:</b> <Date dateString={session.expires}/>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className={"w-25 mx-3"}>
                <Card>
                    <Card.Img src={"/welcome.png"} alt={"Welcome image"}/>
                    <Card.ImgOverlay className={"d-flex flex-column justify-content-center"}>
                        <div>
                            <b>Roles:</b> {displayRoles}
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
}
