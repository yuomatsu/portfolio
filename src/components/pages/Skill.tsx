import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";


import { SkillCard } from "../organisms/skill/SkillCard";
import { SkillList } from "../data/skill/SkillList";
import { H1Text } from "../atoms/text/H1Text";
import { H2Text } from "../atoms/text/H2Text";
import { CertificationTable } from "../organisms/skill/CertificationTable";
import { PageInner } from "../organisms/layout/PageInner";

export const Skill = memo(() => {
    const {frontEndSkills, backEndSkills} = SkillList(); 

    return (
        <PageInner>
            <H1Text>SKILL</H1Text>
            <H2Text>Frontend</H2Text>
            <Wrap p={{ base: 4, md: 10 }} justify="center">
                {frontEndSkills.map((frontEndSkill) => (
                <WrapItem key={frontEndSkill.id}>
                <SkillCard
                    id={frontEndSkill.id}
                    name={frontEndSkill.name}
                    imageUrl={frontEndSkill.imageUrl}
                    description={frontEndSkill.description}
                />
                </WrapItem>
            ))}
            </Wrap>
            <H2Text>Backend</H2Text>
            <Wrap p={{ base: 4, md: 10 }} justify="center">
                {backEndSkills.map((backEndSkill) => (
                <WrapItem key={backEndSkill.id}>
                <SkillCard
                    id={backEndSkill.id}
                    name={backEndSkill.name}
                    imageUrl={backEndSkill.imageUrl}
                    description={backEndSkill.description}
                />
                </WrapItem>
            ))}
            </Wrap>
            <H2Text>Certification</H2Text>
            <CertificationTable></CertificationTable>
        </PageInner>
    )
})