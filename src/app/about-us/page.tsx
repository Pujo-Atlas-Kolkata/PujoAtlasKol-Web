import { team } from "@/lib/contants";
import TeamCard from "@/components/TeamCard";

export default function AboutUsPage() {
  return (
    <main className="mx-10 mt-32 flex min-h-screen flex-col">
      <div className="w-full rounded-2xl border-gray-500 backdrop-blur-sm">
        <div className="flex flex-col gap-y-2">
          <p className="text-5xl font-bold">Meet the Team TODO</p>

          <p className="pt-3 pb-2 text-3xl font-semibold">Who are we?</p>

          <p className="w-[60dvw] text-lg leading-tight">
            We are a collective of Durga Puja enthusiasts committed to making
            Pandal Hopping in Kolkata more enjoyable and accessible for
            everyone. Our team, which includes developers, designers,
            researchers, and content creators from across the country, has
            united in the spirit of open source to build this experience.
          </p>
        </div>

        <div className="mt-10">
          {Object.entries(team).map(([group, members]) => (
            <div key={group} className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">{group}</h2>

              <div className="flex flex-wrap justify-start gap-4">
                {members.map((member) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    avatar={member.avatar}
                    department={member.department}
                    socials={member.socials}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
