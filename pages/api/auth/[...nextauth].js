import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import KeycloakProvider from "next-auth/providers/keycloak"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: "e51bb391ca2e87e273dc",
            clientSecret: "f6efe10890d84230c9190e989f25df55cff310da",
        }),
        // ...add more providers here
        KeycloakProvider({
            clientId: "frontend",
            clientSecret: "cEXfmXfXwWtNdLa5Rwbs76NuF3uyhmyl",
            issuer: "http://localhost:8080/realms/collaborative-frontend-development-framework"
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
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    }
})
