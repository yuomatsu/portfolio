import { Box, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CareerList } from "../../data/career/CareerList"
import { H4Text } from "../../atoms/text/H4Text";


export const CareerCard: VFC = memo(() => {
    const { Careers } = CareerList();
    return (
        <Box mt={{ base: 10, md: 100}} textAlign="left">
            <VerticalTimeline className="timeline">
            {Careers.map((Career) => {
                return (
                <VerticalTimelineElement
                    key={Career.id}
                    className="vertical-timeline-element--work vertical-timeline-element-date"
                    contentStyle={{ background: "#fff", color: "#314656" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{
                        color: "#000",
                    }}
                    date={Career.date}
                >
                    <H4Text>{Career.title}</H4Text>
                    <Text>{Career.description}</Text>
                </VerticalTimelineElement>
                );
            })}
            </VerticalTimeline>
        </Box>
    )
}) 