export const randomStatus = () => {
  const statuses = ["Created", "Drafted"];
  const randomIndex = Math.floor(Math.random() * statuses.length);

  return statuses[randomIndex];
};
