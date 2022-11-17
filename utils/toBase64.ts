export const toBase64 = (file) => {
  const reader = new FileReader();
  reader.onloadend = () => {};
  reader.readAsDataURL(file);
};
