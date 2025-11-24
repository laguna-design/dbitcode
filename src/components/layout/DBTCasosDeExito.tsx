import { useState } from "react";

export const DBTCasosDeExito = () => {
	const [activeSlide, setActiveSlide] = useState("producto1");

	return (
		<section className="cases">
			<h6 className="cases__subtitle">{'{Casos de éxito}'}</h6>
			<div className="cases__wrapper">
				<nav className="cases__nav">
					<ul className="cases__nav-list">
					<li className="cases__nav-item">
						<button
						className={activeSlide === "producto1" ? "current" : ""}
						onClick={() => setActiveSlide("producto1")}
						>
						Producto 1
						</button>
					</li>
					<li className="cases__nav-item">
						<button
						className={activeSlide === "producto2" ? "current" : ""}
						onClick={() => setActiveSlide("producto2")}
						>
						Producto 2
						</button>
					</li>
					</ul>
				</nav>

				<div className="cases__slides">
					{activeSlide === "producto1" && (
					<div className="cases__slide">
						<article className="cases__slide-content">
						<h3 className="cases__slide-title">Producto 1</h3>
						<p className="cases__slide-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aenean at ipsum quam. Maecenas quis ipsum sit amet dui
							posuere lacinia nec a lorem.
						</p>
						</article>
						{/* <img
						className="cases__slide-image"
						src="producto1.png"
						alt="Producto 1"
						/> */}
						<div style={{width:'100%', height: '192px', borderRadius: '8px', backgroundColor:'#D9D9D9'}}></div>
					</div>
					)}

					{activeSlide === "producto2" && (
					<div className="cases__slide">
						<article className="cases__slide-content">
						<h3 className="cases__slide-title">Producto 2</h3>
						<p className="cases__slide-text">Lorem ipsum...</p>
						</article>
						{/* <img
						className="cases__slide-image"
						src="producto2.png"
						alt="Producto 2"
						/> */}
						<div style={{width:'100%', height: '192px', borderRadius: '8px', backgroundColor:'#D9D9D9'}}></div>
					</div>
					)}
				</div>
			</div>
		</section>
	);
};