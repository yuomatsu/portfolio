import { Skill} from "../../types/skill/skill"

export const SkillList = () => {
    const frontEndlList = [
        {
            "name": "HTML5/CSS3",
            "imgUrl": `${process.env.PUBLIC_URL}/img/html_css.png`,
            "description": "delectus aut autem",
        },
        {
            "name": "Javascript",
            "imgUrl": `${process.env.PUBLIC_URL}/img/javascript.png`,
            "description": "delectus aut autem",
        },
        {
            "name": "Vue.js",
            "imgUrl": `${process.env.PUBLIC_URL}/img/vue.png`,
            "description": "delectus aut autem",
        },
        {
            "name": "React",
            "imgUrl": `${process.env.PUBLIC_URL}/img/react.png`,
            "description": "delectus aut autem",
        },
    ]
    const backEndlList = [
        {
            "name": "PHP",
            "imgUrl": `${process.env.PUBLIC_URL}/img/php.png`,
            "description": "delectus aut autem",
        },
        {
            "name": "PostgresSQL",
            "imgUrl": `${process.env.PUBLIC_URL}/img/postgresql.png`,
            "description": "delectus aut autem",
        },
    ]
    
    return {frontEndlList, backEndlList}
}