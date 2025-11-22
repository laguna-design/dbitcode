import { DBTHeader } from "../components/shared/DBTHeader";
import { DBTHeroZone } from "../components/layout/DBTheroZone";
import { DBTLoQueHacemos } from "../components/layout/DBTLoQueHacemos";
import { DBTServicios } from "../components/layout/DBTServicios";
import { DBTCasosDeExito } from "../components/layout/DBTCasosDeExito";
import { DBTHablemos } from "../components/layout/DBTHablemos";
import { DBTFooter } from "../components/shared/DBTFooter";



import { DbtMotionSeparator } from "../components/shared/DbtMotionSeparator";

export const LandingPage = () => (
	<>
		<DBTHeader />
		
		<DBTHeroZone />

		<DbtMotionSeparator />

		<DBTLoQueHacemos />

		<DBTServicios />

		<DBTCasosDeExito />

		<DBTHablemos />

		<DBTFooter />

	</>
);