export const getInitialConfig = (allConfigurationArray, posting_id) => {
  if (allConfigurationArray) {
    let value;
    /*
    allConfigurationArray.forEach((element, index) => {
      if (element.id === posting_id) {
        return element.preference;
      } else {
        return false;
      }
    });
  } else {
    return false;
    */
    value = allConfigurationArray.filter((config) => config.id === posting_id);
    if (value.length > 0) {
      console.log(`${posting_id} > ${value[0].preference}`);
      return value[0].preference;
    } else {
      console.log(`${posting_id} > false`);
      return false;
    }
  } else {
    console.log(`no hay array`);
    return false;
  }
};
