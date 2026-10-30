export const formatMad = (amount) =>
  `${Number(amount).toLocaleString("fr-MA")} MAD`;

export const formatEuro = (amount) =>
  Number(amount).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
