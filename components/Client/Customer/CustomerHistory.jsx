import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { Box } from "@material-ui/core";
import styles from "./CustomerStyled";
import Image from "next/image";
import HistoryCart from "../../../assets/imagetest2.png";
import { MyButton } from "../Login/LoginPageStyled";
import CustomerDetail from "./CustomerDetail";

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
  const [value, setValue] = React.useState(0);
  const [goDetail, setGoDetail] = React.useState(false);
  const [tabs, setTabs] = React.useState(tabValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const changePage = () => {
    setGoDetail(true);
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
      {goDetail ? (
        <CustomerDetail />
      ) : (
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
              <div className={classes.tabInfo}>
                <Box pb={3} display="flex" justifyContent="space-between">
                  <div className={classes.tabInfo_contentLeft}>
                    <div className={classes.tabInfo_contentLeftImage}>
                      <Image src={HistoryCart} height="88px" width="88px" />
                    </div>
                    <div className={classes.tabInfo_contentLeftInfo}>
                      Cho thuê lều trại đẹp siêu cấp cách âm cực tốt không còn
                      điều gì để chê được nữa hãy thuê mau mau nhé
                    </div>
                  </div>
                  <div className={classes.tabInfo_contentRight}>
                    <div className={classes.tabInfo_contentRightQuantity}>
                      1 món
                    </div>
                    <div className={classes.tabInfo_contentRightTotal}>
                      <div className={classes.tabInfo_contentRightAmount}>
                        40,000đ/ngày
                      </div>
                      <div className={classes.tabInfo_contentRightpile}>
                        Cọc 100,000đ
                      </div>
                      <div>24/01 - 28/2</div>
                    </div>
                  </div>
                </Box>
                <Box className={classes.buttonActions}>
                  <div className={classes.buttonActions_Content}>
                    <div>
                      <MyButton type="submit">Thuê Lại</MyButton>
                    </div>
                    <div>
                      <MyButton onPageChange={changePage}>
                        Chi tiết đơn hàng
                      </MyButton>
                    </div>
                  </div>
                </Box>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className={classes.tabInfo}>
                <Box pb={3} display="flex" justifyContent="space-between">
                  <div className={classes.tabInfo_contentLeft}>
                    <div className={classes.tabInfo_contentLeftImage}>
                      <Image src={HistoryCart} height="88px" width="88px" />
                    </div>
                    <div className={classes.tabInfo_contentLeftInfo}>
                      Cho thuê lều trại đẹp siêu cấp cách âm cực tốt không còn
                      điều gì để chê được nữa hãy thuê mau mau nhé
                    </div>
                  </div>
                  <div className={classes.tabInfo_contentRight}>
                    <div className={classes.tabInfo_contentRightQuantity}>
                      1 món
                    </div>
                    <div className={classes.tabInfo_contentRightTotal}>
                      <div className={classes.tabInfo_contentRightAmount}>
                        40,000đ/ngày
                      </div>
                      <div className={classes.tabInfo_contentRightpile}>
                        Cọc 100,000đ
                      </div>
                      <div>24/01 - 28/2</div>
                    </div>
                  </div>
                </Box>
                <Box className={classes.buttonActions}>
                  <div className={classes.buttonActions_Content}>
                    <div>
                      <MyButton type="submit">Thuê Lại</MyButton>
                    </div>
                    <div>
                      <MyButton onPageChange={changePage}>
                        Chi tiết đơn hàng
                      </MyButton>
                    </div>
                  </div>
                </Box>
              </div>
            </TabPanel>
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
      )}
    </>
  );
};

export default CustomerHistory;
