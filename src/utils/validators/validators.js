export const required = value => {
  if (value) return undefined;

  return "Դատարկ հաղորդագրություն"
};

export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Թույլատրվում է մինչև ${maxLength} սիմվոլ`;

  return undefined;
};
