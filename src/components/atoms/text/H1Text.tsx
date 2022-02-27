import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const H1Text: VFC<Props> = memo((props) => {
    const { children } = props;
    return <Text as="h1" fontSize={{ base: '2.0rem', md: "3.0rem"}} mt={{ base: 20, md: 120}}>{ children }</Text>
}) 