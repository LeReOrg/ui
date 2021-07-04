import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { Box } from "@material-ui/core";
import styles from "./CustomerStyled";
import OrderAllItems from "../OrderStatus/OrderAllItems";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const CustomerHistory = (props) => {
  const tabValue = [
    {
      key: 0,
      value: "Tất cả",
    },
    {
      key: 1,
      value: "Chờ xác nhận",
    },
    {
      key: 2,
      value: "Chờ lấy",
    },
    {
      key: 3,
      value: "Đang giao",
    },
    {
      key: 4,
      value: "Đã giao",
    },
    {
      key: 5,
      value: "Đã huỷ",
    },
  ];
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState(tabValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const renderTab = () =>
    tabs.map((index, key) => (
      <Tab
        key={key}
        classes={{
          selected: classes.selectedTab,
          root: classes.rootTab,
        }}
        label={index.value}
        {...a11yProps(index.key)}
      />
    ));

  return (
    <>
      <AppBar
        className={classes.customerInfo_headerAppBar}
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={props.isMobile ? "scrollable" : "fullWidth"}
          scrollButtons="auto"
        >
          {renderTab()}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <OrderAllItems />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Six
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default CustomerHistory;
