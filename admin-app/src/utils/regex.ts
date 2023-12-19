export const onlyEmailTypeRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@!%*#?&])[a-zA-Z\d$@!%*#?&]{8,}$/;

export const onlyNumberTypeRegex = /[^0-9]/g;

export const addCommaToNumberRegex = /\B(?=(\d{3})+(?!\d))/g;
