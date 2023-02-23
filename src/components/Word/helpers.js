import * as yup from 'yup';

function arrayShuffle(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, got ${typeof array}`);
  }
  array = [...array];

  for (let index = array.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[newIndex]] = [array[newIndex], array[index]];
  }
  return array;
}
const cyrillicPattern = /^[А-ЯЁа-яё '-]+$/;
const englishPattern = /^[A-Za-z `'\s]*$/;
const validationSchema = yup.object({
  russian: yup
    .string('Напшите слово')
    .min(2, 'Слово должно быть минимум из двух символов')
    .required('Заполните карточку')
    .matches(cyrillicPattern, 'Заполните карточку кириллицей'),
  english: yup
    .string('Напшите слово')
    .min(2, 'Слово должно быть минимум из двух символов')
    .required('Заполните карточку')
    .matches(englishPattern, 'Заполните карточку на английском языке'),
});

export { arrayShuffle, validationSchema };
