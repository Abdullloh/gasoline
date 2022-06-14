import React, { Suspense } from "react";
import { Layout } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";

import { StyledApp } from "./App.style";
import { AUTH_ROUTES, MAIN_ROUTES } from "../router";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const { Content } = Layout;
function Admin() {
  return (
    <StyledApp>
      <Layout>
        <Sidebar />
        <Layout id="main">
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "calc(100vh - 48px)" }}
            >
              <Header/>
              <Suspense fallback="Loading...">
                <Routes>
                  {MAIN_ROUTES?.map((item) => {
                    const { path, element: Component } = item;
                    return (
                      <Route key={path} path={path} element={<Component />} />
                    );
                  })}
                </Routes>
              </Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyledApp>
  );
}

export default Admin;
