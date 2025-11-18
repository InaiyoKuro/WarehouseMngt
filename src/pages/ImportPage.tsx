import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { Submit } from "../components/CustomStyle"
// import ProductFormFields from "../components/ProductFormFields";
import React, { useMemo, useState } from "react";
import type { ProductProps } from "../components/ProductFormFields";
import { toast } from "react-toastify";
import { isInvalidYear } from "../utils/DateUtils";
import axios from "axios";
import CheckPermissions from "../components/CheckPermissions";

const ProductFormFields = React.lazy(() => import("../components/ProductFormFields"))

const ImportPage = () => {
  const [product, setProduct] = useState<ProductProps | null>(null)
  const [loading, setLoading] = useState(false)
  const [resetSignal, setResetSignal] = useState(0)

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

  const handleSubmit = async() => {
    
    if(!validateProduct(product)) return
    setLoading(true)

    // Thêm sản phẩm
    try {

      await axios.post("http://localhost:3001/api/products", product)
      toast.success("Thêm sản phẩm thành công")

      // Reset input
      setResetSignal((prev) => prev + 1)

    } catch (err) {
      toast.success("Thêm sản phẩm thất bại")
    } finally {
      setLoading(false)
    }

  }

  return (
    <Paper sx={{ p: 2 }} elevation={5}>
      <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>Phiếu nhập kho</Typography>
      <Divider sx={{ my: 2 }} />


      <Grid container spacing={2}>
        <ProductFormFields onProductChange={setProduct} resetSignal={resetSignal} />
      </Grid>
      

      <Typography sx={{
        mt: 3,
        textAlign: "right"
      }}>Tổng cộng: <b>{new Intl.NumberFormat("vi-VN").format(total || 0).replace(/\./g,",")} VNĐ</b></Typography>

      
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <CheckPermissions roles={["master", "manager"]}>
          <Submit variant="contained" onClick={handleSubmit} loading={loading}>Submit</Submit>
        </CheckPermissions>
        <CheckPermissions roles={["staff"]}>
          <Submit variant="contained" onClick={handleSubmit} loading={loading}>Yêu cầu nhập kho</Submit>
        </CheckPermissions>
      </Box>

    </Paper>
  )
}

export default ImportPage