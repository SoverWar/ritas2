import React from 'react';

function ReservationModal({ selectedItemId, isOpen, onClose }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: isOpen ? 'block' : 'none',
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: 20,
                margin: '50px auto',
                maxWidth: 500,
            }}>
                <h2>Reserva para mesa {selectedItemId}</h2>
                {/* Aquí podrías poner un formulario para realizar la reserva */}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default ReservationModal;
