
import { Product, ProductImage, ProductFavButton, ProductActionsWrapper, ProductActionButton, ProductAddToCart } from "../../styles/products";
import {Stack} from "@mui/material";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

export default function SingleProducts({product, matches}){
   return(
      <>
         <Product>
           <ProductImage src={product.image}/>
           <ProductMeta product={product} matches={matches}/>
           <ProductActionsWrapper>
               <Stack direction="row">
               <ProductFavButton isfav={1}>
                    <FavoriteIcon/>
                </ProductFavButton>
                <ProductActionButton>
                    <ShareIcon color="black"/>
                </ProductActionButton>
               </Stack>
           </ProductActionsWrapper>
           </Product>
           <ProductAddToCart variant="contained">
            Add To Cart
           </ProductAddToCart>
      </>
   )
}