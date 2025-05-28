import { team } from "@/lib/contants";
import TeamCard from "@/components/TeamCard";

export default function AboutUsPage() {
  return (
    <main className="mt-36 ml-20 flex min-h-screen flex-col backdrop-blur-xs">
      <div className="w-full rounded-2xl border-gray-500">
        <div className="flex flex-col gap-y-2">
          <p className="text-5xl font-bold">Meet the Team</p>

          <p className="pt-1.5 pb-0.5 text-3xl font-semibold">Who are we?</p>

          <p className="w-[60dvw] text-lg leading-tight font-normal">
            We are a collective of{" "}
            <span className="font-semibold">Durga Puja</span> enthusiasts
            committed to making Pandal Hopping in{" "}
            <span className="font-semibold">Kolkata</span> more enjoyable and
            accessible for everyone. Our team, which includes{" "}
            <span className="font-semibold">developers</span>,{" "}
            <span className="font-semibold">designers</span>,{" "}
            <span className="font-semibold">researchers</span>, and{" "}
            <span className="font-semibold">content creators</span> from across
            the country, has united in the spirit of open source to build this
            experience.
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
