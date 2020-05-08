const StringIsNumber = value => isNaN(Number(value)) === false;

export function EnumToArray(enumm) {
  return Object.keys(enumm)
    .filter(StringIsNumber)
    .map(key => enumm[key]);
}
