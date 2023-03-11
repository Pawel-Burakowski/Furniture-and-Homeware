import react from "react"
import { products } from "../../Data/Data"
import Products from "./Products"

export default function PopularProducts() {
	return (
		<section className='container min_100vh'>
			<div className='popular_container'>
				<div className='title'>
					Popularne <span>produkty</span>
				</div>
				<div className='nextAndPrev'>
					<div>Poprzednie</div>
					<span>|</span>
					<div>Następne</div>
				</div>
			</div>

			<div className='product_container'>
				{products.map(product => {
					return <Products key={product.id} {...product} />
				})}
			</div>
		</section>
	)
}
