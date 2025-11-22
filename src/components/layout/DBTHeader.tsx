import DbitcodeLogo from '/dbitcode.svg'

export const DBTHeader = () => (
<>
    <header>
		<div className="logo">
			<img src={DbitcodeLogo} className="logo" alt="Dbitcode" width="90px" />
		</div>

		<nav>
		<ul className="menu">
			<li><a href="#home">¿Qué hacemos?</a></li>
			<li><a href="#services">Servicios</a></li>
			<li><a href="#about">Casos de éxito</a></li>
			<li><a href="#portfolio">Hablemos</a></li>
		</ul>
		</nav>

		<div className="contact-button">
			<a href="#contact" className="btn">Empecemos</a>
		</div>
	</header>
</>
);