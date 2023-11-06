import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWarehouseDetails } from '../../api/warehouses';
import WarehouseDetails from '../../components/WarehouseDetails';

const DetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const warehouse = useSelector((state) => state.warehouses.currentWarehouse);

  useEffect(() => {
    const warehouseId = match.params.id;
    dispatch(fetchWarehouseDetails(warehouseId));
  }, [dispatch, match]);

  return warehouse ? (
    <WarehouseDetails warehouse={warehouse} />
  ) : (
    <div>Loading warehouse details...</div>
  );
};

export default DetailsPage;
