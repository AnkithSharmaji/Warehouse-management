import React from 'react';

const WarehouseCard = ({ warehouse }) => {
  return (
    <div className="warehouse-card">
      <h2>{warehouse.name}</h2>
      <p>City: {warehouse.city}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Space Available: {warehouse.space_available}</p>
      <button>View Details</button>
    </div>
  );
};

export default WarehouseCard;
