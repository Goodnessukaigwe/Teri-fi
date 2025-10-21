/**
 * Checks if the current user has any transactions
 * This is a client-side function that calls our API endpoint
 * @returns Promise<boolean> - True if user has transactions, false otherwise
 */
export async function checkUserHasTransactions(): Promise<boolean> {
  try {
    const response = await fetch('/api/transactions/check');

    if (!response.ok) {
      throw new Error('Failed to fetch transaction status');
    }

    const { hasTransactions } = await response.json();
    return hasTransactions;
  } catch (error) {
    console.error('Error checking transactions:', error);
    // In case of error, default to showing empty state
    return false;
  }
}

/**
 * For server components, this function can be useddirectly
 * since it doesn't rely on browser APIs
 */
export async function checkUserHasTransactionsServer(): Promise<boolean> {
  // For testing the transactions view
  return true; // This will show the transactions list
}

