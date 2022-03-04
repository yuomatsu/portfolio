import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const H1Text: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
    <Text
        as="h1"
        position="relative"
        textAlign="center"
        fontSize={{ base: '2.5rem', md: "3.0rem"}}
        mt={{ base: 20, md: 50}}
        _before={{
            position:"absolute",
            bottom:"-10px",
            left: "calc(50% - 30px)",
            width: "60px",
            height: "5px",
            content: "''",
            borderRadius: "3px",
            backgroundColor: "#000"
        }}
    >
    { children }
    </Text>
    )
}) 