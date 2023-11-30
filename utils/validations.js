const validEmail = (text) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|".+")@(.+)$/;
    return regex.test(text);
}

export {
    validEmail
}