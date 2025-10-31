// import { uuid } from 'uuidv4';

import { Box, Table, TableBody, TableHead, TableRow } from "@mui/material"
import { CustomTableCell } from "../components/CustomStyle"

const ImportPage = () => {
  return (
    <Box>
      <Table aria-label="hellosddddddđ">
        <TableHead>
          <TableRow>
            <CustomTableCell>Mã</CustomTableCell>
            <CustomTableCell>Mã</CustomTableCell>
            <CustomTableCell>Mã</CustomTableCell>
            <CustomTableCell>Mã</CustomTableCell>
            <CustomTableCell>Mã</CustomTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <CustomTableCell>Hello</CustomTableCell>
            <CustomTableCell>Hello</CustomTableCell>
            <CustomTableCell>Hello</CustomTableCell>
            <CustomTableCell>Hello</CustomTableCell>
            <CustomTableCell>Hello</CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}

export default ImportPage