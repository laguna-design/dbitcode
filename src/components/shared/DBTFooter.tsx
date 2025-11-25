import DbitcodeLogo from "/dbitcode.svg"; // ✅ relative import

type FooterProps = {
onOpenForm: () => void;
onScrollQuehacemos: () => void;
onScrollServicios: () => void;
onScrollCasos: () => void;
onScrollHablemos: () => void;
};

export const DBTFooter = ({
onOpenForm,
onScrollQuehacemos,
onScrollServicios,
onScrollCasos,
}: FooterProps) => {
const handleScroll = (scrollFn: () => void) => {
	scrollFn();
};

return (
	<footer className="footer">
	<div className="footer__main">
		<div className="footer__logo">
		<img
			className="footer__logo-image"
			src={DbitcodeLogo}
			alt="Dbitcode"
			width="90"
		/>
		<section>
			<span className="footer__impecables">{'{Somos impecables}'}</span>
			<br />
			Código limpio, eficiente y correcto.
			<br />
			Respuesta inmediata, empática y con soluciones.
		</section>
		</div>

		<nav className="footer__nav">
		<div className="footer__nav-mainMenu">
			<h6 className="footer__nav-title">Menu</h6>
			<ul className="footer__menu">
			<li className="footer__menu-item">
				<button className="btn btn--link" onClick={() => handleScroll(onScrollQuehacemos)}>
				¿Qué hacemos?
				</button>
			</li>
			<li className="footer__menu-item">
				<button className="btn btn--link" onClick={() => handleScroll(onScrollServicios)}>
				Servicios
				</button>
			</li>
			<li className="footer__menu-item">
				<button className="btn btn--link" onClick={() => handleScroll(onScrollCasos)}>
				Casos de éxito
				</button>
			</li>

			<li className="footer__menu-item">
				<button className="btn btn--link" onClick={onOpenForm}>
				Hablemos 🡥
				</button>
			</li>
			
			</ul>
		</div>
		
		<section className="footer__contact">
			<h6 className="footer__contact-title">Contacto</h6>
			<a className="btn btn--link" href="mailto:info@dbitcode.com">
			info@dbitcode.com 🡥
			</a>
			<address className="footer__address">
			Dbitcode consulting SL.
			<br />
			Calle dragón <br />
			928918 Leganés
			<br />
			Madrid, España
			</address>
		</section>
		</nav>
	</div>

	<div className="footer__bottom">
		<div className="footer__legal">
		<h6 className="footer__legal-title">Legales</h6>
		<ul className="footer__legal-menu">
			<li className="footer__legal-item">
			<button className="btn btn--link">Política de privacidad</button>
			</li>
			<li className="footer__legal-item">
			<button className="btn btn--link">Aviso legal</button>
			</li>
			<li className="footer__legal-item">
			<button className="btn btn--link">Política de cookies</button>
			</li>
		</ul>
		</div>
		<div className="footer__copyright">2025 © Dbitcode</div>
	</div>
	</footer>
);
};