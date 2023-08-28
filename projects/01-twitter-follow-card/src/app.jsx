import { TwitterFollowCard } from "./TwitterFollowCard"
import "./app.css"

export function App () {

    const users = [
        {
            name: "Luca F. Fortin",
            userName: "Lurmenders"
        },
        {
            name: "Leonel Padial",
            userName: "leonel_padial"
        },
        {
            name: "Hypon",
            userName: "Hypon15"
        },
        {
            name: "Miguel Ángel Durán",
            userName: "midudev"
        }
    ]

    return (
        <div className="App">
            {users.map(({ name, userName }) => {
                return (
                    <TwitterFollowCard key={userName} name={name} userName={userName} />
                )
            })}
        </div>
    )
}

