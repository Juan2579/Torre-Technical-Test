import { Hero } from "@/components/Hero";
import { PeopleSearch } from "@/components/PeopleSearch";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />

      <PeopleSearch />
    </main>
  )
}
