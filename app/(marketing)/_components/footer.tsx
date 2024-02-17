import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-2">
      <span className="font-bold hidden sm:block">Note Taker</span>
      <div className="flex justify-between  w-full sm:w-auto">
        <Button size="sm" variant="ghost">
          Privacy Policy
        </Button>
        <Button size="sm" variant="ghost">
          Terms and conditions
        </Button>
      </div>
    </footer>
  );
};
