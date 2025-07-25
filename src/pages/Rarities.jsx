import React from 'react';
import TableComponent from "../components/TableComponent";

const Rarities = () => {
  const raritiesData = [
    { id: 1, name: 'Common', symbol: '●', rarityLevel: 1 },
    { id: 2, name: 'Uncommon', symbol: '◆', rarityLevel: 2 },
    { id: 3, name: 'Rare', symbol: '★', rarityLevel: 3 },
    { id: 4, name: 'Holo Rare', symbol: '☆', rarityLevel: 4 },
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Symbol', accessor: 'symbol' },
    { header: 'Rarity Level', accessor: 'rarityLevel' },
  ];

  const handleDelete = (id) => {
    console.log('Delete rarity with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Rarities Management"
        columns={columns}
        data={raritiesData}
        addButtonLink="/rarities/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Rarities;