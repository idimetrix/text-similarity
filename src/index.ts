export const textSimilarity = (
    str1: string,
    str2: string,
    substringLength: number = 2,
    caseSensitive: boolean = false
) => {
  if (!caseSensitive) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  }

  if (str1.length < substringLength || str2.length < substringLength) return 0;

  let boost = 1;
  if (str1.startsWith(str2) || str2.startsWith(str1)) boost = 4;
  else if (str1.includes(str2) || str2.includes(str1)) boost = 2;

  const map = new Map();
  for (let i = 0; i < str1.length - (substringLength - 1); i++) {
    const substr1 = str1.substr(i, substringLength);
    map.set(substr1, map.has(substr1) ? map.get(substr1) + 1 : 1);
  }

  let match = 0;
  for (let j = 0; j < str2.length - (substringLength - 1); j++) {
    const substr2 = str2.substr(j, substringLength);
    const count = map.has(substr2) ? map.get(substr2) : 0;
    if (count > 0) {
      map.set(substr2, count - 1);
      match++;
    }
  }

  const score = (match * 2) / (str1.length + str2.length - (substringLength - 1) * 2);

  return Math.min(1, score * boost);
};
