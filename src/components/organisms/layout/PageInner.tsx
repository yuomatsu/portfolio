import { memo, ReactNode, VFC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const PageInner: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <Box pr={{ base: 2, md: 20 }} pl={{ base: 2, md: 20 }} pb={{ base: 100, md: 120 }} mt={{ base: 5, md: 120 }} mb={{ base: 5, md: 20} } mr={{ base: 5, md: "auto" }} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="gray.300" maxW="1200px">
            { children }
        </Box>
    )
}) 