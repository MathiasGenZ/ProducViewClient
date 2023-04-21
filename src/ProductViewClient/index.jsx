import React, {useState} from "react";
import { Grid, Card, Typography, Button,Box } from "@mui/material";
import { cardStyle } from "./views/Style/objecteStyle";
import SwipeableStepper from "./components/Slider";
import CustomizedSteppers from './components/DataStep'


export default function index() {
  const [produc, setProduc] = useState({
    name_py: 'APPLE IPHONE 12 PRO MAX 128GB - SILVER',
    id_image_products:[
      {
        imgPath:
          "https://www.romapy.com/46888-large_default/apple-iphone-12-pro-max-128gb-mgd83lza-silver----mgd83lza.jpg",
      },
      {
        imgPath:
          "https://www.romapy.com/46886-large_default/apple-iphone-12-pro-max-128gb-mgd83lza-silver----mgd83lza.jpg",
      },
      {
        imgPath:
          "https://www.romapy.com/46887-large_default/apple-iphone-12-pro-max-128gb-mgd83lza-silver----mgd83lza.jpg",
      },
    ],
    description_py:'Apple IPhone 12 Pro 6GB+256GB 6.1" iOS 15 Blue CPO - FLU03LL/A"',
    Codigo_Producto: '389655',
    price_gs:'7.852.000',
    price_us:'1.149,50',
    ficha_tecnica:[
      <div>
        <Box
          component="img"
          sx={{
            display: "block",
            maxWidth: 400,
            overflow: "hidden",
            width: "15%",
            paddingBottom:'10px'
          }}
          src={
            "https://www.apple.com/v/iphone-12/k/images/specs/display_iphone12__1x80yysjwgia_large_2x.jpg"
          }
        ></Box>
    
        <Typography variant="body2" color="grey">
          Pantalla Super Retina XDR
        </Typography>
        <Typography variant="body2" color="grey">
          Pantalla OLED de 6.1 pulgadas (diagonal) sin marco
        </Typography>
        <Typography variant="body2" color="grey">
          Resolución de 2532 x 1170 pixeles a 460 ppiR
        </Typography>
        <Typography variant="body2" color="grey">
          Pantalla HDR
        </Typography>
        <Typography variant="body2" color="grey">
          True Tone
        </Typography>
        <Typography variant="body2" color="grey">
          Amplia gama de colores (P3)
        </Typography>
        <Typography variant="body2" color="grey">
          Toque con respuesta háptica
        </Typography>
        <Typography variant="body2" color="grey">
          Relación de contraste 2,000,000:1 (normal)
        </Typography>
        <Typography variant="body2" color="grey">
          Brillo máximo de 625 nits (normal); pico de brillo de 1,200 nits (HDR)
        </Typography>
        <Typography variant="body2" color="grey">
          Revestimiento oleofóbico resistente a huellas dactilares
        </Typography>
        <Typography variant="body2" color="grey">
          Compatibilidad para mostrar varios idiomas y caracteres simultáneamente
        </Typography>
      </div>,
      <div>
        <Typography variant="body1" color="initial">
          <strong>Reproducción de video:</strong>
        </Typography>
        <Typography variant="body2" color="grey">
          -Hasta 17 horas
        </Typography>
        <Typography variant="body1" color="initial">
          <strong>Reproducción de video en streaming:</strong>
        </Typography>
        <Typography variant="body2" color="grey">
          -Hasta 11 horas
        </Typography>
        <Typography variant="body1" color="initial">
          <strong>Reproducción de audio:</strong>
        </Typography>
        <Typography variant="body2" color="grey">
          -Hasta 65 horas
        </Typography>
        <br />
        <Typography variant="body2" color="grey">
          Batería de iones de litio recargable integrada
        </Typography>
        <Typography variant="body2" color="grey">
          Carga inalámbrica de hasta 15 W con cargadores MagSafe9
        </Typography>
        <Typography variant="body2" color="grey">
          Carga inalámbrica de hasta 7.5 W con cargadores Qi9
        </Typography>
        <Typography variant="body2" color="grey">
          Carga mediante el puerto USB de una computadora o con un adaptador de
          corriente
        </Typography>
        <Typography variant="body2" color="grey">
          Carga rápida: hasta un 50% de carga en 30 minutos10 con un adaptador de 20
          W o superior (se vende por separado)
        </Typography>
      </div>,
    ]

  })
  return (
    <Card sx={cardStyle}>
      <Typography variant="h5" color="gray" align="center" margin={"20px"}>
        {produc.name_py}
      </Typography>
      <hr style={{opacity:'0.5', margin:'25px'}} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} sx={{ display:'flex' , justifyContent: "center"}}>
          <SwipeableStepper images={produc.id_image_products} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedSteppers datos={produc}/>
        </Grid>
        <Grid item xs={12} sm={12} align="center">
          <Button variant="contained" color="primary">
            Comprar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
