import type { Metadata } from "next";
import React from "react";
import NotFoundClient from "./not-found-client";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const NotFoundPage = () => {
  return <NotFoundClient />;
};

export default NotFoundPage;
