import EmptyState from "./EmptyState";
import HomeWithTransaction from "./HomeWithTransaction";
import { checkUserHasTransactionsServer } from "@/lib/transactions";
import MainLayout from "@/components/MainLayout";

export default async function HomePage() {
  const hasTransactions = await checkUserHasTransactionsServer();
  
  return (
    <MainLayout>
      {hasTransactions ? <HomeWithTransaction /> : <EmptyState />}
    </MainLayout>
  );
}
