import React, { useEffect, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function DBTModal({ isOpen, onClose, children }: ModalProps) {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 300); // match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, visible]);

  if (!visible) return null;

  return (
    <div className={`modal ${isOpen ? "modal--open" : ""} ${closing ? "modal--closing" : ""}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <header className="modal__header">
          <h3>{'{Escríbenos}'}</h3>
          <p>Escríbenos un mensaje con lo que necesites y te responderemos lo antes posible</p>
        </header>
        <button className="modal__close" onClick={onClose}>
          ✕ Cerrar
        </button>
        {children}
      </div>
    </div>
  );
}

export default DBTModal;