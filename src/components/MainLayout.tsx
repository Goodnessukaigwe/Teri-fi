import BottomNav from "./BottomNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pb-20">
        {" "}
        {/* Add padding bottom to account for fixed nav */}
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
