import { useState } from "react";
import DbitcodeLogo from "/dbitcode.svg";

type HeaderProps = {
onOpenForm: () => void;
onScrollQuehacemos: () => void;
onScrollServicios: () => void;
onScrollCasos: () => void;
onScrollHablemos: () => void;
};

export const DBTHeader = ({
onOpenForm,
onScrollQuehacemos,
onScrollServicios,
onScrollCasos,
onScrollHablemos,
}: HeaderProps) => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const handleScroll = (scrollFn: () => void) => {
	scrollFn();
	setIsMobileMenuOpen(false); // close menu after click
};

return (
	<header className="header">
	<div className="header__col-1">
		<div className="header__logo">
		<button
			className="header__logo-button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Ir al inicio"
		>
			<img
			className="header__logo-image"
			src={DbitcodeLogo}
			alt="Dbitcode"
			width="90"
			/>
		</button>
		</div>

		<button
		className="header__hamburger"
		onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
		aria-label="Abrir menú"
		>
		<svg width="32" height="11" viewBox="0 0 32 11" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="0.5" y1="0.5" x2="31.5" y2="0.5" stroke="#4C4C4C" stroke-linecap="round"/>
			<line x1="0.5" y1="10.5" x2="31.5" y2="10.5" stroke="#4C4C4C" stroke-linecap="round"/>
		</svg>
		</button>

		<nav className={`header__nav ${isMobileMenuOpen ? "is-open" : ""}`}>
		<ul className="header__menu">
			<li className="header__menu-item">
			<button onClick={() => handleScroll(onScrollQuehacemos)}>
				¿Qué hacemos?
			</button>
			</li>
			<li className="header__menu-item">
			<button onClick={() => handleScroll(onScrollServicios)}>
				Servicios
			</button>
			</li>
			<li className="header__menu-item">
			<button onClick={() => handleScroll(onScrollCasos)}>
				Casos de éxito
			</button>
			</li>
			<li className="header__menu-item">
			<button onClick={() => handleScroll(onScrollHablemos)}>
				Hablemos
			</button>
			</li>
		</ul>
		</nav>
	</div>

	<div className="header__contact">
		<button className="btn btn--link" onClick={onOpenForm}>
		Empecemos 🡥
		</button>
	</div>
	</header>
);
};