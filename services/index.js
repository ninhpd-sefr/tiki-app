import axios from 'axios';
import API from './API';



export const getAllProductFromAPI = async () => {
  const response = await axios.get(`${API}/v1/product`)

  return response.data

}

export const getAllSellerFromAPI = async () => {
  const response = await axios.get(`${API}/v1/seller`)

  return response.data

}

// login

export const checkLoginFromAPI = async (name, password) => {
  console.log('check');

  try {
    const response = await axios.post(`${API}/v1/login`, {
      name,
      password,
    });

    // Trả về dữ liệu sau khi đăng nhập thành công
    return response.data;
  } catch (error) {
    // Xử lý lỗi khi đăng nhập thất bại
    if (error.response) {
      // Nếu server trả về mã lỗi, trả về thông tin lỗi
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // Nếu không nhận được response từ server, trả về thông báo lỗi mạng
      throw new Error("Không nhận được phản hồi từ server");
    } else {
      // Nếu có lỗi xảy ra khi gọi API, trả về thông báo lỗi chung
      throw new Error("Có lỗi xảy ra khi đăng nhập");
    }
  }
};

export const registerAccountFromAPI = async (name, password) => {
  try {
    const response = await axios.post(`${API}/v1/login/add`, {
      name,
      password,
    });

    // Trả về dữ liệu sau khi đăng ký thành công
    return response.data;
  } catch (error) {
    // Xử lý lỗi khi đăng ký thất bại
    if (error.response) {
      // Nếu server trả về mã lỗi, trả về thông tin lỗi
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // Nếu không nhận được response từ server, trả về thông báo lỗi mạng
      throw new Error("Không nhận được phản hồi từ server");
    } else {
      // Nếu có lỗi xảy ra khi gọi API, trả về thông báo lỗi chung
      throw new Error("Có lỗi xảy ra khi đăng ký");
    }
  }
};
