import { DBTHeader } from "../components/shared/DBTHeader";
import { DBTHeroZone } from "../components/layout/DBTheroZone";
import { DBTLoQueHacemos } from "../components/layout/DBTLoQueHacemos";
import { DBTServicios } from "../components/layout/DBTServicios";
import { DBTCasosDeExito } from "../components/layout/DBTCasosDeExito";
import { DBTHablemos } from "../components/layout/DBTHablemos";
import { DBTFooter } from "../components/shared/DBTFooter";
import DBTForm from "../components/shared/DBTForm"



export const LandingPage = () => (
	<>
			<DBTHeader />
		<main className="container">
			
			<DBTHeroZone />

			<DBTForm />

			<DBTLoQueHacemos />

			<DBTServicios />

			<DBTCasosDeExito />

			<DBTHablemos />

		</main>
			<DBTFooter />

	</>
);