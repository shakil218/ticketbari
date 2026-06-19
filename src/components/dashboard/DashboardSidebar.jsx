import {
  Bell,
  ChevronRight,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { LayoutDashboard } from "lucide-react";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1">
      <p className="flex items-center gap-3 px-3 text-lg font-semibold border-b border-default pb-4">
        <LayoutDashboard className="size-5 text-muted" />
          Dashboard
      </p>
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden sm:w-50 lg:w-64 shrink-0 border-r border-default p-4 sm:block">{navContent}</aside>
      <Drawer>
        <Button className="sm:hidden rounded-lg" variant="ghost">
          <ChevronRight />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
