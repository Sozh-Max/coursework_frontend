export const getWorkerCategory = data => {
  const days = (new Date().getTime() - new Date(data).getTime()) / (1000 * 3600 * 24);
  const years = days / 365;
  if (years > 5) {
    return 'Ветеран';
  }
  if (years < 1) {
    return 'Молодой';
  }
  return 'Опытный';
}