import {useSession} from "next-auth/react";
import jwt_decode from "jwt-decode";
import {Card} from "react-bootstrap";
import ShowDate from "@/components/ShowDate";

export default function Welcome(){
	const {data: session, status} = useSession();
	if(!session) return null
	//@ts-ignore
	const decodedToken:any = jwt_decode(session.accessToken);
	const roles = decodedToken["resource_access"].account.roles;

	const displayRoles = roles.map((item:any, index:any) => {
		if(index < roles.length - 1)
			return <span key={index}>{item}, </span>
		else
			return <span key={index}>{item}</span>
	});

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
							<b>Username:</b> {session?.user?.name}<br/>
						</div>
						<div>
							<b>Email:</b> {session?.user?.email}
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
							<b>Expiry Date:</b> <ShowDate dateString={session.expires}/>
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