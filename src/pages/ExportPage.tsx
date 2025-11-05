import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'

const ExportPage = () => {
  return (
    <Paper sx={{ p: 2 }}>
  <Typography variant="h6">Phiếu nhập kho</Typography>
  <Divider sx={{ my: 2 }} />


  {/* Thông tin chung */}
  <Grid container spacing={2}>
    <Grid><TextField fullWidth label="Số phiếu nhập" /></Grid>
    <Grid><TextField fullWidth label="Ngày nhập" type="date" InputLabelProps={{ shrink: true }} /></Grid>
    <Grid><TextField fullWidth label="Nhà cung cấp" /></Grid>
  </Grid>

  {/* Danh sách hàng hóa */}
  <Table sx={{ mt: 3, borderCollapse: 'collapse', '& .MuiTableCell-root': { border: '1px solid #ddd' } }}>
    <TableHead>
      <TableRow>
        <TableCell>Tên hàng</TableCell>
        <TableCell align="right">Số lượng</TableCell>
        <TableCell align="right">Đơn giá</TableCell>
        <TableCell align="right">Thành tiền</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Mì Hảo Hảo</TableCell>
        <TableCell align="right">50</TableCell>
        <TableCell align="right">110.000 ₫</TableCell>
        <TableCell align="right">5.500.000 ₫</TableCell>
      </TableRow>
    </TableBody>
  </Table>

  {/* Tổng cộng */}
  <Box sx={{ textAlign: 'right', mt: 2 }}>
    <Typography>Tổng cộng: <b>5.500.000 ₫</b></Typography>
  </Box>
</Paper>

  )
}

export default ExportPage