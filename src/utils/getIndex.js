export const getIndex = (allConfigurationArray, posting_id) => {
  let indexP;
  allConfigurationArray.forEach((element, index) => {
    if (element.id === posting_id) {
      indexP = index;
    }
  });
  return indexP;
};
