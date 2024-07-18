import { ProductMetaWrapper } from "../../styles/products";
import { Typography } from "@mui/material";

export default function ProductMeta({product, matches}){
    return(
        <ProductMetaWrapper>
            <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2} fontFamily= 'poppins' fontSize="22px">
            {product.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'body1'} lineHeight={2}>
            ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}