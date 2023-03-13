import { reviews } from "../../Data/Data"
import { BsStarFill } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"

export default function Reviews() {
	return (
		<section className='container'>
			<div className='title'>
				Opinie<span>klientów</span>
			</div>
			<Swiper
				pagination={{ dynamicBullets: true, clickable: true }}
				autoplay={{ deley: 2500 }}
				modules={[Autoplay, Pagination]}
				sliderPerGroup={1}>
				{reviews.map(opinie => {
					return (
						<SwiperSlide key={opinie.id}>
							<div className='swiperBlah'>
								<img src={opinie.reviewImg} alt='' />
								<div>
									<div className='icon'>
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
									</div>
									<div className='reviewer'>
										{opinie.reviewer}
										<a href=''>{opinie.reviewProduct}</a>
									</div>
									<p className='review'>{opinie.review}</p>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}
