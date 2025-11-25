import {DBTArrowRightUp} from "../shared/icons/DBTarrowRU"

type HablemosProps = {onOpenForm: () => void;};

export const DBTHablemos = ({ onOpenForm }: HablemosProps) => (
	<>
		<section className="hablemos">
			<article className="hablemos__content">
				<div className="hablemos__header">
					<h6 className="hablemos__subtitle">{'{Hablemos}'}</h6>
					<h2 className="hablemos__title">¿Listo para elevar tu trabajo?</h2>
					<p className="hablemos__description">
						Comienza a ser impecable, no te conformes con menos
					</p>
				</div>
				<button className="btn btn--M btn--dark" onClick={onOpenForm}>Hablemos <DBTArrowRightUp width={16} height={16} color="#ffffff" className="my-icon" /></button>
			</article>
			<img className="DBT-gif" src="dbitcode.gif" alt="dBitdcode" />
		</section>
	</>
);