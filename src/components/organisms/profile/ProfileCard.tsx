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
import { Profile } from "../../pages/Profile";


export const ProfileCard: VFC = memo(() => {
    const { Profiles } = ProfileList();
    return (
        <Box mr={{ base: 0, md: "auto"}} ml={{ base: 0, md: "auto"}}　mt={{ base: 10, md: 100}} mb={{ base: 30, md: 50}} textAlign="left">
            {Profiles.map((Profile) => {
                return (
                <Box backgroundColor="white" p={{ base: 5, md: 5}} mt={{ base: 5, md: 50}} borderRadius="10px">
                    <Box mb={{ base: 5, md: 5}}>
                        <Text display="flex" _before={{content:`"Q."`, mr: "1rem"}}>{Profile.question}</Text>
                    </Box>
                    <Box>
                        <Text display="flex" _before={{content:`"A."`, mr: "1rem"}}>{Profile.answer}</Text>
                    </Box>
                </Box>
                )
            })}
        </Box>
    )
}) 