import { memo, VFC } from "react";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const careers = [
    {
    id: 0,
    date: "2017/04 ~ 2021/06",
    title: "広告人材企業にてシステム職として勤務",
    description:
        "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
    },
    {
    id: 1,
    date: "~ 2021/07",
    title: "ITコンサルにてフロントエンドエンジニアとして勤務",
    description:
        "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
    },
]

export const Career: VFC = memo(() => {
    return (
        <VerticalTimeline className="timeline">
        {careers.map((career) => {
            return (
            <VerticalTimelineElement
                key={career.id}
                className="vertical-timeline-element--work vertical-timeline-element-date"
                contentStyle={{ background: "#fff", color: "#3a3a3f" }}
                contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                date={career.date}
            >
                <h3 className="vertical-timeline-element-title">{career.title}</h3>
                <p>{career.description}</p>
            </VerticalTimelineElement>
            );
        })}
        </VerticalTimeline>
    )
}) 