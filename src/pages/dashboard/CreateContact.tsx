import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { ChevronLeftIcon } from "../../assets/svg/svg"
import { Button, Input } from "../../components"
import { AxiosData } from "../../interfaces"
import { mainClient } from "../../utilities/client"
import { handleAxiosError } from "../../utilities/common"
import AppConfig from "../../utilities/config"

function CreateContact() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [edit, setEdit] = useState(false)
    const [events, setEvents] = useState([])
    const [form, setForm] = useState({
        name: '',
        profession: '',
        linkedInUrl: '',
        email: '',
        eventId: '',
    })


    const handleChange = (e: any) => {
        const { id, value } = e.target
        setForm((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = () => {
        const url = edit ? `${AppConfig.API_ENDPOINTS.Guests.BaseURL}/${id}` : AppConfig.API_ENDPOINTS.Guests.CreateURL
        mainClient.request({
            url,
            method: edit ? 'PUT' : 'POST',
            data: form
        })
            .then(r => {
                if (r.status === 200) {
                    setForm({
                        name: '',
                        profession: '',
                        linkedInUrl: '',
                        email: '',
                        eventId: ''
                    })
                    toast.success(`Contact ${edit ? 'edited' :  'created'} successfully!`)
                    navigateToDashboardEvents()
                }
            })
            .catch(e => handleAxiosError(e))
    }

    const navigateToDashboardEvents = () => navigate(`${AppConfig.PATHS.Dashboard.Events.Base}`)


    const getContact = () => {
        mainClient.get(`${AppConfig.API_ENDPOINTS.Guests.BaseURL}/${id}`)
            .then((r: AxiosResponse<AxiosData>) => {
                const { name,
                    profession,
                    linkedInUrl,
                    email,
                    eventId } = r.data.data
                setForm({
                    name,
                    profession,
                    linkedInUrl,
                    email,
                    eventId
                })
                setEdit(true)
            })
            .catch(e => console.log(e))
    }

    const getEvents = () => {
        mainClient.get(`${AppConfig.API_ENDPOINTS.Events.MineURL}`)
            .then((r: AxiosResponse<AxiosData>) => {
                const { events } = r.data.data
                setEvents(events)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (id) { getContact() }
    }, [id])


    useEffect(() => {
        getEvents()
    }, [])


    return (
        <div className="lg:px-40 px-10">
            <div className="flex justify-between w-full items-center mb-10">
                <button
                    className="flex items-center p-2 gap-2 font-semibold"
                    onClick={navigateToDashboardEvents}>
                    <ChevronLeftIcon />
                    Contacts
                </button>
            </div>

            <div className="flex flex-col gap-4 justify-center w-full pb-10">

                <p className="">Title</p>
                <Input outline id="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={'Full Name'} />

                <p className="">Profession</p>
                <Input outline id="profession"
                    value={form.profession}
                    onChange={handleChange}
                    placeholder={'Profession'} />

                <p className="">LinkedIn Profile</p>
                <Input outline id="linkedInUrl"
                    value={form.linkedInUrl}
                    onChange={handleChange}
                    placeholder={'LinkedIn Profile'} />

                <p className="">Email</p>
                <Input outline id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={'Email'} />


                <p className="text-gray-400">Attach Event (Optional)</p>
                <select
                    className={`placeholder:text-primary-faded bg-transparent capitalize text-primary 
                    w-full py-[17px] pl-5 pr-4 px-5 mb-10 outline-none border border-primary rounded-xl font-sat font-medium`}
                    onChange={handleChange}
                    id='eventId' value={form.eventId}>
                    <option className=''>Select Event</option>
                    {events.length > 0 && events.map((event, i) => {
                        return (
                            <option className='capitalize' key={i} value={event.id}
                                selected={event.id === form.eventId}>
                                {event.name}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-greyed">
                <div className="p-4 w-full flex justify-end border-t gap-4 border-primary-faded">
                    <Button theme="secondary" className="!border" onClick={navigateToDashboardEvents}>Discard</Button>
                    <Button className="!border" theme="primary" onClick={handleSubmit}>{`${edit ? 'Edit' : 'Create'}`} Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateContact