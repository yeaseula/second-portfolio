import { Skills } from "./data/skills";

export default function SkillsInner() {
  return (
    <>
      {Skills.map((category) => (
        <div key={category.title}>
          {category.skills.map((skill) => (
            <div key={skill.title} className="mb-5">
              <h3 className="font-pretendard font-extrabold text-md mb-2 pl-2 py-1 rounded-md bg-main-lignt">
                {skill.title}
              </h3>
              <p className="font-pretendard font-extrabold mb-2 text-base">
                {skill.subtitle}
              </p>
              <ul>
                {skill.contents.map((text, idx) => (
                  <li key={idx}>- {text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
