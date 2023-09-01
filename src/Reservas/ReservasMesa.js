import React, { useState, useEffect } from 'react';
import getMesas from '../Plano/Reservations';
import Item from '../Plano/Item';
import ReservationModal from './ReservationModal';

function ReservasMesa() {
    const [items, setItems] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        getMesas()
            .then(mesas => {
                setItems(mesas);
            })
            .catch(error => console.error('Error obteniendo las mesas:', error));
    }, []);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedItemId(null);
    };

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'row' }}>
            <div id="plano" style={{ position: 'relative', width: 500, height: 500, border: '1px solid black' }}>
                {items.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        top={item.top}
                        left={item.left}
                        numero={item.numero}
                        comensales={item.comensales}
                        onClick={() => handleItemClick(item.id)}
                    />
                ))}
            </div>
            {modalOpen && (
    <ReservationModal 
        selectedItemId={selectedItemId}
        isOpen={modalOpen}
        onClose={handleModalClose}
    />
)}
        </div>
    );
}

export default ReservasMesa;
