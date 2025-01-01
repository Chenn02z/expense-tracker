import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-4 p-4 grid-cols-3">
          {/* Card 1 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
              <CardDescription>Card 1 description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for card 1 goes here.</p>
            </CardContent>
            <CardFooter>
              <p>Footer for card 1</p>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
              <CardDescription>Card 2 description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for card 2 goes here.</p>
            </CardContent>
            <CardFooter>
              <p>Footer for card 2</p>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
              <CardDescription>Card 3 description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for card 3 goes here.</p>
            </CardContent>
            <CardFooter>
              <p>Footer for card 3</p>
            </CardFooter>
          </Card>
        </div>
      </SidebarInset>
    </div>
  );
}
