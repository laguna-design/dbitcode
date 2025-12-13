import React, { useEffect, useState } from "react";
import {DBTClose} from "./icons/DBTClose"

type ModalProps = {
isOpen: boolean;
onClose: () => void;
children: React.ReactNode;
};

function DBTModal({ isOpen, onClose, children }: ModalProps) {
const [visible, setVisible] = useState(false);
const [openClass, setOpenClass] = useState(false);

useEffect(() => {
	if (isOpen) {
	setVisible(true);
	const timer = setTimeout(() => setOpenClass(true), 20);
	return () => clearTimeout(timer);
	} else if (visible) {
	setOpenClass(false);
	const timer = setTimeout(() => setVisible(false), 300);
	return () => clearTimeout(timer);
	}
}, [isOpen, visible]);

if (!visible) return null;

return (
	<div className={`modal ${openClass ? "modal--open" : ""}`}>
	<div className="modal__overlay" onClick={onClose}></div>
	<div className="modal__content">
		<header className="modal__header">
		<h3>{'{Escríbenos}'}</h3>
		<p>Escríbenos un mensaje con lo que necesites y te responderemos lo antes posible</p>
		</header>
		<button className="modal__close btn btn--link" onClick={onClose}>
			<DBTClose width={16} height={16} color="#4c4c4c" className="my-icon" /> Cerrar
		</button>
		{children}
	</div>
	</div>
);
}

export default DBTModal;