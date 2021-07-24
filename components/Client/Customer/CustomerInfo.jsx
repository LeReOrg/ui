import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./CustomerStyled";
import { MyButton } from "../Login/LoginPageStyled";
import { userState } from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import CustomForm from "../../../utils/CustomForm";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../../hooks/useUser";

const CustomerInfo = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [currentUser, setcurrentUser] = useRecoilState(userState);
  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [dates, setDates] = useState();
  const [gender, setGender] = useState(currentUser?.user?.gender);
  const { mutate, data, isLoading } = useUpdateUser();
  const useStyles = makeStyles(styles);
  const generateYearOptions = () => {
    const arr = [];
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= startYear; i--) {
      arr.push({ id: i, name: i });
    }
    return arr;
  };
  const generateDatesOptions = () => {
    const arr = [];
    const startDate = 1;
    const endDate = 31;
    for (let i = endDate; i >= startDate; i--) {
      arr.push({ id: i, name: i });
    }
    return arr;
  };
  const generateMonthsOptions = () => {
    const arr = [];
    const startYear = 1;
    const endYear = 12;
    for (let i = endYear; i >= startYear; i--) {
      arr.push({ id: i, name: i });
    }
    return arr;
  };
  const updateSelection = (event, value) => {
    event.persist();
    setGender(value);
  };
  console.log(gender);
  useEffect(() => {
    const getYears = generateYearOptions();
    const getDates = generateDatesOptions();
    getDates.reverse();
    const getMonths = generateMonthsOptions();
    getMonths.reverse();
    setMonths(getMonths);
    setDates(getDates);
    setYears(getYears);
  }, []);
  const classes = useStyles();
  const { register, handleSubmit, watch, setValue } = useForm({
    mode: "all",
  });
  let yearChoose = watch("years");
  let monthChoose = watch("months");
  let dateChoose = watch("dates");
  let displayName = watch("displayName");
  let phoneNumber = watch("phoneNumber");
  const test = currentUser?.user?.birthDay?.toString();
  const year = test?.substr(0, 4);
  const month = test?.substr(5, 2);
  const date = test?.substr(8, 2);
  const updateUserHandler = async (data) => {
    const updateUser = {};
    if (gender) {
      updateUser.gender = gender;
    }

    if (yearChoose && monthChoose && dateChoose) {
      updateUser.birthDay = `${yearChoose}-${monthChoose}-${dateChoose}`;
    }
    if (displayName) {
      updateUser.displayName = displayName;
    }
    if (phoneNumber) {
      updateUser.phoneNumber = phoneNumber;
    }
    console.log(updateUser);
    updateUser.token = currentUser.token;
    mutate(updateUser);
  };
  return (
    <div className={classes.customerInfoContainer}>
      <form onSubmit={handleSubmit(updateUserHandler)}>
        <Box className={classes.customerInfoRow}>
          <p className={classes.emailTitle}>Họ và tên:</p>
          <CustomForm
            inputType="input"
            className={classes.emailFormLogin}
            nameInput="displayName"
            name={register}
            placeholder="Nhập họ và tên đầy đủ"
            value={currentUser?.user?.displayName}
          />
        </Box>
        <Box className={classes.customerInfoRow}>
          <p className={classes.emailTitle}>Địa chỉ Email:</p>
          <CustomForm
            inputType="input"
            className={classes.emailFormLogin}
            name={register}
            nameInput="email"
            disabled
            value={currentUser?.user?.email}
          />
        </Box>

        <Box className={classes.customerInfoRow}>
          <p className={classes.emailTitle}>Số điện thoại:</p>
          <CustomForm
            inputType="number"
            className={classes.emailFormLogin}
            nameInput="phoneNumber"
            name={register}
            placeholder="Nhập số điện thoại"
            value={currentUser?.user?.phoneNumber}
          />
        </Box>

        <Box className={classes.customerInfoRow}>
          <p className={classes.passwordTitle}>Giới tính:</p>
          <FormControl component="fieldset">
            <RadioGroup
              onChange={updateSelection}
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              value={gender}
            >
              <FormControlLabel
                value="MALE"
                control={<Radio size="small" color="primary" />}
                label="Nam"
              />
              <FormControlLabel
                value="FEMALE"
                control={<Radio size="small" color="primary" />}
                label="Nữ"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box className={classes.customerInfoRow}>
          <p className={classes.emailTitle}>Ngày sinh:</p>
          <CustomForm
            inputType="select"
            className={classes.emailFormLogin2}
            placeholder="Ngày"
            nameSelect={date}
            valueOptions={dates}
            nameInput="dates"
            name={register}
          />
          <CustomForm
            inputType="select"
            className={classes.emailFormLogin2}
            placeholder="Tháng"
            nameSelect={month}
            valueOptions={months}
            nameInput="months"
            name={register}
          />
          <CustomForm
            inputType="select"
            className={classes.emailFormLogin2}
            placeholder="Năm"
            nameSelect={year}
            valueOptions={years}
            nameInput="years"
            name={register}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <MyButton type="submit" className={classes.buttonUpdate}>
            Cập nhật
          </MyButton>
        </Box>
      </form>
    </div>
  );
};

export default CustomerInfo;
