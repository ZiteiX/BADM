import { IS_OVER_18_KEY, JWT_SESSION_KEY } from "./naming";

export const rememberMeSession = jwt => {
  localStorage.setItem(JWT_SESSION_KEY, jwt);
};
export const writeIsOver18 = () => {
  localStorage.setItem(IS_OVER_18_KEY, true);
};

export const getJwtKey = () => localStorage.getItem(JWT_SESSION_KEY);

export const getIsOver18 = () => localStorage.getItem(IS_OVER_18_KEY);

export const endLoginSession = () => {
  localStorage.removeItem(JWT_SESSION_KEY);
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export const getIsMobile = () => {
  const { width } = getWindowDimensions();
  if (width < 600) {
    return true;
  }
  return false;
};

export const toWhatsappLink = phone => `https://wa.me/${phone}`;
