import { Button } from "~/components/ui/button";
import { ThemeProvider } from "~/components/ui/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "Halo Dunia" });

  const { setTheme } = useTheme()

  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-center bg-background gap-8">
          <h1 className="text-3xl text-primary font-semibold">Hello World</h1>
          <Button>Ayo sentuh aku</Button>
          <Button size='icon' onClick={() => setTheme('dark')}>
            <Moon/>
          </Button>
          <Button size='icon' onClick={() => setTheme('light')}>
            <Sun/>
          </Button>
        </main>
    </>
  );
}
