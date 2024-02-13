// import { useEffect, useState } from "react"
// import { Button, ContactRowItem, Searchbar } from "../../components"
// import { Title } from "../../components/Typography"
// import AppConfig from "../../utilities/config"
// import { checkAuth } from "../../components/hoc"
// import { useNavigate } from "react-router-dom"
// import { AxiosData, ContactsQuery } from "../../interfaces"
// import { objectToQueryString } from "../../utilities/common"
// import { mainClient } from "../../utilities/client"
// import { AxiosResponse } from "axios"

// function Contacts() {
//     const navigate = useNavigate()
//     const [contacts, setContacts] = useState<any>([])
//     const [searchTerm, setSearchTerm] = useState("")
//     const createEvent = () => navigate(AppConfig.PATHS.Dashboard.Contacts.Create)

//     const [pagination, setPagination] = useState({
//         page: 1,
//         total: 0,
//         pages: 0
//     })


//     const navigateToContact = (id: string) => navigate(`${AppConfig.PATHS.Dashboard.Contacts.Edit}/${id}`)
//     const getContacts = () => {
//         let params: ContactsQuery = { page: pagination.page, search: searchTerm }
//         const queryString = objectToQueryString(params)

//         mainClient.get(`${AppConfig.API_ENDPOINTS.Guests.BaseURL}?${queryString}`)
//             .then((r: AxiosResponse<AxiosData>) => {
//                 // const { events, total, page, pageSize } = r.data.data
//                 const { guests } = r.data.data
//                 setContacts(guests)
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
//             getContacts()
//         }, 300);

//         return () => clearTimeout(delayDebounceFn);
//     }, [searchTerm]);

//     useEffect(() => {
//         getContacts()
//     }, [])

//     return (
//         <div>
//             <div className="flex flex-col lg:flex-row justify-between w-full items-center mb-10 lg:gap-0 gap-5">
//                 <Title theme="primary" className="w-full lg:w-auto">Contact Dashboard</Title>
//                 <Searchbar
//                     iconPosition={'right'}
//                     searchTerm={searchTerm}
//                     setSearchTerm={setSearchTerm}
//                     placeholder={AppConfig.PLACEHOLDERS.ContactSearchbar} />
//                 <Button theme="primary" onClick={createEvent}>Create Contact</Button>
//             </div>


//             <div className='border-[1px] border-black w-full overflow-x-auto'>
//                 <table className="table-auto w-full text-left">
//                     <thead>
//                         <tr className="text-xl border-b border-primary">
//                             <th className="p-4"></th>
//                             <th className="p-4">Full Name</th>
//                             <th className="p-4">Profession</th>
//                             <th className="p-4">LinkedIn Profile</th>
//                             <th className="p-4">Work Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {contacts.length > 0 ? contacts.map((contact: any, i: number) => (
//                             <ContactRowItem key={i} contact={contact} onClick={navigateToContact} />
//                         )) : (
//                             <tr>
//                                 <td colSpan={5} className="text-center py-5">No Contacts {`${searchTerm ? ` found for "${searchTerm}"`: 'available'}.`}</td>
//                             </tr>
//                         )}

//                     </tbody>
//                 </table>

//             </div>

//         </div>
//     )
// }

// export default Contacts