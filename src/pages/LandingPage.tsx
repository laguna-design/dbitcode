import { useState } from "react";

//Blocks
import { DBTHeader } from "../components/shared/DBTHeader";
import { DBTHeroZone } from "../components/layout/DBTheroZone";
import { DBTLoQueHacemos } from "../components/layout/DBTLoQueHacemos";
import { DBTServicios } from "../components/layout/DBTServicios";
import { DBTCasosDeExito } from "../components/layout/DBTCasosDeExito";
import { DBTHablemos } from "../components/layout/DBTHablemos";
import { DBTFooter } from "../components/shared/DBTFooter";

//Modal form
import DBTForm from "../components/shared/DBTForm";
import DBTModal from "../components/shared/DBTModal";

	export const LandingPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openFormModal = () => setIsOpen(true);
	const closeFormModal = () => setIsOpen(false);

	return (
		<>
		<DBTHeader onOpenForm={openFormModal} />
		<main className="container">
			<DBTHeroZone onOpenForm={openFormModal} />
			<DBTLoQueHacemos />
			<DBTServicios onOpenForm={openFormModal} />
			<DBTCasosDeExito />
			<DBTHablemos onOpenForm={openFormModal} />
		</main>
		<DBTFooter onOpenForm={openFormModal}  />

		<DBTModal isOpen={isOpen} onClose={closeFormModal}>
			<DBTForm />
		</DBTModal>
		</>
	);
};