import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../components/pages/Home";
import {Profile} from "../components/pages/Profile"
import {Skill} from "../components/pages/Skill"
import { Career } from "../components/pages/Career";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/skill">
                <Skill />
            </Route>
            <Route exact path="/carrer">
                <Career />
            </Route>
            <Route exact path="*">
                <Page404 />
            </Route>
        </Switch>
    )
}) 