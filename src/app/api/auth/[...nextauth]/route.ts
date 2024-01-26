import NextAuth, {Session} from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export interface SessionWithAccessToken extends Session {
	accessToken:string
}


const handler = NextAuth({
	// Configure one or more authentication providers
	providers: [
		// ...add more providers here
		KeycloakProvider({
			clientId: process.env.AUTH_CLIENT_ID || "",
			clientSecret: process.env.AUTH_CLIENT_SECRET || "",
			issuer: process.env.AUTH_ISSUER
		})
	],
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token
			}
			return token
		},
		async session({ session, token, user }):Promise<SessionWithAccessToken> {
			// Send properties to the client, like an access_token from a provider.
			return {...session,accessToken:token.accessToken as string}
		}
	}
})

export { handler as GET, handler as POST }