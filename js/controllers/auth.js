export const signUpController = (req, res) => {
    const isExist = true;

    if (isExist) {
    }

    return false;
};

export const loginController = (req, res) => {
    const token = "JWT_TOKEN";

    if (token) {
    }

    return true;
};

export const logoutController = (req, res) => {
    const toekn = "JWT_TOKEN";

    return Response.json({ message: "logout successfully!" }, { headers: { "Set-Cookie": `token=${token}` } });
};
