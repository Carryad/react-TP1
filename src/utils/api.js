export const getUsers = async () => {
    let response = await fetch('http://localhost:3001/users', {
        method:'GET'
    })
    let users = await response.json()
    return users
}

export const postUsers = async (user) => {
    let response = await fetch('http://localhost:3001/users', {
        method:'POST',
        body: JSON.stringify(user)
    })
    let userCreated = await response.json()
    return userCreated
}