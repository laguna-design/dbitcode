export const DBTServicios = () => (
	<>
		<section className="services">
			<article className="services__intro">
				<div className="services__introHeader">
					<h6 className="services__subtitle">{'{Servicios}'}</h6>
					<h2 className="services__title">No vendemos humo</h2>
					<p className="services__description">Estas son las teconologías que dominamos. No hacemos trabajo a medias, nuestro código es sólido, sostenible y enfocado a quitarte dolores de cabeza.</p>
				</div>
				<a href="#contact" className="btn btn--M btn--light">¿Qué necesitas? 🡥</a>
			</article>
			<div className="services__carousel">
				<div className="services__logo"><img src="logo1.png" alt="Logo 1" /></div>
				<div className="services__logo"><img src="logo1.png" alt="Logo 2" /></div>
				<div className="services__logo"><img src="logo1.png" alt="Logo 3" /></div>
				<div className="services__logo"><img src="logo1.png" alt="Logo 4" /></div>
				<div className="services__logo"><img src="logo1.png" alt="Logo 5" /></div>
			</div>
		</section>
	</>
);