import Tag from "@/components/Tag";

export default async function Event({ params }) {
  const eventId = params.eventId;
  const res = await fetch(
    `https://qevent-backend.labs.crio.do/events/${eventId}`
  );
  const eventData = await res.json();
  console.log(eventData);
  return (
    <div className="mt-12 px-16">
      <div>
        <img className="block mx-auto w-96" src={eventData.image} />
      </div>
      <div className="mt-3">
        <p className="text-[#B4955C] font-bold text-xl">{eventData.name}</p>
        <p className="text-[#B4955C] font-bold">{eventData.location}</p>
        <p className="text-[#B4955C] font-bold">{eventData.artist}</p>
      </div>
      <div className="flex gap-x-4 mt-8 mb-6">
        {eventData.tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>
      <p>{eventData.description}</p>
      <div className="flex justify-between mt-6">
        <p className="text-[#B4955C] font-bold text-3xl">{eventData.price}</p>
        <button className="bg-[#EF4444] px-6 py-2 rounded-md text-white">
          Buy Tickets
        </button>
      </div>
    </div>
  );
}
