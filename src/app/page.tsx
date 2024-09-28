import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/M8p1vZEvqU5FIg69JEXmnMkeOyRhHjrBx0KlVQU4Ldq9T7PY",
  "https://utfs.io/f/M8p1vZEvqU5FMiwFDeEvqU5FChjTtmNyWrAbYzE3dcIZnkus",
  "https://utfs.io/f/M8p1vZEvqU5FkdZQbWNsXozr2FVLsYQIUfAtcEgiaeMdTmjn",
  "https://utfs.io/f/M8p1vZEvqU5FD26WL9ClJR7OaBzdVjfWcYgUi90pEQwtKTNh"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
