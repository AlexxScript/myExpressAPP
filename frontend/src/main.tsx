import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AppAuth from "./components/AppAuth";

const root = createRoot(document.getElementById('app')!);

root.render(<AppAuth />);