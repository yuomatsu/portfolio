import { Skill} from "../../types/skill/skill"

export const SkillList = () => {
    const frontEndSkills: Skill[] = [
        {
            "id": 1,
            "name": "HTML5/CSS3",
            "imageUrl": `${process.env.PUBLIC_URL}/img/html_css.png`,
            "description": "delectus aut autem",
        },
        {
            "id": 2,
            "name": "Javascript",
            "imageUrl": `${process.env.PUBLIC_URL}/img/javascript.png`,
            "description": "delectus aut autem",
        },
        {
            "id": 3,
            "name": "Vue.js",
            "imageUrl": `${process.env.PUBLIC_URL}/img/vue.png`,
            "description": "delectus aut autem",
        },
        {
            "id": 4,
            "name": "React",
            "imageUrl": `${process.env.PUBLIC_URL}/img/react.png`,
            "description": "delectus aut autem",
        },
    ]
    const backEndSkills: Skill[] = [
        {
            "id": 1,
            "name": "PHP",
            "imageUrl": `${process.env.PUBLIC_URL}/img/php.png`,
            "description": "delectus aut autem",
        },
        {
            "id": 2,
            "name": "PostgresSQL",
            "imageUrl": `${process.env.PUBLIC_URL}/img/postgresql.png`,
            "description": "delectus aut autem",
        },
    ]
    
    return {frontEndSkills, backEndSkills}
}