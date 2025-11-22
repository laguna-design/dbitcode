import DbitcodeLogo from '/dbitcode.svg'

export const DBTFooter = () => (
<>
	<footer>
		<div className="logo">
			<img src={DbitcodeLogo} className="logo" alt="Dbitcode" width="90px" />
		</div>

		<nav>
			<h6>Menu</h6>
			<ul className="menu">
				<li><a href="#home">¿Qué hacemos?</a></li>
				<li><a href="#services">Servicios</a></li>
				<li><a href="#about">Casos de éxito</a></li>
				<li><a href="#portfolio">Hablemos</a></li>
			</ul>

			<section>
				<h6>Contacto</h6>
				<a href='mailto:info@dbitcode.com' >info@dbitcode.com 🡥</a>
				<address>
					Dbitcode consulting SL.Calle dragón 928918 LeganesMadrid, España
				</address>

			</section>
		</nav>

		<div>
			<h6>Legales</h6>
			<ul className="menu">
				<li><a href="#">Política de privacidad</a></li>
				<li><a href="#">Aviso Legal</a></li>
				<li><a href="#">Política de cookies</a></li>
			</ul>

		</div>
	</footer>
</>
);