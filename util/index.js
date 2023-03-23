// remove \n from any part of the string
export const removeNewLine = (str) => {
  // remove quotes and new lines from the string
  return str.replace(/"/g, "").replace(/\\n/g, "");
};
