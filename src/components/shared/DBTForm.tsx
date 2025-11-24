import { useForm, ValidationError } from "@formspree/react";

function DBTForm() {
const [state, handleSubmit] = useForm("xqaokwpd"); // replace with your Formspree ID

if (state.succeeded) {
	return <p className="form__success">¡Gracias por tu mensaje!</p>;
}

return (
	<form className="form" onSubmit={handleSubmit}>
		<div className="form__group">
			<label htmlFor="nombre" className="form__label">Nombre + Apellidos</label>
			<input
			id="nombre"
			type="text"
			name="nombre"
			className="form__input"
			placeholder="Tu nombre completo"
			required
			/>
			<ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
		</div>
		<div className="form__col-2">
			<div className="form__group">
				<label htmlFor="telefono" className="form__label">Teléfono</label>
				<input
				id="telefono"
				type="tel"
				name="telefono"
				className="form__input"
				placeholder="Tu número de teléfono"
				required
				/>
				<ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
			</div>

			<div className="form__group">
				<label htmlFor="email" className="form__label">Mail</label>
				<input
				id="email"
				type="email"
				name="email"
				className="form__input"
				placeholder="Tu correo electrónico"
				required
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
		</div>

		<div className="form__group">
			<label htmlFor="mensaje" className="form__label">Mensaje</label>
			<textarea
			id="mensaje"
			name="mensaje"
			className="form__textarea"
			placeholder="Escribe tu mensaje aquí"
			required
			/>
			<ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
		</div>

		<div className="form__group form__group--checkbox">
			<label className="form__checkbox-label">
			<input
				type="checkbox"
				name="consent"
				className="form__checkbox"
				required
			/>
			Al usar este formulario, accedes al almacenamiento y gestión de tus datos por parte de %%empresa%%
			</label>
			<ValidationError prefix="Consent" field="consent" errors={state.errors} />
		</div>

		<div className="form__actions">
			<button type="submit" className="form__button btn btn--M btn--dark" disabled={state.submitting}>Enviar →</button>
		</div>
	</form>
);
}

export default DBTForm;