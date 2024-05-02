export function cleanObject(obj) {
    const cleaned = {};
  if(obj){

    Object.keys(obj).forEach((key) => {
      const value = obj[key];
  
      if (value !== null && value !== undefined && value !== "") {
        cleaned[key] = value;
      }
    });
  }
    return cleaned;
  }
  