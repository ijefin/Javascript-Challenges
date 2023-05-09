const countCharacteres = (string) => {
    const result = {};
  
    for (let index = 0; index < string.length; index++) {
      const char = string[index];
  
      result[char] ? result[char]++ : (result[char] = 1);
    }
    return console.log(result);
  };
  
  // countCharacteres("otorrinolaringologista");