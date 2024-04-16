const body = document.querySelector("body");
body.addEventListener("click", () => {});

// Authentication Features

import { signUpController, loginController, logoutController } from "./controllers/auth";

const signUp = (req, res) => signUpController(req, res);
const login = (req, res) => loginController(req, res);
const logout = (req, res) => logoutController(req, res);
