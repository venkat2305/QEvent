import EventCard from "@/components/EventCard";

export default async function Events({searchParams}){
    const res = await fetch('https://qevent-backend.labs.crio.do/events')
    let events = await res.json()
    if(searchParams){
        const artist = searchParams.artist
        const tag = searchParams.tag
        if(artist) events = events.filter(event => event.artist === artist)
        if(tag)  events = events.filter(event => event?.tags?.includes(tag))
    }
    return (
        <div className="flex flex-wrap">
            {events?.map(event => (
                <EventCard eventData={event} />
            ))}
        </div>
    );
}