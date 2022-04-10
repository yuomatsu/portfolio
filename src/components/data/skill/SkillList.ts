import { Skill} from "../../types/skill/skill"

export const SkillList = () => {
    const frontEndSkills: Skill[] = [
        {
            "id": 1,
            "name": "HTML5/CSS3",
            "imageUrl": `${process.env.PUBLIC_URL}/img/html_css.png`,
            "description": "前職でのWebサイトを作成時や現職でのSaaS構築時に利用しています。",
        },
        {
            "id": 2,
            "name": "Javascript",
            "imageUrl": `${process.env.PUBLIC_URL}/img/javascript.png`,
            "description": "前職でのWebサイトを作成時や現職でのSaaS構築時に利用しています。",
        },
        {
            "id": 3,
            "name": "Vue.js",
            "imageUrl": `${process.env.PUBLIC_URL}/img/vue.png`,
            "description": "現職でのSaaS構築に利用しています。",
        },
        {
            "id": 4,
            "name": "React",
            "imageUrl": `${process.env.PUBLIC_URL}/img/react.png`,
            "description": "本ポートフォリオをReactとTypeScriptで構築しました。実務経験はありません。",
        },
        {
            "id": 5,
            "name": "TypeScript",
            "imageUrl": `${process.env.PUBLIC_URL}/img/typescript.png`,
            "description": "本ポートフォリオをReactとTypeScriptで構築しました。実務経験はありません。",
        },
    ]
    const backEndSkills: Skill[] = [
        {
            "id": 1,
            "name": "PHP",
            "imageUrl": `${process.env.PUBLIC_URL}/img/php.png`,
            "description": "前職でWordPressでサイト構築しました。また現職ではCakePHPでSaaSを構築しております。",
        },
        {
            "id": 2,
            "name": "PostgresQL",
            "imageUrl": `${process.env.PUBLIC_URL}/img/postgresql3.png`,
            "description": "現職でPostgresQLを利用しています。操作はphpMyAdminで行なっています。",
        },
    ]
    
    return {frontEndSkills, backEndSkills}
}