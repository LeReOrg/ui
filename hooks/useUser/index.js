import { useMutation } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import {
  userState,
  tokenOTPState,
  errorCodeState,
} from "../../lib/recoil-root";

const resetPassWord = async (params) => {
  const { data } = await axios.post(
    `${config.api}/authentication/password/email`,
    {
      email: params,
    }
  );
  return data;
};
const useResetPassWord = () => {
  const [tokenOTP, setTokenOTP] = useRecoilState(tokenOTPState);
  const [errorCode, setErrorCode] = useRecoilState(errorCodeState);

  return useMutation(resetPassWord, {
    onSuccess: (data) => {
      setTokenOTP(data);
      return data;
    },
    onError: (error) => {
      error &&
        setErrorCode((preState) => ({
          ...preState,
          status: error.response.status,
          message: error.response.data,
          code: 1,
        }));
    },
  });
};
const verifyOTP = async (params) => {
  const { data } = await axios.post(
    `${config.api}/authentication/password/otp-code`,
    {
      otpCode: params.otpCode.code,
    },
    {
      headers: { Authorization: `Bearer ${params.token.token}` },
    }
  );
  return data;
};
const useVerifyOTP = () => {
  return useMutation(verifyOTP, {
    onSuccess: async (data) => {
      return data;
    },
    onError: async (error) => {
      return error;
    },
  });
};
const changePassword = async (params) => {
  const { data } = await axios.post(
    `${config.api}/authentication/password/reset`,
    {
      password: params.password,
    },
    {
      headers: { Authorization: `Bearer ${params.token.token}` },
    }
  );
  return data;
};
const useChangePassword = () => {
  return useMutation(changePassword, {
    onSuccess: async (data) => {
      setCurrentUser(data);
      return data;
    },
    onError: async (error) => {
      return error;
    },
  });
};
const updateUser = async (params) => {
  const { data } = await axios.patch(`${config.api}/users`, params, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
  return data;
};

const useUpdateUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  return useMutation(updateUser, {
    onSuccess: async (data) => {
      setCurrentUser((preState) => ({ ...preState, user: data }));
    },
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};

export {
  useUpdateUser,
  updateUser,
  useResetPassWord,
  resetPassWord,
  useVerifyOTP,
  verifyOTP,
  useChangePassword,
  changePassword,
};
