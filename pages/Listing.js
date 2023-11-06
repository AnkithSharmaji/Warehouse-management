import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWarehouses } from '../../api/warehouses';
import Filter from '../../components/Filter';
import Search from '../../components/Search';
import WarehouseCard from '../../components/WarehouseCard';

const ListingPage = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouses.warehouses);

  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  return (
    <div className="listing-page">
      <h2>Warehouses</h2>
      <Filter />
      <Search />
      <div className="warehouse-list">
        {warehouses.map((warehouse) => (
          <WarehouseCard key={warehouse.id} warehouse={warehouse} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
