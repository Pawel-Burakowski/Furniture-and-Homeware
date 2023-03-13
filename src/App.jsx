import "./sass/main.scss"
import {
	Home,
	Navbar,
	PopularProducts,
	Shopping,
	BuyOnline,
	Reviews,
	Contact,
	Footer,
	Scroll,
} from "./components"

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<PopularProducts />
			<Shopping />
			<BuyOnline />
			<Reviews />
			<Contact />
			<Footer />
			<Scroll />
		</>
	)
}

export default App
