import { memo, VFC } from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

// import { CareerList } from "../data/career/CareerList"
import { CareerCard } from "../organisms/skill/CareerCard";
import { H1Text } from "../atoms/text/H1Text";
import { PageInner } from "../organisms/layout/PageInner";

export const Career: VFC = memo(() => {
    return (
        <PageInner>
            <Box textAlign="left">
                <H1Text>CAREER</H1Text>
                <CareerCard></CareerCard>
            </Box>
        </PageInner>
    )
}) 