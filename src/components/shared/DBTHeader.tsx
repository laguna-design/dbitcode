import DbitcodeLogo from '/dbitcode.svg'

type HeaderProps = {onOpenForm: () => void;};

export const DBTHeader = ({ onOpenForm }: HeaderProps) => (
	<>
	<header className="header">
		<div className='header__col-1'>
			<div className="header__logo">
				<img className="header__logo-image" src={DbitcodeLogo} alt="Dbitcode" width="90" />
			</div>
			<nav className="header__nav">
				<ul className="header__menu">
					<li className="header__menu-item"><a href="#quehacemos">¿Qué hacemos?</a></li>
					<li className="header__menu-item"><a href="#servicios">Servicios</a></li>
					<li className="header__menu-item"><a href="#casos-de-exito">Casos de éxito</a></li>
					<li className="header__menu-item"><a href="#hablemos">Hablemos</a></li>
				</ul>
			</nav>
		</div>
		<div className="header__contact">
			<button className="btn btn--link" onClick={onOpenForm}>Empecemos 🡥</button>
		</div>
	</header>
</>
);