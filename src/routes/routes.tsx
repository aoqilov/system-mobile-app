import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import AppLayout from "../layout/client/AppLayout";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage"));
const MapPage = lazy(() => import("../pages/MapPage"));
const MomentsPage = lazy(() => import("../pages/MomentsPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const ScanerPage = lazy(() => import("../pages/ScanerPage"));
const AttractionListPage = lazy(() => import("../pages/AttractionListPage"));
const MemorysPage = lazy(() => import("../pages/MemorysPage"));

export const routes: RouteObject[] = [
  { path: "/login", element: <LoginPage /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/map", element: <MapPage /> },
      { path: "/moments", element: <MomentsPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/scaner", element: <ScanerPage /> },
      { path: "/attractions", element: <AttractionListPage /> },
      { path: "/memories", element: <MemorysPage /> },
    ],
  },
];
