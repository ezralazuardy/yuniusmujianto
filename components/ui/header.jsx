import Navigation from "@/components/ui/navigation";

export default function Header() {
  return (
    <div className="absolute z-40 top-0 start-0 w-full mt-8 px-10 text-center bg-main pt-2">
      <div className="mx-auto py-2 px-6">
        <Navigation />
      </div>
    </div>
  );
}
