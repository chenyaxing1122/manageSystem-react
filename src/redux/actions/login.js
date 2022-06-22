export const loginAction = payload => {
    // console.log("loginAction.payload", payload);
    return ({ type: "add", payload });
}
export const menuAction = payload => {
    // console.log("menuAction.payload", payload);

    return ({ type: "generate", payload });
}