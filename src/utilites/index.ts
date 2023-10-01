const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {};
}

export const checkColorHex = (value: string) => {
  if (value.length < 7) {
    return '';
  }
  
  const isValid = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(value);
  if (isValid) {
    const { r, g, b } = hexToRgb(value);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return 'Ошибка!';
};
