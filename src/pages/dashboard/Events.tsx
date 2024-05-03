// import { AxiosResponse } from "axios"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { List, Tab } from "../../assets/svg/svg"
// import { Button, EventItem, EventRowItem, Searchbar } from "../../components"
// import { Title } from "../../components/Typography"
// import { AxiosData, EventsQuery, IEventItem } from "../../interfaces"
// import { mainClient } from "../../utilities/client"
// import { objectToQueryString } from "../../utilities/common"
// import AppConfig from "../../utilities/config"

// function Events() {
//     const navigate = useNavigate()
//     const [events, setEvents] = useState<any>([])
//     const [searchTerm, setSearchTerm] = useState("")
//     const [viewMode, setViewMode] = useState(AppConfig.VIEW_MODES.LIST);

//     const [pagination, setPagination] = useState({
//         page: 1,
//         total: 0,
//         pages: 0
//     })

//     const handleListView = () => setViewMode(AppConfig.VIEW_MODES.LIST);
//     const handleColumnView = () => setViewMode(AppConfig.VIEW_MODES.COLUMN);

//     const navigateToEvent = (id: string) => navigate(`${AppConfig.PATHS.Events.Base}/${id}`)
//     const navigateToDashboardEvent = (id: string) => navigate(`${AppConfig.PATHS.Dashboard.Events.Edit}/${id}`)
//     const navigateToCreateEvent = () => navigate(`${AppConfig.PATHS.Dashboard.Events.Create}`)

//     const getEvents = () => {
//         let params: EventsQuery = { page: pagination.page, search: searchTerm }
//         const queryString = objectToQueryString(params)

//         mainClient.get(`${AppConfig.API_ENDPOINTS.Events.MineURL}?${queryString}`)
//             .then((r: AxiosResponse<AxiosData>) => {
//                 // const { events, total, page, pageSize } = r.data.data
//                 const { events } = r.data.data
//                 setEvents(events)
//                 // setPagination({
//                 //     page,
//                 //     total,
//                 //     pages: total / pageSize
//                 // })
//             })
//             .catch(e => console.log(e))
//     }

//     useEffect(() => {
//         const delayDebounceFn = setTimeout(() => {
//             getEvents()
//         }, 300);

//         return () => clearTimeout(delayDebounceFn);
//     }, [searchTerm]);

//     useEffect(() => {
//         getEvents()
//     }, [])

//     return (
//         <div>
//             <div className="flex flex-col lg:flex-row justify-between w-full items-center mb-10 lg:gap-0 gap-5">
//                 <Title theme="primary" className="w-full lg:w-auto">Event Dashboard</Title>
//                 <Searchbar iconPosition={'right'} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//                 <Button theme="primary" onClick={navigateToCreateEvent}>Create Event</Button>
//             </div>

//             <div className="flex justify-between items-center mb-10">
//                 <div>{events.length} {events.length === 1 ? 'Event' : 'Events'}</div>

//                 <div className='flex items-center gap-3'>
//                     <button onClick={handleListView} className='flex gap-5 items-center text-primary text-xl font-bold'>
//                         <div className={`transition-all rounded-xl p-3 ${viewMode === AppConfig.VIEW_MODES.LIST ? 'bg-customsecondary' : ''} `}>
//                             <List className={`transition-all ${viewMode === AppConfig.VIEW_MODES.LIST ?
//                                 'fill-greyed stroke-greyed' : 'fill-primary stroke-primary'}`} />
//                         </div>
//                     </button>
//                     <button
//                         onClick={handleColumnView} className='flex gap-5 items-center text-primary text-xl font-bold'>
//                         <div className={`transition-all rounded-xl p-3 ${viewMode === AppConfig.VIEW_MODES.COLUMN ? 'bg-customsecondary' : ''}`}>
//                             <Tab className={`transition-all ${viewMode === AppConfig.VIEW_MODES.COLUMN ?
//                                 'fill-greyed stroke-greyed' : 'fill-primary stroke-primary'}`} />
//                         </div>
//                     </button>
//                 </div>

//                 <div className=""></div>
//             </div>

//             <div className="">
//                 {viewMode === AppConfig.VIEW_MODES.LIST ? (
//                     <div className='border-[1px] border-black w-full overflow-x-auto'>
//                         <table className="table-auto w-full text-left">
//                             <thead>
//                                 <tr className="text-xl border-b border-primary">
//                                     <th className="p-4"></th>
//                                     <th className="p-4">Event Name</th>
//                                     <th className="p-4">Event Date</th>
//                                     <th className="p-4">Event Time</th>
//                                     <th className="p-4">Venue</th>
//                                     <th className="p-4">Attending</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {events.length > 0 ? events.map((event: IEventItem, i: number) => (
//                                     <EventRowItem event={event} key={i} onClick={navigateToDashboardEvent} />
//                                 )) : (
//                                     <tr>
//                                         <td colSpan={5} className="text-center py-5">No Events {`${searchTerm ? ` found for "${searchTerm}"`: 'available'}.`}</td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>

//                     </div>
//                 ) : null}

//                 {viewMode === AppConfig.VIEW_MODES.COLUMN ? (
//                     <div className={`flex flex-wrap ${events.length > 4 ? 'justify-center' : ''} items-center gap-6`}>
//                         {events.length > 0 ? events.map((event: IEventItem, i: number) => (
//                             <EventItem event={event} key={i} onClick={navigateToEvent} />
//                         )) : (
//                             <div className="text-center">No Events {`${searchTerm ? ` found for "${searchTerm}"`: 'available'}.`}</div>
//                         )}
//                     </div>
//                 ) : null}
//             </div>
//         </div>
//     )
// }

// export default Events
