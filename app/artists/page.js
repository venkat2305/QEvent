import ArtistCard from "@/components/ArtistCard";

export default async function Artists() {
    const res = await fetch('https://qevent-backend.labs.crio.do/artists')
    const artists = await res.json()
    console.log(artists)
    return (
        <div className="flex flex-wrap justify-center">
            {artists.map(artist => (
                <ArtistCard artistData={artist} />
            ))}
        </div>
    );
}