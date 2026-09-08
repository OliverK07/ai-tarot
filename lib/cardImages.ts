/**
 * Get the image path for a tarot card
 * Maps card IDs to public domain Rider-Waite-Smith artwork filenames
 */
export function getCardImagePath(cardId: string): string {
  // Extract suit and number from card ID
  // Format: major-00, wands-01, cups-02, swords-03, pentacles-04
  const basePath = process.env.NODE_ENV === 'production' ? '/ai-tarot' : '';
  
  return `${basePath}/cards/${cardId}.jpg`;
}
