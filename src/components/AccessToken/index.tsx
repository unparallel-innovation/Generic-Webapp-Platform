import {useSession} from "next-auth/react";
import {Session} from "next-auth";


export default function AccessToken(){
	const {data} = useSession();
	if(!data) return null
	//@ts-ignore
	const {accessToken} = data;
	return <div>Access Token: {accessToken}</div>;
}
