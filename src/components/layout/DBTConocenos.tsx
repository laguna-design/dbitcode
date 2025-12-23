import {DBTArrowRightUp} from "../shared/icons/DBTarrowRU"

type ConocenosProps = {onOpenForm: () => void;};

export const DBTConocenos = ({ onOpenForm }: ConocenosProps) => (
	<>
		<section className="conocenos">
			<article className="conocenos__content">
				<div className="conocenos__header">
					<h6 className="conocenos__subtitle">{'{Conócenos}'}</h6>
					<h2 className="conocenos__title">Conoce dBitdcode</h2>
					<div  className="conocenos__description">
						<div className="hablemos__col">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis quis metus nec finibus. Nam blandit et lectus at venenatis. 
							</p>
							<p>
								Etiam malesuada fermentum diam ac suscipit. Phasellus volutpat leo at consectetur eleifend. 
							</p>
							<p>
								Fusce a quam vestibulum, tempor dui sed, consectetur elit. Proin imperdiet, odio non faucibus molestie, nunc libero feugiat nibh, sit amet lobortis sem risus in quam.
							</p>
						</div>
						<div className="hablemos__col">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis quis metus nec finibus. Nam blandit et lectus at venenatis. 
							</p>
							<p>
								Etiam malesuada fermentum diam ac suscipit. Phasellus volutpat leo at consectetur eleifend. 
							</p>
							<p>
								Fusce a quam vestibulum, tempor dui sed, consectetur elit. Proin imperdiet, odio non faucibus molestie, nunc libero feugiat nibh, sit amet lobortis sem risus in quam.
							</p>
						</div>
						<img className="DBT-gif" src="dbitcode.gif" alt="dBitdcode" />
					</div>
				</div>
				<button className="btn btn--M btn--dark" onClick={onOpenForm}>Hablemos <DBTArrowRightUp width={16} height={16} color="#ffffff" className="my-icon" /></button>
			</article>
		</section>
	</>
);