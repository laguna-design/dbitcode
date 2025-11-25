import { useState, useRef } from "react";

// Blocks
import { DBTHeader } from "../components/shared/DBTHeader";
import { DBTHeroZone } from "../components/layout/DBTheroZone";
import { DBTLoQueHacemos } from "../components/layout/DBTLoQueHacemos";
import { DBTServicios } from "../components/layout/DBTServicios";
import { DBTCasosDeExito } from "../components/layout/DBTCasosDeExito";
import { DBTHablemos } from "../components/layout/DBTHablemos";
import { DBTFooter } from "../components/shared/DBTFooter";

// Modal form
import DBTForm from "../components/shared/DBTForm";
import DBTModal from "../components/shared/DBTModal";



export const LandingPage = () => {
const [isOpen, setIsOpen] = useState(false);

const openFormModal = () => setIsOpen(true);
const closeFormModal = () => setIsOpen(false);

// Refs for sections
const quehacemosRef = useRef<HTMLDivElement>(null);
const serviciosRef = useRef<HTMLDivElement>(null);
const casosRef = useRef<HTMLDivElement>(null);
const hablemosRef = useRef<HTMLDivElement>(null);

const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    const offset = 116; // height of your fixed header
    const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

return (
	<>
	<DBTHeader
		onOpenForm={openFormModal}
		onScrollQuehacemos={() => scrollTo(quehacemosRef)}
		onScrollServicios={() => scrollTo(serviciosRef)}
		onScrollCasos={() => scrollTo(casosRef)}
		onScrollHablemos={() => scrollTo(hablemosRef)}
	/>
	<main className="container">
		<DBTHeroZone onOpenForm={openFormModal} />

		<div ref={quehacemosRef}>
		<DBTLoQueHacemos />
		</div>

		<div ref={serviciosRef}>
		<DBTServicios onOpenForm={openFormModal} />
		</div>

		<div ref={casosRef}>
		<DBTCasosDeExito />
		</div>

		<div ref={hablemosRef}>
		<DBTHablemos onOpenForm={openFormModal} />
		</div>
	</main>

	<DBTFooter
		onOpenForm={openFormModal}
		onScrollQuehacemos={() => scrollTo(quehacemosRef)}
		onScrollServicios={() => scrollTo(serviciosRef)}
		onScrollCasos={() => scrollTo(casosRef)}
		onScrollHablemos={() => scrollTo(hablemosRef)}
	/>

	<DBTModal isOpen={isOpen} onClose={closeFormModal}>
		<DBTForm />
	</DBTModal>
	</>
);
};