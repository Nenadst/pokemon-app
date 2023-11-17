import { useState } from 'react';
import LocationsTable from '../../components/LocationsTable/LocationsTable';
import { useLocationsData } from './hooks/useLocationsData';

const Locations = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: locationsData, isLoading } = useLocationsData();

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event?.currentTarget) return;
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.value) return;

    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <LocationsTable
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      locationsData={locationsData}
      isLocationLoading={isLoading}
    />
  );
};

export default Locations;
