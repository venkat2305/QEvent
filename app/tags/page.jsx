import Tag from "@/components/Tag";

export default async function Tags() {
  const res = await fetch('https://qevent-backend.labs.crio.do/tags')
  const tags = await res.json()
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-wrap gap-4 px-44 justify-center">
        {tags.map(tag => (
          <Tag text={tag.name} key={tag.name} />
        ))}
      </div>
    </div>
  );
}