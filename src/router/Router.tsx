import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../components/pages/Home";
import {Profile} from "../components/pages/Profile"
import {Skill} from "../components/pages/Skill"
import { Career } from "../components/pages/Career";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <HeaderLayout><Home /></HeaderLayout>
            </Route>
            <Route exact path="/profile">
                <HeaderLayout><Profile /></HeaderLayout>
            </Route>
            <Route exact path="/skill">
                <HeaderLayout><Skill /></HeaderLayout>
            </Route>
                <Route exact path="/career">
                <HeaderLayout><Career /></HeaderLayout>
            </Route>
            <Route exact path="*">
                <HeaderLayout><Page404 /></HeaderLayout>
            </Route>
        </Switch>
    )
}) 