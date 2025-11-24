import { useTypewriter } from "../../hooks/useTypewriter";
import { DbtMotionSeparator } from "../shared/DbtMotionSeparator"

type HeroProps = {
	onOpenForm: () => void;
};

export const DBTHeroZone = ({ onOpenForm }: HeroProps) => {
	
	const typedText = useTypewriter(["{simple}", "{limpio}", "{impecable}"]);

	return (
		<section className="hero">
		<div className="hero__content">
			<div className="hero__tagline-wrapper">
				<small className="hero__tagline">+20 años</small>
			</div>
			<h1 className="hero__title">
				Lo hacemos <span className="hero__title-ascent">{typedText}</span>
			</h1>
			<h5 className="hero__description">
				Somos <b>solventes</b>, <b>sólidos</b> y <b>profundamente empáticos</b>.<br />
				Cuenta con nosotros, nuestra velocidad de respuesta es insuperable
			</h5>
			<ul className="hero__actions">
				<li><button className="btn btn--M btn--light">Conócenos</button></li>
				<li><button className="btn btn--M btn--dark" onClick={onOpenForm}>Hablemos 🡥</button></li>

			</ul>
		</div>
		<DbtMotionSeparator />
	</section>
	);
};