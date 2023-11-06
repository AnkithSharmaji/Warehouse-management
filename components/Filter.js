import React from 'react';

const Filter = () => {
  return (
    <div className="filter">
      <h2>Filter Warehouses</h2>
      <form>
        <label>City:</label>
        <input type="text" placeholder="Filter by city" />
        <label>Cluster:</label>
        <select>
          <option value="all">All Clusters</option>
          <option value="cluster-a-1">Cluster A-1</option>
          <option value="cluster-a-2">Cluster A-2</option>
          <option value="cluster-a-3">Cluster A-3</option>
          <option value="cluster-a-21">Cluster A-21</option>
        </select>
        <label>Space Available:</label>
        <input type="number" placeholder="Minimum space available" />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
