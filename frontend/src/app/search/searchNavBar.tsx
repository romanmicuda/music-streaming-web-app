import Link from "next/link";

export default function SearchNavBar({ searchTerm }: { searchTerm: string }) {
  return (
    <div>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <Link href={`/search/${searchTerm}`}>All</Link>
          </li>
          <li>
            <Link href={`/search/${searchTerm}/songs/`}>Songs</Link>
          </li>
          <li>
            <Link href={`/search/${searchTerm}/albums/`}>Albums</Link>
          </li>
          <li>
            <Link href={`/search/${searchTerm}/playlists/`}>Playlists</Link>
          </li>
          <li>
            <Link href={`/search/${searchTerm}/artists`}>Artists</Link>
          </li>
          <li>
            <Link href={`/search/${searchTerm}/profiles/`}>Profiles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
