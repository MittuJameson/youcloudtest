import { useTheme, useMediaQuery } from "@mui/system";
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerImageBox } from "../../styles/banner";
import { Typography } from "@mui/material";
import { Colors } from "../../styles/theme";


export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
            <BannerContent>
                <BannerTitle varient="" sx={{ color: Colors.white, fontSize: '40px', fontWeight: 600 }}> FREE DELIVERY FOR ALL YOUR ONLINE PURCHASE</BannerTitle>
                <Typography variant="" sx={{ color: Colors.white,fontSize: '20px', fontWeight: 600, lineHeight: 1.4, marginBottom: '10px' }} >Sale up to 30% off</Typography>
                <BannerDescription variant="subtitle" sx={{ color: Colors.white }}>Free shipping on all your order.</BannerDescription>
            </BannerContent>
            <BannerImageBox>
                <BannerImage src="/image/banner/banner_image.png"/>
            </BannerImageBox>
            </BannerContainer>
    )
}





