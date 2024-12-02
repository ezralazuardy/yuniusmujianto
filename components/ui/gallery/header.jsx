import Navigation from "@/components/ui/navigation";

export default function Header() {
  return (
    <div className="fixed z-40 top-0 start-0 w-full mt-10 lg:px-10 text-center max-w-screen">
      <div className="inline-block mx-auto  lg:py-2 lg:px-6">
        <Navigation />
      </div>
    </div>
  );
}
