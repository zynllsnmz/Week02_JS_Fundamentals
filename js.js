let birthDay = Number(
  prompt("Please write on which day of the month you were born")
);
let birthMonth = prompt("Please write in which month you were born");

if (
  (birthDay >= 21 && birthMonth == "march") ||
  (birthDay <= 20 && birthMonth == "april")
) {
  console.log("Your horoscope is Aries");
} else if (
  (birthDay >= 21 && birthMonth == "april") ||
  (birthDay <= 20 && birthMonth == "may")
) {
  console.log("Your horoscope is Taurus");
} else if (
  (birthDay >= 21 && birthMonth == "may") ||
  (birthDay <= 21 && birthMonth == "june")
) {
  console.log("Your horoscope is Gemini ");
} else if (
  (birthDay >= 22 && birthMonth == "june") ||
  (birthDay <= 22 && birthMonth == "july")
) {
  console.log("Your horoscope is Cancer ");
} else if (
  (birthDay >= 23 && birthMonth == "july") ||
  (birthDay <= 23 && birthMonth == "august")
) {
  console.log("Your horoscope is Leo");
} else if (
  (birthDay >= 24 && birthMonth == "august") ||
  (birthDay <= 23 && birthMonth == "september")
) {
  console.log("Your horoscope is Virgo");
} else if (
  (birthDay >= 24 && birthMonth == "september") ||
  (birthDay <= 23 && birthMonth == "october")
) {
  console.log("Your horoscope is Libra");
} else if (
  (birthDay >= 24 && birthMonth == "october") ||
  (birthDay <= 22 && birthMonth == "november")
) {
  console.log("Your horoscope is Scorpio");
} else if (
  (birthDay >= 23 && birthMonth == "november") ||
  (birthDay <= 21 && birthMonth == "december")
) {
  console.log("Your horoscope is Sagittarius");
} else if (
  (birthDay >= 22 && birthMonth == "december") ||
  (birthDay <= 20 && birthMonth == "january")
) {
  console.log("Your horoscope is Capricorn");
} else if (
  (birthDay >= 21 && birthMonth == "january") ||
  (birthDay <= 19 && birthMonth == "february")
) {
  console.log("Your horoscope is Aquarius");
} else if (
  (birthDay >= 20 && birthMonth == "february") ||
  (birthDay <= 20 && birthMonth == "march")
) {
  console.log("Your horoscope is Pisces");
}
