import * as React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Tabs, Tab } from "@mui/material";
import BookmarkPost from "./Bookmarkpost";
import { useSelector } from "react-redux";
import UserPosts from "./UserPosts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProfileTabs({ user }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { foundUser } = useSelector((state) => state.user);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="cursor" label="Posts" {...a11yProps(0)} />
          {user._id === foundUser._id && (
            <Tab className="cursor" label="Bookmarked" {...a11yProps(1)} />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserPosts user={user} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookmarkPost user={user} />
      </TabPanel>
    </Box>
  );
}
export { ProfileTabs };
