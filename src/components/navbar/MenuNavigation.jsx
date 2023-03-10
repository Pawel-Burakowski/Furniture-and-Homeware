import React, { useState } from "react"
import { menuDatas } from "../../Data/Data"
import { BsXLg, BsChevronDown } from "react-icons/bs"

function MenuNavigation({ menuToggle, setMenuToggle }) {
	const [activeData, setActiveData] = useState(null)
	const handleClick = id => {
		setActiveData(id === activeData ? null : id)
	}

	return (
		<div className={`${menuToggle ? "menuNavigation open" : "menuNavigation"}`}>
			<div className='menu'>
				<div className='nummo'>nummo</div>
				<div className='menuX' onClick={prev => setMenuToggle(!prev)}>
					<BsXLg />
				</div>
			</div>
			<div className='menuDatas'>
				{menuDatas.map((menuData, id) => {
					return (
						<div
							className='dataGroup'
							key={menuData.id}
							onClick={() => handleClick(id)}>
							<div className='dataGrouName'>
								<div>{menuData.dataGroupName}</div>
								<BsChevronDown
									className={`${id === activeData ? "rotate180" : "rotate0"}`}
								/>
							</div>

                            {id === activeData && (
                                <div className="dataItems">
                                    {menuData.dataItems.map
                                    ((dataItem, index) => (
                                    <a href="" key={index}>
                                        {dataItem}
                                    </a>
                                    ))}
                                </div>
                            )}
						</div>
					)
				})}
			</div>
            <div className="callUs">Zadzwoń! +48 978 645 312</div>
            <div className="openHours">Godziny otwarcia: 9.00 - 19.00</div>
		</div>
	)
}

export default MenuNavigation
