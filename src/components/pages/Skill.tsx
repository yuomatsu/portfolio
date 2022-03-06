import { memo, VFC } from "react";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";


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
            <Box mt={{ base: 100, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 0, md: "auto"}} ml={{ base: 0, md: "auto"}}>
                <H2Text>Frontend</H2Text>
                <Wrap mt={{ base: 10, md: 100}} mb={{ base: 20, md: 120}} justify="center">
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
                <Wrap mt={{ base: 10, md: 100}} mb={{ base: 20, md: 120}} justify="center">
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
            </Box>
        </PageInner>
    )
})