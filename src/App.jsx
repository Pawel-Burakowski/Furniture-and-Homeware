import "./sass/main.scss"
import {
	Home,
	Navbar,
	PopularProducts,
	Shopping,
	BuyOnline,
} from "./components"

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<PopularProducts />
			<Shopping />
			<BuyOnline />
		</>
	)
}

export default App
