import Sidebar from "./Sidebar/Sidebar"

function Main({username}) {
    return (
        <main>
            <Sidebar username={username} />

            <h1>Main content</h1>
        </main>
    )
}

export default Main