import DbitcodeLogo from '/dbitcode.svg'

export const DBTFooter = () => (
<>
	<footer className="footer">
		<div className="footer__main">
			<div className="footer__logo">
				<img className="footer__logo-image" src={DbitcodeLogo} alt="Dbitcode" width="90" />
				<section>
					<span className="footer__impecables">{'{Somos impecables}'}</span><br />
					Código limpio, eficiente y correcto.<br />
					Respuesta inmediata, empática y con soluciones.
				</section>
			</div>
			<nav className="footer__nav">
				<div className="footer__nav-mainMenu">
					<h6 className="footer__nav-title">Menu</h6>
					<ul className="footer__menu">
					<li className="footer__menu-item"><a href="#home">¿Qué hacemos?</a></li>
					<li className="footer__menu-item"><a href="#servicios">Servicios</a></li>
					<li className="footer__menu-item"><a href="#casos-de-exito">Casos de éxito</a></li>
					<li className="footer__menu-item"><a href="#hablemos">Hablemos</a></li>
					</ul>
				</div>
				<section className="footer__contact">
				<h6 className="footer__contact-title">Contacto</h6>
				<a href="mailto:info@dbitcode.com">info@dbitcode.com 🡥</a>
				<address className="footer__address">
					Dbitcode consulting SL.<br />
					Calle dragón <br />
					928918 Leganés<br />
					Madrid, España</address>
				</section>
			</nav>
		</div>
		<div className="footer__bottom">
			<div className="footer__legal">
				<h6 className="footer__legal-title">Legales</h6>
				<ul className="footer__legal-menu">
					<li className="footer__legal-item"><a href="#">Política de privacidad</a></li>
					<li className="footer__legal-item"><a href="#">Aviso legal</a></li>
					<li className="footer__legal-item"><a href="#">Política de cookies</a></li>
				</ul>
			</div>
			<div className="footer__coypright">2025 © Dbitcode</div>
		</div>
	</footer>
</>
);