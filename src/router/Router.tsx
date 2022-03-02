import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../components/pages/Home";
import {Profile} from "../components/pages/Profile"
import {Skill} from "../components/pages/Skill"
import { Career } from "../components/pages/Career";
import { Page404 } from "../components/pages/Page404";
import { HeaderFooterLayout } from "../components/templates/HeaderFooterLayout";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <HeaderFooterLayout><Home /></HeaderFooterLayout>
            </Route>
            <Route exact path="/profile">
                <HeaderFooterLayout><Profile /></HeaderFooterLayout>
            </Route>
            <Route exact path="/skill">
                <HeaderFooterLayout><Skill /></HeaderFooterLayout>
            </Route>
                <Route exact path="/career">
                <HeaderFooterLayout><Career /></HeaderFooterLayout>
            </Route>
            <Route exact path="*">
                <HeaderFooterLayout><Page404 /></HeaderFooterLayout>
            </Route>
        </Switch>
    )
}) 