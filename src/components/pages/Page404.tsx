import { memo, VFC } from "react";
import { PageInner } from "../organisms/layout/PageInner";

export const Page404: VFC = memo(() => {
    return (
        <PageInner><p>お探しのページはございません。</p></PageInner>
    )
}) 