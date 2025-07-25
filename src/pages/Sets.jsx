import React from 'react';
import TableComponent from "../components/TableComponent";

const Sets = () => {
  const setsData = [
    { id: 1, name: 'Base Set', code: 'BS', releaseDate: '1999-01-09', totalCards: 102 },
    { id: 2, name: 'Jungle', code: 'JU', releaseDate: '1999-06-16', totalCards: 64 },
    { id: 3, name: 'Fossil', code: 'FO', releaseDate: '1999-10-10', totalCards: 62 },
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Set Name', accessor: 'name' },
    { header: 'Code', accessor: 'code' },
    { header: 'Release Date', accessor: 'releaseDate' },
    { header: 'Total Cards', accessor: 'totalCards' },
  ];

  const handleDelete = (id) => {
    console.log('Delete set with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Sets Management"
        columns={columns}
        data={setsData}
        addButtonLink="/sets/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Sets;