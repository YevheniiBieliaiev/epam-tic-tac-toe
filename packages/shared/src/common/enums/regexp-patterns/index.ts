export const NAME_REGEXP = new RegExp(
  /^(?![-'])(([\da-zA-Z\-']+))?[^-'~!@#$%^*_=+[{\]}/;:.,?]$/,
);
export const EMAIL_REGEXP = new RegExp(
  /^(([^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,32})(.[^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,31}))*)|([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,64}))@(?![-])([\da-zA-Z-]{1,63}\.)([a-zA-Z]{1,6})$/,
);
export const PASSWORD_REGEXP = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]+$/,
);
