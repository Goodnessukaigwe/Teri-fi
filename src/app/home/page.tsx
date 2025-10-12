import EmptyState from "./EmptyState";
import HomeWithTransaction from "./HomeWithTransaction";
import { checkUserHasTransactionsServer } from "@/lib/transactions";

export default async function HomePage() {
  const hasTransactions = await checkUserHasTransactionsServer();
  
  return hasTransactions ? <HomeWithTransaction /> : <EmptyState />;
}
