import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import type { GridColDef } from "@mui/x-data-grid"
import { getProducts } from '../services/api';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Tên đơn hàng', width: 250 },
  { field: 'nsxFormatted', headerName: 'NSX', width: 130 },
  { field: 'hsdFormatted', headerName: 'HSD', width: 130 },
  { field: 'price', headerName: 'Đơn giá', type: 'number', width: 120,},
  { field: 'quantity', headerName: 'Số lượng', type: 'number', width: 90,},
  { field: 'unit', headerName: 'Đơn vị', width: 70,},
];

const paginationModel = { page: 0, pageSize: 5 };

const ReportPage = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])

  console.log([products])

  return (
    <Paper sx={{ height: 400 }} elevation={6}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default ReportPage