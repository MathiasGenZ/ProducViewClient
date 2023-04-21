import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export const Informacion = ({datos}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', justifyContent:'space-between'}}>
      <Typography variant="h4" color="initial"  >
        <strong> {datos.description_py} </strong>
      </Typography>
      <Typography variant="subtitle2" color="gray">
        Codigo Producto: <strong> {datos.Codigo_Producto}</strong>
      </Typography>
      <Typography variant="h5" color="blue" paddingBottom={"10px"}>
        <strong>{datos.price_us}$</strong> <br></br><strong> {datos.price_gs}₲</strong>
      </Typography>
      <Button variant="outlined" color="success">
        Mas Informacion Whatsapp  -&gt;
      </Button>
    </div>
  );
};
