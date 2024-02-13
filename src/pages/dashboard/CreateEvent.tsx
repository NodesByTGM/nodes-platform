// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { toast } from "react-toastify"
// import { ChevronLeftIcon } from "../../assets/svg/svg"
// import { Button, Input } from "../../components"
// import { mainClient } from "../../utilities/client"
// import { handleAxiosError } from "../../utilities/common"
// import AppConfig from "../../utilities/config"
// import { useAuth } from "../../context/hooks"
// import { AxiosResponse } from "axios"
// import { AxiosData } from "../../interfaces"

// function CreateEvents() {
//     const { id } = useParams();
//     const navigate = useNavigate()
//     const [edit, setEdit] = useState(false)
//     const [form, setForm] = useState({
//         name: '',
//         location: '',
//         locationType: '',
//         image: '',
//         price: 0,
//         description: '',
//         shortDescription: '',
//         timezone: '',
//         eventTime: '',
//         eventDate: '',
//     })


//     const handleChange = (e: any) => {
//         const { id, value } = e.target
//         setForm((prev) => ({
//             ...prev,
//             [id]: value,
//         }));
//     };

//     const handleSubmit = () => {
//         const url = edit ? `${AppConfig.API_ENDPOINTS.Events.BaseURL}/${id}` : AppConfig.API_ENDPOINTS.Events.CreateURL
//         mainClient.request({
//             url,
//             method: edit ? 'PUT' : 'POST',
//             data: form
//         })
//             .then(r => {
//                 if (r.status === 200) {
//                     setForm({
//                         name: '',
//                         location: '',
//                         image: '',
//                         price: 0,
//                         description: '',
//                         shortDescription: '',
//                         timezone: '',
//                         eventTime: '',
//                         eventDate: '',
//                         locationType: ''
//                     })
//                     toast.success(`Event ${edit ? 'edited' :  'created'} successfully!`)
//                     navigateToDashboardEvents()
//                 }
//             })
//             .catch(e => handleAxiosError(e))
//     }

//     const navigateToDashboardEvents = () => navigate(`${AppConfig.PATHS.Dashboard.Events.Base}`)


//     const getEvent = () => {
//         mainClient.get(`${AppConfig.API_ENDPOINTS.Events.BaseURL}/${id}`)
//             .then((r: AxiosResponse<AxiosData>) => {
//                 const { name,
//                     location,
//                     locationType,
//                     image,
//                     price,
//                     description,
//                     shortDescription,
//                     timezone,
//                     eventTime,
//                     eventDate } = r.data.data
//                 setForm({
//                     name,
//                     location,
//                     locationType,
//                     image,
//                     price,
//                     description,
//                     shortDescription,
//                     timezone,
//                     eventTime,
//                     eventDate
//                 })
//                 setEdit(true)
//             })
//             .catch(e => console.log(e))
//     }

//     useEffect(() => {
//         if (id) { getEvent() }
//     }, [id])


//     return (
//         <div className="lg:px-40 px-10">
//             <div className="flex justify-between w-full items-center mb-10">
//                 <button
//                     className="flex items-center p-2 gap-2 font-semibold"
//                     onClick={navigateToDashboardEvents}>
//                     <ChevronLeftIcon />
//                     Events
//                 </button>
//             </div>

//             <div className="flex flex-col gap-4 justify-center w-full pb-10">

//                 <p className="">Title</p>
//                 <Input outline id="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder={'Title'} />

//                 <p className="">Short Description</p>
//                 <Input outline id="shortDescription"
//                     value={form.shortDescription}
//                     onChange={handleChange}
//                     placeholder={'Short Description'} />

//                 <p className="">Event Description</p>
//                 <Input outline id="description"
//                     value={form.description}
//                     onChange={handleChange}
//                     placeholder={'Event Description'} />

//                 <p className="">Event Image</p>
//                 <Input outline id="image"
//                     value={form.image}
//                     onChange={handleChange}
//                     placeholder={'Event Image'} />

//                 <p className="">Location Type</p>
//                 <div className="flex gap-2 items-center">
//                     <input type="radio"
//                         value="Online Event"
//                         checked={form.locationType === 'Online Event'}
//                         onChange={handleChange}
//                         name="locationType"
//                         id="locationType" />
//                     <span>Online Event</span>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                     <input type="radio"
//                         value="In Person"
//                         checked={form.locationType === 'In Person'}
//                         onChange={handleChange}
//                         name="locationType"
//                         id="locationType" />
//                     <span>In Person</span>
//                 </div>
//                 <div>
//                     <p className="">{form.locationType === 'Online Event' ? 'Meeting Link' : 'Location'}</p>
//                     <Input outline id="location"
//                         value={form.location}
//                         onChange={handleChange}
//                         placeholder={form.locationType === 'Online Event' ? 'Meeting Link' : 'Location'} />
//                 </div>

//                 <p className="">Price (N)</p>
//                 <Input outline id="price"
//                     value={form.price}
//                     onChange={handleChange}
//                     placeholder={'Price'} />

//                 <p className="">Date & Time</p>
//                 <div className="flex gap-10">
//                     <Input type="date"
//                         outline id="eventDate"
//                         value={form.eventDate}
//                         onChange={handleChange}
//                         placeholder={'Date'} />
//                     <Input type="time"
//                         outline id="eventTime"
//                         value={form.eventTime}
//                         onChange={handleChange}
//                         placeholder={'Time'} />
//                 </div>

//                 <select
//                     className={`placeholder:text-primary-faded bg-transparent capitalize text-primary 
//                     w-full py-[17px] pl-5 pr-4 px-5 mb-10 outline-none border border-primary rounded-xl font-sat font-medium`}
//                     onChange={handleChange}
//                     id='timezone' value={form.timezone}
//                 >
//                     <option className=''>Select Timezone</option>
//                     {AppConfig.DATA.TIMEZONES.map((option, index) => {
//                         return (
//                             <option className='capitalize' key={index} value={option.value}
//                                 selected={option.value === form.timezone}>
//                                 {option.label}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>

//             <div className="fixed bottom-0 left-0 right-0 bg-greyed">
//                 <div className="p-4 w-full flex justify-end border-t gap-4 border-primary-faded">
//                     <Button theme="secondary" className="!border" onClick={navigateToDashboardEvents}>Discard</Button>
//                     <Button className="!border" theme="primary" onClick={handleSubmit}>{`${edit ? 'Edit' : 'Create'}`} Event</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CreateEvents