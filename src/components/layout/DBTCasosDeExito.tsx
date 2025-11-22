export const DBTCasosDeExito = () => (
	<>
		<section className="cases">
			<div className="cases__slider">
				<h6 className="cases__subtitle">{'{Casos de éxito}'}</h6>
				<div className="cases__wrapper">
					<nav className="cases__nav">
						<ul className="cases__nav-list">
							<li className="cases__nav-item"><a href="#producto1" class="current">Producto 1</a></li>
							<li className="cases__nav-item"><a href="#producto2">Producto 2</a></li>
						</ul>
					</nav>
					<div className="cases__slides">
						<div className="cases__slide" id="producto1">
							<article className="cases__slide-content">
							<h3 className="cases__slide-title">Producto 1</h3>
							<p className="cases__slide-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ipsum quam. Maecenas quis ipsum sit amet dui posuere lacinia nec a lorem.
							</p>
							</article>
							<img className="cases__slide-image" src="producto1.png" alt="Producto 1" />
						</div>

						<div className="cases__slide" id="producto2">
							<article className="cases__slide-content">
							<h3 className="cases__slide-title">Producto 2</h3>
							<p className="cases__slide-text">Lorem ipsum...</p>
							</article>
							<img className="cases__slide-image" src="producto2.png" alt="Producto 2" />
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);