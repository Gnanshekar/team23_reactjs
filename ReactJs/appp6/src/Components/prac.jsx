const createUser = async () => {
    const response = await fetch("local-server", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    clearform();
    readusers();
}