type ServiciosProps = {
	onOpenForm: () => void;
};

export const DBTServicios = ({ onOpenForm }: ServiciosProps) => (
	<>
		<section className="services">
			<article className="services__intro">
				<div className="services__introHeader">
					<h6 className="services__subtitle">{'{Servicios}'}</h6>
					<h2 className="services__title">No vendemos humo</h2>
					<p className="services__description">Estas son las teconologías que dominamos. No hacemos trabajo a medias, nuestro código es sólido, sostenible y enfocado a quitarte dolores de cabeza.</p>
				</div>
				<button className="btn btn--M btn--light" onClick={onOpenForm}>¿Qué necesitas? 🡥</button>
			</article>
			<div className="services__carousel-wrapper">
				<ul className="services__carousel">
					<li><img src="logos/Python.png" alt="Python" /></li>
					<li><img src="logos/react.png" alt="React" /></li>
					<li><img src="logos/sql.png" alt="SQL" /></li>
					<li><img src="logos/synfony.png" alt="Synfony" /></li>
					<li><img src="logos/vue.png" alt="Vue" /></li>
					<li><img src="logos/android.png" alt="Android" /></li>
					<li><img src="logos/docker.png" alt="Docker" /></li>
					<li><img src="logos/git.png" alt="Git" /></li>
					<li><img src="logos/ios.png" alt="IOS" /></li>
					<li><img src="logos/java.png" alt="Java" /></li>
					<li><img src="logos/laravel.png" alt="Laravel" /></li>
					<li><img src="logos/linux.png" alt="Linux" /></li>
					<li><img src="logos/n8n.png" alt="n8n" /></li>
					<li><img src="logos/node.png" alt="Node" /></li>
				</ul>
			</div>

		</section>
	</>
);