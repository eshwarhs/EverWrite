import { ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
// import { RootState } from "../../redux/store";
// import { RouteType } from "../../routes/config";

export default function SidebarItem(props) {
  //   const { appState } = useSelector((state) => state.appState);

  const icon = () => {
    switch (props.handle) {
      case "home":
        return <HomeIcon />;
      case "trash":
        return <DeleteIcon />;
      default:
        break;
    }
  };

  return (
    <ListItemButton
      component={Link}
      to={props.url}
      sx={{
        "&: hover": {
          backgroundColor: "#e4e0e9",
          color: "#000000"
        },
        backgroundColor:
          props.handle === props.active
            ? "#1e253a"
            : "unset",
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          "&: hover": {
            backgroundColor: "#e4e0e9",
            color: "#000000"
          },
          color: "#FFFFFF",
          
        }}
      >
        {icon()}
      </ListItemIcon>
      {props.name}
    </ListItemButton>
  );
}
