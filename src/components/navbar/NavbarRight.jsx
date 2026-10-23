
import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";

export default function NavbarRight({ itemsCart }) {
  return (

    <div className="flex shrink-0 items-center gap-3">
      <span className="md:text-5xl text-3xl font-bold text-(--text-primary)">
        <span className="text-(--primary)">Jovan</span>Store
      </span>

      <Button
        variant="outline"
        isIconOnly
        size="lg"
        aria-label="Shopping cart"
        className="relative text-(--text-primary) p-6 bg-(--bg-secondary)"
      >
        <ShoppingCart className="size-6" />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary) text-xs text-white">
          {itemsCart.length}
        </span>
      </Button>
    </div>
  );
}
