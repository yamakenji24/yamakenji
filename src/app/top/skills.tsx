import Image from 'next/image';
import type { SkillType } from 'services/get-skill-api';
import { Title } from 'ui/common/title';
import { MyGithubCalendar } from '../../ui/githubCalendar';

export const Skills = ({ skills }: { skills: Array<SkillType> }) => {
  return (
    <div className="flex flex-col">
      <Title title="Skill Set" />
      <div className="flex flex-wrap justify-center">
        {skills.length &&
          skills.map((skill) => (
            <div key={skill.id} className="w-24 h-24 px-4 bg-white">
              <Image
                src={skill.img}
                width={60}
                height={60}
                alt={skill.name}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
      </div>
      <Title title="Days I Code" />
      {/*
        FixME: CSRじゃないとhydrationで怒られるが、dynamicでimportしてもビルド時に怒られる
        <MyGithubCalendar />
      */}
    </div>
  );
};
