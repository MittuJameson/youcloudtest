import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/system";
import { products } from "../../data";
import { Grid, Container } from "@mui/material";
import SingleProducts from "./SingleProducts";

export default function Products() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const renderProducts = products.map(product => (
        <Grid item key={product.id} xs={2} sm={4} md={3} display="flex" flexDirection={"column"} 
        alignItems="center" justifyContent="space-between">
        <SingleProducts product={product} matches={matches}/>
        </Grid>
    ));
    return(
       <Container>
           <Grid container spacing={{xs:2, md:3}} justifyContent={"center"} sx={{margin: '20px 4px 10px 4px'}}
           columns={{xs:4, sm:8, md:12}} >
           {renderProducts}
               </Grid>
           </Container>
    );
}