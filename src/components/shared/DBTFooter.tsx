import DbitcodeLogo from '/dbitcode.svg'

export const DBTFooter = () => (
<>
	<footer className="footer">
		<div className="footer__logo">
			<img className="footer__logo-image" src={DbitcodeLogo} alt="Dbitcode" width="90" />
		</div>
		<nav className="footer__nav">
			<h6 className="footer__nav-title">Menu</h6>
			<ul className="footer__menu">
			<li className="footer__menu-item"><a href="#home">¿Qué hacemos?</a></li>
			<li className="footer__menu-item"><a href="#servicios">Servicios</a></li>
			<li className="footer__menu-item"><a href="#casos-de-exito">Casos de éxito</a></li>
			<li className="footer__menu-item"><a href="#hablemos">Hablemos</a></li>
			
			</ul>
			<section className="footer__contact">
			<h6 className="footer__contact-title">Contacto</h6>
			<a href="mailto:info@dbitcode.com">info@dbitcode.com 🡥</a>
			<address className="footer__address">Dbitcode consulting SL.Calle dragón 928918 LeganesMadrid, España</address>
			</section>
		</nav>
		<div className="footer__legal">
			<h6 className="footer__legal-title">Legales</h6>
			<ul className="footer__legal-menu">
				<li className="footer__legal-item"><a href="#">Política de privacidad</a></li>
				<li className="footer__legal-item"><a href="#">Aviso legal</a></li>
				<li className="footer__legal-item"><a href="#">Política de cookies</a></li>
			</ul>
		</div>
	</footer>
</>
);