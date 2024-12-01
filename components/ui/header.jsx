import Navigation from "@/components/ui/navigation";

export default function Header() {
  return (
    <div className="absolute z-40 top-0 start-0 w-full mt-10 px-10 text-center">
      <div className="inline-block mx-auto py-2 px-6">
        <Navigation />
      </div>
    </div>
  );
}
