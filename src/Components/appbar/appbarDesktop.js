import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({matches}){

 

    return (
       <AppbarContainer>
           <AppbarHeader>YouShop</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact Us"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
           <Actions matches={matches}/>
       </AppbarContainer>
    );
}