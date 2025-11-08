import { Grid, MenuItem, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { CustomInputAdornment } from "./CustomStyle";

export type ProductProps = {
  name: string;
  price?: number | null;
  manufactureDate: string;
  expiryDate: string;
  quantity?: number | null;
  unit: string;
}

type Props = {
  onProductChange?: (product: ProductProps) => void;
  resetSignal?: number;
}

const ProductFormFields = ({ onProductChange, resetSignal }: Props) => {
  
  const initialProduct = {
    name: "",
    price: null,
    manufactureDate: "",
    expiryDate: "",
    quantity: null,
    unit: ""
  }

  const [product, setProduct] = useState<ProductProps>(initialProduct)

  useEffect(() => {
    setProduct(initialProduct)
  }, [resetSignal])


  // Set Input Data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if(name == "quantity" || name == "price"){
      if(isNaN(Number(value))) return
    }
    
    const newProduct = { ...product, [name]: value }
    
    setProduct(newProduct)
    
  }

  const handleBlur = () => {
    onProductChange?.(product)
  }
 

  const fields = [
    {name: "name", label: "Tên đơn hàng", size: 4},
    {name: "price", label: "Đơn giá", size: 4, adornment: "VNĐ"},
    {name: "quantity", label: "Số lượng", size: 4},
    {name: "manufactureDate", label: "NSX", size: 4, type: "date"},
    {name: "expiryDate", label: "HSD", size: 4, type: "date"},
    {name: "unit", label: "Đơn vị", size: 4, defaultValue: "kg"},
  ]

  return (
    <>
      {fields.map((item,index) => (
        <Grid size={item.size} key={index}>
          {index === fields.length - 1 ? (
            <TextField 
              name={item.name} 
              label={item.label}
              onChange={handleChange}
              value={product.unit}
              onBlur={handleBlur}
              defaultValue={item.defaultValue} 
              fullWidth 
              select
            >
              <MenuItem value={"kg"}>Kg</MenuItem>
              <MenuItem value={"box"}>Thùng</MenuItem>
            </TextField>
          ) :
          (<TextField
            name={item.name}
            label={item.label}
            value={product[item.name as keyof ProductProps] ?? ""}
            fullWidth
            type={item.type}
            onBlur={handleBlur}
            variant="outlined"
            onChange={handleChange}
            InputLabelProps={
              item.type == "date" ? { shrink: true } : undefined
            }
            slotProps={
              item.adornment ? {
                input: {
                  endAdornment: <CustomInputAdornment position="end">{item.adornment}</CustomInputAdornment>
                } 
              } : undefined
            }
          />)
        }
        </Grid>
      ))}
    </>
  )
}

export default ProductFormFields