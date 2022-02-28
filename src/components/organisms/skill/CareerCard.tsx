import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CareerList } from "../../data/career/CareerList"
import { Career } from "../../types/career/career";


export const CareerCard: VFC = memo(() => {
    const { Careers } = CareerList();
    return (
        <Box mt={{ base: 10, md: 100}}>
            <VerticalTimeline className="timeline">
            {Careers.map((Career) => {
                return (
                <VerticalTimelineElement
                    key={Career.id}
                    className="vertical-timeline-element--work vertical-timeline-element-date"
                    contentStyle={{ background: "#fff", color: "#3a3a3f" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    date={Career.date}
                >
                    <h3 className="vertical-timeline-element-title">{Career.title}</h3>
                    <p>{Career.description}</p>
                </VerticalTimelineElement>
                );
            })}
            </VerticalTimeline>
        </Box>
    )
}) 