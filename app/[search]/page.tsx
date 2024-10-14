import getWikiResults from '@/lib/getWikiResults';
import Image from 'next/image';
interface SearchPageProps {
  params: {
    search: string;
  };
}

interface WikiThumbnail {
  source: string;
  width: number;
  height: number;
}

interface WikiResult {
  pageid: number;
  title: string;
  extract: string;
  thumbnail?: WikiThumbnail;
}

export default async function SearchPage({ params: { search } }: SearchPageProps) {
  const data = await getWikiResults(search);
  const results = data?.query?.pages;
  
  console.log(results);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for `{search}`</h1>
      {results ? (
        <ul className="space-y-4">
          {Object.values(results).map((result) => {
            const wikiResult = result as WikiResult;
            console.log("img",wikiResult.thumbnail?.source)
            return (
              <li key={wikiResult.pageid} className="border-b pb-2 flex items-start space-x-4">
                {wikiResult.thumbnail && 
                (
                  <Image
                    src={wikiResult.thumbnail.source}
                    alt={wikiResult.title}
                    width={wikiResult.thumbnail.width || 100}   
                    height={wikiResult.thumbnail.height|| 100} 
                    className="w-24 h-auto object-cover rounded"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold">{wikiResult.title}</h2>
                  <p>{wikiResult.extract}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No results found for `{search}`</p>
      )}
    </div>
  );
}
