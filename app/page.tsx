import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Accounts from "@/components/dashboard/accounts";

export default function Page() {
  return (
    <div>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-6" />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Dashboard
            </h3>
          </div>
        </header>
        <Accounts />
      </SidebarInset>  
    </div>
  );
}
