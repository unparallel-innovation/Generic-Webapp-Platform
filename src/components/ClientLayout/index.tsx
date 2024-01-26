"use client"
import globals from "@/styles/global.module.css";
import Header from "@/components/layout/Header";
import {SessionProvider} from "next-auth/react";
import Footer from "@/components/layout/Footer";
import {GRANT_AGREEMENT_NUMBER, PROGRAMME_NAME, PROJECT_NAME} from "@/components/lib/constant";

interface ClientLayoutProps {
	children: React.ReactNode
}
export default function ClientLayout({children}:ClientLayoutProps){
	return (
		<SessionProvider>
			<header className={globals.bgColour}>
				<Header/>
			</header>
			<main className={`d-flex flex-grow-1 ${globals.bgColour} ${globals.font}`}>
				{children}
			</main>
			<footer>
				<Footer projectName={PROJECT_NAME} programmeName={PROGRAMME_NAME} grantAgreementNumber={GRANT_AGREEMENT_NUMBER}/>
			</footer>
		</SessionProvider>
	)
}