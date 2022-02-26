import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const SkillCard: VFC<Props> = memo((props) => {
    const { children } = props;
    return <Text as="h2" fontSize={{ base: '1.0rem', md: "2.5rem"}} mt={{ base: 20, md: 50}}>{ children }</Text>
}) 