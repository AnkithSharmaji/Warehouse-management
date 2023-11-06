import React from 'react';

const WarehouseDetails = ({ warehouse }) => {
  return (
    <div className="warehouse-details">
      <h2>{warehouse.name}</h2>
      <p>Code: {warehouse.code}</p>
      <p>City: {warehouse.city}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Space Available: {warehouse.space_available}</p>
      <p>Type: {warehouse.type}</p>
      <p>Is Registered: {warehouse.is_registered ? 'Yes' : 'No'}</p>
      <p>Is Live: {warehouse.is_live ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default WarehouseDetails;
