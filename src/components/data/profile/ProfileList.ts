import { Career } from "../../types/career/career";

export const ProfileList = () => {
    const Profiles = [
        {
            id: 0,
            question: "年齢は？",
            answer: "28歳",
        },
        {
            id: 1,
            question: "なぜIT業界で働こうと思ったのか？",
            answer: "就活当時、IT技術に興味を持っており、今後の進化にも期待できる分野だと思ったから。",
        },
        {
            id: 2,
            question: "なぜWebエンジニアになったのか？",
            answer: "前職で経験したWebサイト制作が楽しく、もっと深く携わりたいと思ったから。",
        },
        {
            id: 3,
            question: "趣味は？",
            answer: "ゲーム、旅行、スノーボード、読書、IT系の勉強",
        },
        {
            id: 4,
            question: "好きな食べ物は？",
            answer: "焼肉、お酒（ビール、ハイボール、レモンサワー）、コーヒー",
        },
        {
            id: 5,
            question: "将来の夢は？",
            answer: "世界一周旅行！",
        },
    ]
    return {Profiles}
}