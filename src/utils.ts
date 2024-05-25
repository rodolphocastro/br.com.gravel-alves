/**
 * Difficulties for cycling routes, mapping from a number to a human-readable string.
 */
const difficulties: { [key: number]: string } = {
  1: "Iniciante",
  2: "Intermediário",
  3: "Avançado",
  4: "Desafio",
  5: "Épico",
  6: "Cicloviagem",
};

/**
 * Converts a difficulty rating to a human-readable string
 * @param reading The difficulty rating, if null defaults to 1 and if outside range defaults to the closest value
 */
export function convertDifficultyToRating(reading: number) {
  const lowestKey = Math.min(...Object.keys(difficulties).map(Number))
  const highestKey = Math.max(...Object.keys(difficulties).map(Number))

  reading = reading ?? 1; // Default to 1 if null

  if (reading > highestKey) {
    reading = highestKey;
  }
  else if (reading < lowestKey) {
    reading = lowestKey;
  }

  return difficulties[reading];
}