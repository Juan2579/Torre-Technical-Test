import { Hero } from "@/components/Hero";
import { PeopleList } from "@/components/PeopleList";
import { PeopleSearch } from "@/components/PeopleSearch";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />

      <PeopleSearch />
      <PeopleList />
    </main>
  )
}
