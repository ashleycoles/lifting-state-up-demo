import Sidebar from "./Sidebar/Sidebar"

function Main({username, logout}) {
    return (
        <main>
            <Sidebar username={username} logout={logout} />

            <h1>Main content</h1>
        </main>
    )
}

export default Main