import { NextResponse } from 'next/server';

// This is a mock function - replace with your actual database query
// For now, it returns false to show empty state
// In a real app, this would check your database
async function checkUserHasTransactions(): Promise<boolean> {
  // For development, you can toggle this to test both states
  return false; // Change to true to test with transactions
  
  
}

export async function GET() {
  try {
    // For now, we'll skip authentication
    // In a real app, you would verify the user's session here
    
    const hasTransactions = await checkUserHasTransactions();
    return NextResponse.json({ hasTransactions });
    
  } catch (error) {
    console.error('Error checking transactions:', error);
    return NextResponse.json(
      { error: 'Failed to check transactions' },
      { status: 500 }
    );
  }
}
