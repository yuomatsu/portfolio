import { Box, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CareerList } from "../../data/career/CareerList"
import { ProfileList } from "../../data/profile/ProfileList"
import { H4Text } from "../../atoms/text/H4Text";


export const ProfileCard: VFC = memo(() => {
    const { Profiles } = ProfileList();
    return (
        <>
        <Box mt={{ base: 10, md: 100}} textAlign="left">
            <Box mr={{ base: 0, md: "auto"}} ml={{ base: 0, md: "auto"}}>
                <Box backgroundColor="white" p={{ base: 5, md: 5}} mt={{ base: 5, md: 5}}>
                    <Box mb={{ base: 5, md: 5}}>
                        <Text display="flex" _before={{content:`"Q."`, mr: "1rem"}}>なぜIT業界で働こうと思ったのか？</Text>
                    </Box>
                    <Box>
                        <Text display="flex" _before={{content:`"A."`, mr: "1rem"}}>就活当時、IT技術に興味を持っており、今後の進化にも期待できる分野だと思ったから。</Text>
                    </Box>
                </Box>
                <Box backgroundColor="white" p={{ base: 5, md: 5}} mt={{ base: 5, md: 5}}>
                    <Box mb={{ base: 5, md: 5}}>
                        <Text display="flex" _before={{content:`"Q."`, mr: "1rem"}}>なぜIT業界で働こうと思ったのか？</Text>
                    </Box>
                    <Box>
                        <Text display="flex" _before={{content:`"A."`, mr: "1rem"}}>就活当時、IT技術に興味を持っており、今後の進化にも期待できる分野だと思ったから。</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}) 