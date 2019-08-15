import { setSpText } from "../utils";

export const themesColor = {
  blue: "#00B4C0",
  gray: "#A5A5A5",
  gray1: "#EEEEEE",
  gray2: "#FAFAFA",
  backgroundColor: "#FFF",
  white: "#FFFFFF",
  black: "#000",
  red: "#FF3030"
};

export const paddingLeftRight = {
  paddingLeft: 10,
  paddingRight: 10
};

export const containers = {
  flex: 1,
  backgroundColor: themesColor.backgroundColor,
};

export const container = {
  marginTop: 10,
  paddingLeft: 10,
  paddingRight: 10
};

export const contain = {
  flex: 1,
};


export const fonts = {
  vxii: setSpText(4),
  vxi: setSpText(6),
  vx: setSpText(8),
  xxxx: setSpText(10),
  xxx: setSpText(12),
  xx: setSpText(14),
  x: setSpText(16),
  m: setSpText(18),
  md: setSpText(20),
  lg: setSpText(30)
};

export const text_f16_fw5_black = {
  fontSize: fonts.x,
  fontWeight: "500",
  color: themesColor.black
};

export const text_f16_fw5 = {
  fontSize: fonts.x,
  fontWeight: "500",
};

export const text_f12_gray = {
  fontSize: fonts.xxx,
  color: themesColor.gray
};

export const text_f12_black = {
  fontSize: fonts.xxx,
  color: themesColor.black
};

export const text_f12_white = {
  fontSize: fonts.xxx,
  color: themesColor.white
};

export const text_f10_white = {
  fontSize: fonts.xxxx,
  color: themesColor.white
};

export const spacer_line = {
  marginTop: 10,
  backgroundColor: themesColor.gray2,
};
