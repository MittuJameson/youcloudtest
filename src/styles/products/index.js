import { styled, Box } from "@mui/system";
import { Colors } from "../theme";
import { IconButton, Button } from "@mui/material";

export const Product = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}));

export const ProductImage = styled('img')(({src,theme}) => ({
    src: 'url(${src})',
    width: '100%',
    height: '300px',
    background: Colors.light_grey,
    padding: '10px',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px'
    }
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4
}));

export const ProductFavButton = styled(ProductActionButton)(({isfav,theme}) => ({
    color: isfav ? Colors.secondary : Colors.light,
    [theme.breakpoints.down('md')]: {
       position: 'absolute',
       right: 0,
       top: 0,
    }
}));

export const ProductAddToCart = styled(Button)(({show,theme}) => ({
    width: '100%',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        // position: 'absolute',
        // bottom: '0%',
        // width: '300px',
        padding: '10px 5px'
     },
     background: Colors.button_black,
     opacity: 0.9,

}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const ProductActionsWrapper= styled(Box)(({show,theme}) => ({
    background: Colors.white,
    margin: 4
}));
