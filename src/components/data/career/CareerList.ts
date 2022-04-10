import { Career } from "../../types/career/career";

export const CareerList = () => {
    const Careers: Career[] = [
        {
        id: 0,
        date: "2017/04 ~ 2021/06",
        title: "人材広告企業にてシステム職として勤務",
        description: "社内SEとして各事業部が利用している共通ツール・サーバ（オンプレ）などの一括管理、WordPressを利用してWebサイトの制作を行なっていました。",
        },
        {
        id: 1,
        date: "2021/07 ~ 現在",
        title: "ITコンサルにてフロントエンドエンジニアとして勤務",
        description: "フロントエンドエンジニアとしてSaasの開発やクライアントに納品するWebサイトの制作をしています。",
        },
    ]
    return {Careers}
}