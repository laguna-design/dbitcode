import { useState } from "react";
import DbitcodeLogo from "/dbitcode.svg";
import {DBTArrowRightUp} from "./icons/DBTarrowRU"

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
	setIsMobileMenuOpen(false);
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
		className={`header__hamburger ${isMobileMenuOpen ? "is-open" : ""}`}
		onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
		aria-label="Abrir menú"
		>
			<svg
				width="32"
				height="11"
				viewBox="0 0 32 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
				className="hamburger-line line-top"
				x1="0.5"
				y1="0.5"
				x2="31.5"
				y2="0.5"
				stroke="#4C4C4C"
				strokeLinecap="round"
				/>
				<line
				className="hamburger-line line-bottom"
				x1="0.5"
				y1="10.5"
				x2="31.5"
				y2="10.5"
				stroke="#4C4C4C"
				strokeLinecap="round"
				/>
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
		Empecemos <DBTArrowRightUp width={16} height={16} color="#4c4c4c" className="my-icon" />
		</button>
	</div>
	</header>
);
};