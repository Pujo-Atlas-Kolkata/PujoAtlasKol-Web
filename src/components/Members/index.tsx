import { cn } from '@/libs/utils';

import { RiGithubFill, RiDiscordFill, RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri';
import { LuLink } from 'react-icons/lu';
import { team, Tech, NonTech } from '@/constants/team';

type Department = (typeof Tech)[number] | (typeof NonTech)[number];

const colors: Record<Department, string> = {
  Content: 'bg-red-500',
  Community: 'bg-blue-500',
  Web: 'bg-purple-500',
  Mobile: 'bg-pink-600',
  Backend: 'bg-green-800',
  DevOps: 'bg-black',
  'Data Science': 'bg-amber-500',
  Design: 'bg-green-500',
  Coordinator: 'bg-orange-500',
};

export const TeamMembers = () => {
  return (
    <>
      {Object.entries(team).map(([category, members]) => {
        return (
          <>
            <h3 className="font-work font-semibold text-4xl">{category}</h3>
            <div className="bg-primary-background w-full flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 place-items-evenly gap-4 p-1 rounded-2xl">
              {members.map((member) => (
                <>
                  <div
                    className={cn(
                      'flex flex-col flex-1 w-full items-center gap-2 p-3 lg:p-4 rounded-xl',
                      'text-center relative bg-primary-background outline outline-primary-foreground',
                      'shadow-[3px_3px_0_3px] shadow-primary-foreground',
                      {
                        b: window.location.hash === `#${member.id}`,
                      },
                    )}
                    id={member.id}
                  >
                    <LuLink
                      role="button"
                      title="Copy Link"
                      onClick={() =>
                        navigator.clipboard.writeText(`${window.location.href}#${member.id}`)
                      }
                      className={cn(
                        'text-2xl p-1 rounded-full bg-secondary-background',
                        'absolute right-4 top-4',
                      )}
                    />
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="size-24 bg-secondary-background rounded-full"
                    />
                    <span className="font-work font-semibold text-lg">{member.name}</span>
                    <span className="px-1 whitespace-nowrap rounded-3xl text-xs font-work font-semibold outline outline-1 flex items-center gap-1">
                      <div className={cn('size-2 rounded-full', colors[member.department])} />
                      {member.department}
                    </span>
                    <div className="flex mt-2 gap-4">
                      <a
                        title="Discord"
                        href={member.socials.discord}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiDiscordFill className="text-2xl p-1 rounded-full bg-secondary-background" />
                      </a>
                      {member.socials.github && (
                        <a
                          title="Github"
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiGithubFill className="text-2xl p-1 rounded-full bg-secondary-background" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          title="Twitter"
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiTwitterXLine className="text-2xl p-1 rounded-full bg-secondary-background" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          title="LinkedIn"
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiLinkedinFill className="text-2xl p-1 rounded-full bg-secondary-background grid place-items-center" />
                        </a>
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        );
      })}
    </>
  );
};
