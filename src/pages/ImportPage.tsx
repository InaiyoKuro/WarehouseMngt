import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { Submit } from "../components/CustomStyle"
import ProductFormFields from "../components/ProductFormFields";
import { useEffect, useState } from "react";

const ImportPage = () => {
  const [total, setTotal] = useState<number>(0)

  // const handleSum = (total: number) => {
  //   console.log(total)
  // }

  useEffect(() => {
    console.log(total)
  },[total])

  return (
    <Paper sx={{ p: 2 }} elevation={5}>
      <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>Phiếu nhập kho</Typography>
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <ProductFormFields onSumChange={(total) => setTotal(total)} />
      </Grid>
      
      <Typography sx={{
        mt: 3,
        textAlign: "right"
      }}>Tổng cộng: <b>{new Intl.NumberFormat("vi-VN").format(total || 0).replace(/\./g,",")} VNĐ</b></Typography>

      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <Submit variant="contained" loading={true}>Submit</Submit>
      </Box>
    </Paper>
  )
}

export default ImportPage