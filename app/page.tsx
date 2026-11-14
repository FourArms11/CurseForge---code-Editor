import Image from "next/image";
import { Button, buttonVariants } from '@/modules/auth/components/user-button'
import { ChevronsDown } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="solid">Start learning</Button>
<Button variant="outline" iconRight={<ChevronsDown />}>See the impact</Button>
<Button size="sm">View details</Button>
<Button variant="solid" asChild>
  <a href="/cohorts">Join a cohort</a>
</Button>
    </div>
  );
}
