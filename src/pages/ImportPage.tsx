import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { Submit } from "../components/CustomStyle"
import ProductFormFields from "../components/ProductFormFields";
import { useMemo, useState } from "react";
import type { ProductProps } from "../components/ProductFormFields";
import { toast } from "react-toastify";
import { isInvalidYear } from "../utils/DateUtils";

const ImportPage = () => {
  const [product, setProduct] = useState<ProductProps | null>(null)


  // Tổng giá tiền
  const total = useMemo(() => {
    return (product?.price ?? 0) * (product?.quantity ?? 0)
  },[product?.price, product?.quantity])


  // Kiểm tra product
  const validateProduct = (p: ProductProps | null) => {
    const toastId = "invalid"

    if(!p?.name.trim()){
      toast.error("Tên sản phẩm không được để trống!", { toastId })
      return false
    }

    if(!p?.price){
      toast.error("Đơn giá không được để trống!", { toastId })
      return false
    }

    if(!p?.quantity){
      toast.error("Số lượng không được để trống!", { toastId })
      return false
    }

    if(!p?.unit){
      toast.error("Đơn vị không được để trống!", { toastId })
      return false
    }

    if(isInvalidYear(p?.manufactureDate ?? "")){
      toast.error("NSX không hợp lệ!!!", { toastId })
      return false
    }
    
    if(isInvalidYear(p?.expiryDate ?? "")){
      toast.error("HSD không hợp lệ!!!", { toastId })
      return false
    }
    
    if(new Date(p.manufactureDate) >= new Date(p.expiryDate)){
      toast.error("NSX phải nhỏ hơn HSD!!!", { toastId })
      return false
    }

    return true
  }

  const handleSubmit = () => {
    
    if(!validateProduct(product)) return

    console.log(product)


  }
  return (
    <Paper sx={{ p: 2 }} elevation={5}>
      <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>Phiếu nhập kho</Typography>
      <Divider sx={{ my: 2 }} />


      <Grid container spacing={2}>
        <ProductFormFields onProductChange={setProduct} />
      </Grid>
      

      <Typography sx={{
        mt: 3,
        textAlign: "right"
      }}>Tổng cộng: <b>{new Intl.NumberFormat("vi-VN").format(total || 0).replace(/\./g,",")} VNĐ</b></Typography>


      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <Submit variant="contained" onClick={handleSubmit} loading={false}>Submit</Submit>
      </Box>
    </Paper>
  )
}

export default ImportPage