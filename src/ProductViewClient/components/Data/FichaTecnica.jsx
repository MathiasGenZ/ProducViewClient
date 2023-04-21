import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function FichaTecnica({ valGrilla }) {
  return (
    <div
      style={{
        margin: "20px 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        Height:'100%',
        maxHeight:'290px'
      }}
    >
      <TableContainer>
        <hr style={{opacity:'0.5'}} />
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {valGrilla.datos.map((data, index) => {
              return (
                <TableRow key={index} sx={{ width: "auto", margin: "0" }}>
                  <TableCell
                    align="left"
                    sx={{ width: "auto", margin: "0", fontSize: "0.8rem" }}
                  >
                    <Typography variant="h5" color="initial">{valGrilla.titulo[index]}</Typography>
                    <br />
                    {data}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          
        </Table>
      </TableContainer>
    </div>
  );
}
