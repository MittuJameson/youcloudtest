import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { List, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/poppins"
import "@fontsource/montez"

// container
export const AppbarContainer = styled(Box)(() => ({
    display : 'flex',
    marginTop: 4,
    justifyContent:'center',
    alignItems: 'center',
    padding: '2px 8px'
})); 

// header
export const AppbarHeader = styled(Box)(() => ({
    padding : '4px',
    flexGrow: 1,
    fontSize:'2em',
    fontWeight:'600',
    fontFamily: '"poppins"',
    color: Colors.secondary,
})); 

export const MyList = styled(List)(({ type }) => ({ 
    display: type === 'row' ? 'flex' : 'block',flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    widh: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: '1px slid ${Colors.border}'

}));
export const ActionIconsContainerDesktop = styled(Box)(() => ({

}));