import { memo, ReactNode, VFC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const PageInner: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <Box pr={{ base: 2, md: 20 }} pl={{ base: 2, md: 20 }} pb={{ base: 50, md: 120 }} mt={{ base: 20, md: 120 }} mb={{ base: 50, md: 20} } mr={{ base: 5, md: "auto" }} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="#efefef" maxW="1200px">
            { children }
        </Box>
    )
}) 