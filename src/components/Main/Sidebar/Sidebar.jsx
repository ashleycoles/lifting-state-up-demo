function Sidebar({username, logout}) {
    return (
        <div>
            Profile for {username}
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Sidebar