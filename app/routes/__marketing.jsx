import { Outlet } from "@remix-run/react";
import { getUserFromSession } from "~/data/auth.server";
import MainHeader from "~/components/navigation/MainHeader";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function loader({ request }) {
  return getUserFromSession(request);
}

export function headers() {
  return {
    "Cache-Control": "max-age=3600", // 60 minutes
  };
}
