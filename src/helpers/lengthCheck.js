  // Моя функция проверяет длину автора чтоб не было переноса на 2 строки
  export const LengthCheck = (text, charactersNum) =>{
    if (text.length > (charactersNum + 3)) {
      return text.slice(0, charactersNum) + '...';
  }
    return text;
  }
