import { memo, VFC } from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";


import { SkillCard } from "../organisms/skill/SkillCard";
import { SkillList } from "../data/skill/SkillList";
import { H2Text } from "../atoms/text/H2Text";
import { CertificationTable } from "../organisms/skill/CertificationTable";

export const Skill = memo(() => {
    const {frontEndSkills, backEndSkills} = SkillList(); 

    return (
        <Box pr={{ base: 10, md: 20}} pl={{ base: 10, md: 20}} mt={{ base: 5, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 5, md: "auto"}} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="gray.300" maxW="1200px">
            <Box mt={{ base: 20, md: 120}} fontSize={{ base: '1.5rem', md: "3rem"}}>
                <Text as="h1">SKILL</Text>
            </Box>
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

        </Box>
    )
})