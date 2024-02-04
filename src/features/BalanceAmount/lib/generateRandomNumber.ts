export function generateRandomNumber(): string {
  const randomNumber = Math.floor(Math.random() * 10000000);

  return randomNumber.toLocaleString();
}
