import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import {Colors} from "../theme";
import { Typography } from "@mui/material";


export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    borderRadius: '10px',
    background: Colors.banner_bg,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'

    }
}));

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    width: '35%',
    padding: '30px',
}));

export const BannerImageBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '30px',
    marginBottom: '-30px'
}));

export const BannerImage = styled('img')(({src, theme}) => ({
    src: 'url(${src})',
    width: '500px',
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },
    [theme.breakpoints.down('md')]: {
        width: '320px',
        height: '300px',
    }
}));

export const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight: 1.3,
    fontSize: '72px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }
}));

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    fontSize: '14px',
    // marginTop: '10px',
    marginBottom: '10px',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
    letterSpacing: 1.15,
    fontSize: '12px',
    marginBottom: '1.5em',
    }
}));
