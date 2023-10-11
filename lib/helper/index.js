import FrontendHelper from "@unparallel/frontend-helper";

export async function getSession(){
        const fh = new FrontendHelper();
        const session = await fh.getSession("http://localhost:3000");

        return session;
}
