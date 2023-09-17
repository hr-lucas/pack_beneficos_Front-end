import { isCPF, isPhone, isDate } from "brazilian-values";

const phone = (value) => {
  return isPhone(value);
};

const cpf = (value) => {
  return isCPF(value);
};

const date = (value) => {
  return isDate(value);
};
export { phone, cpf, date};
