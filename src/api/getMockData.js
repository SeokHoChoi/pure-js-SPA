export const getMockData = async () => {
  const response = await fetch('src/data/mockDataOfTech.json');
  const resJSON = await response.json();

  return resJSON;
};
