export const useConvertToJson = (data) => {
  return JSON.parse(JSON.stringify(data));
};
