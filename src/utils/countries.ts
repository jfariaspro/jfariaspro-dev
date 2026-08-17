export const countries = [
  { code: '+54', flag: '🇦🇷' },
  { code: '+591', flag: '🇧🇴' },
  { code: '+55', flag: '🇧🇷' },
  { code: '+56', flag: '🇨🇱' },
  { code: '+57', flag: '🇨🇴' },
  { code: '+506', flag: '🇨🇷' },
  { code: '+53', flag: '🇨🇺' },
  { code: '+593', flag: '🇪🇨' },
  { code: '+503', flag: '🇸🇻' },
  { code: '+34', flag: '🇪🇸' },
  { code: '+1', flag: '🇺🇸' }, // USA/Canada/PR/DR
  { code: '+502', flag: '🇬🇹' },
  { code: '+504', flag: '🇭🇳' },
  { code: '+52', flag: '🇲🇽' },
  { code: '+505', flag: '🇳🇮' },
  { code: '+507', flag: '🇵🇦' },
  { code: '+595', flag: '🇵🇾' },
  { code: '+51', flag: '🇵🇪' },
  { code: '+598', flag: '🇺🇾' },
  { code: '+58', flag: '🇻🇪' },
  { code: '+49', flag: '🇩🇪' },
  { code: '+33', flag: '🇫🇷' },
  { code: '+39', flag: '🇮🇹' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+81', flag: '🇯🇵' },
  { code: '+86', flag: '🇨🇳' },
  { code: '+91', flag: '🇮🇳' },
].sort((a, b) => {
  const numA = parseInt(a.code.replace('+', ''), 10);
  const numB = parseInt(b.code.replace('+', ''), 10);
  return numA - numB;
});
