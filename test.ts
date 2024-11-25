const displayDateReadOnly = (
  value: string | null | undefined,
  formatter = "dd/MM/yyyy, HH:mm",
): string | null | undefined => {
  if (!value) return value;

  console.log('formatter', formatter);

  const date = new Date(value);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year}, ${hours}:${minutes}`;
};