import React, { useEffect } from "react";
// Librares
import { useDispatch } from "react-redux";
import { Outlet} from "react-router-dom";
// elements
import BackgroundGradiend from "../components/ScreenWidthWrapper";
import ScreenWidthWrapper from "../components/BackgroundGradient";
//Store
import { getPosts } from "../store/postsSlice";

const PostsLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadPostData = () => {
            dispatch(getPosts());
        };
        loadPostData();
    }, [dispatch]);

    // let { path } = useRouteMatch();
    return (
        <>
            <BackgroundGradiend />
            <ScreenWidthWrapper>
				<Outlet />
            </ScreenWidthWrapper>
        </>
    );
};

export default PostsLayout;
