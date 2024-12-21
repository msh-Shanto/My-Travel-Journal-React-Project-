import Entry from "./Entry";
import Header from "./Header";
import data from "./data";

export default function App() {
    const dataElements = data.map(datum => {
        return <Entry
                    id={datum.id}
                    {...datum}
                />
    })
    return (
        <>
            <Header/>
        <main className="container">
            {dataElements}
        </main>
        </>
    )
}