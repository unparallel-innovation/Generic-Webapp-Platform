import {useSession} from "next-auth/react";

export default function AccessToken(){
    const {data} = useSession();
    const {accessToken} = data;
    return <div>Access Token: {accessToken}</div>;
}
