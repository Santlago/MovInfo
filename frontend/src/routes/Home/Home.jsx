export const Home = () => {
    return(
        <div className="container">
            <div className="ad1">
                <h1>Anúncio</h1>
            </div>
            <main>
                <form>
                    <h1>Digite o nome do filme</h1>
                    <label htmlFor="filme">
                        <input type="text" name="filme" />
                    </label>
                    <button>Pesquisar</button>
                </form>
            </main>
            <div className="ad2">
                <h1>Anúncio</h1>
            </div>
        </div>
    )
}