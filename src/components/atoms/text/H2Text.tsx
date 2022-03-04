import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const H2Text: VFC<Props> = memo((props) => {
    const { children } = props;
    return <Text as="h2" fontSize={{ base: '2.25rem', md: "2.75rem"}} mt={{ base: 20, md: 50}} mb={{ base: 10, md: 50}}>{ children }</Text>
}) 