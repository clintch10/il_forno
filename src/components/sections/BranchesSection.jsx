import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import branchesList from "../../assets/branches.json"

// const position = { lat: 24.495497389068383, lng: 54.384191754112614 };
// const position = { lat: 24.340416876564067, lng: 55.96065049788027 }





const BranchesSection = () => {

    // const [position, setPosition] = useState({ lat: 0, lng: 0 })
    const [position, setPosition] = useState()

    // var coorPosition = branchesList.AbuDhabi
    // console.log(coorPosition[2].coordinates[0].lng);
    console.log(position)
    // console.log(branchesList.AbuDhabi[0].coordinates[0].lat);
    // console.log(branchesList.AbuDhabi[0].coordinates[0].lng);

    const getLatLng = ((e) => {
        try {
            var latValue = e.target.getAttribute('data-lat');
            alert(latValue);
        } catch (error) {
            console.warn(error)
        }


    })

    return (
        <section className='p-20 relative'>
            <div className='mx-auto lg:container 2xl:px-30'>
                <div className=' mb-15'>
                    <h2 className='section-header'>Our <span className='text-green-800'>Branches</span></h2>
                    <p className='font-cairo text-[18px] text-center text-gray-600'>Wherever life leads you, you’ll always find a familiar smile at one of our branches.</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-20 justify-center">
                    <div className='h-[400px] lg:w-[40%] flex flex-col gap-2 py-3 px-2 overflow-auto mb-5 lg:mb-0 '>

                        {
                            branchesList && branchesList.AbuDhabi.map(branchStores => {
                                return (
                                    <button key={branchStores.id} data-lat={branchStores.coordinates.map(latValue => latValue.lat)} data-lng={branchStores.coordinates.map(lngValue => lngValue.lng)} onClick={getLatLng} className='cursor-pointer flex flex-col items-start px-5 py-3 shadow-md border-gray-100 rounded-lg border-1 bg-gray-50 hover:bg-gray-100 duration-300 ease-in'>
                                        <span className='font-cairo text-[16px] font-bold text-green-900 mb-2'>{branchStores.branch}</span>
                                        <span className='flex flex-row text-start font-cairo text-[14px] text-gray-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Zm0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001l-.568.39ZM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" /></svg>
                                            {branchStores.location}</span>
                                    </button>
                                )
                            })
                        }


                        {/* <button className='cursor-pointer flex flex-col items-start px-5 py-3 shadow-md border-gray-100 rounded-lg border-1 bg-gray-50 hover:bg-gray-100 duration-300 ease-in'>
                            <span className='font-cairo text-[16px] font-bold text-green-900 mb-2'>Abu Dhabi Mall</span>
                            <span className='flex flex-row text-start font-cairo text-[14px] text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Zm0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001l-.568.39ZM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" /></svg>
                                Il Forno, Abu Dhabi Mall, 1 Abu Dhabi Mall - Al Maiyani St - Al Zahiyah - E16 01 - Abu Dhabi - United Arab Emirates</span>
                        </button> */}
                    </div>
                    <div className='grow'>


                        {/* <MapContainer className='h-[400px] rounded-2xl' center={{ lat: position.lat, lng: position.lng }} zoom={10} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={{ lat: 24.495497389068383, lng: 54.384191754112614 }}>
                                <Popup>
                                    <span>Test</span>
                                </Popup>
                            </Marker>
                        </MapContainer> */}
                    </div>

                    {/* <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            branchesList && branchesList.AbuDhabi.map(branchesItems => {
                                // var coorPosition = [branchesItems.coordinates[0].lat, branchesItems.coordinates[1]]

                                return (
                                    <Marker key={branchesItems.id} position={{
                                        lat: branchesItems.coordinates.map(coorLat => {
                                            return coorLat.lat
                                        }), lng: branchesItems.coordinates.map(coorLng => {
                                            return coorLng.lng
                                        })
                                    }} >
                                        <Popup>
                                            <span>{branchesItems.branch}</span>
                                        </Popup>
                                    </Marker>
                                )
                            })
                        }

                    </MapContainer> */}
                </div>

            </div>
        </section >
    )
}

export default BranchesSection