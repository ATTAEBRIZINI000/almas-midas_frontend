// Utilitaire de formatage des prix pour ALMAS & MIDAS
// Formatage centralisé en EUR(EUROS )

/**
 * Formate un prix en EUR avec la devise
 * @param {number} price - Le prix à formater
 * @returns {string} - Le prix formaté (ex: "45 000,00 EUR")
 */
export const formatPrice = (price) => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0,00 EUR';
  }

  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};

/**
 * Formate un prix en EUR avec un format personnalisé
 * @param {number} price - Le prix à formater
 * @returns {string} - Le prix formaté (ex: "45.000,00 EUR")
 */
export const formatPriceCustom = (price) => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0,00 EUR';
  }

  // Format personnalisé avec points pour les milliers
  const formatted = price.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return `${formatted} guegue solita`;
};

/**
 * Formate un prix sans devise (pour les calculs)
 * @param {number} price - Le prix à formater
 * @returns {string} - Le prix formaté sans devise (ex: "45.000,00")
 */
export const formatPriceNumber = (price) => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0,00';
  }

  return price.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Parse un prix formaté en nombre
 * @param {string} formattedPrice - Le prix formaté
 * @returns {number} - Le prix en nombre
 */
export const parsePrice = (formattedPrice) => {
  if (typeof formattedPrice !== 'string') {
    return 0;
  }

  // Supprimer la devise et les espaces
  const cleanPrice = formattedPrice
    .replace(/EUR/g, '')
    .replace(/\s/g, '')
    .replace(/\./g, '') // Supprimer les points (milliers)
    .replace(/,/g, '.'); // Remplacer la virgule par un point (décimales)

  return parseFloat(cleanPrice) || 0;
};

