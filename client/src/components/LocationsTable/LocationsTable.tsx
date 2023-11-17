import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  CircularProgress
} from '@mui/material';
import { LocationsTableProps } from './LocationsTable.types';
import tableCellsData from '../../tableCells.json';

const LocationsTable: FC<LocationsTableProps> = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  locationsData,
  isLocationLoading
}) => {
  if (isLocationLoading) return <CircularProgress />;

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              {tableCellsData?.tableCells.map((tableCell) => (
                <TableCell key={tableCell.id}>{tableCell.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {locationsData?.results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pokemon, index) => (
                <TableRow key={index} hover sx={{ cursor: 'pointer' }}>
                  <TableCell>{pokemon?.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 25]}
        component="div"
        count={locationsData?.count ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeRowsPerPage(event)
        }
        data-testid="pagination"
      />
    </>
  );
};

export default LocationsTable;
