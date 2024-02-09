type KeywordsProps = {
  keywords: { id: number; name: string }[] | undefined;
};

const Keywords = ({ keywords }: KeywordsProps) => {
  return (
    <div>
      <span>Keywords</span>
      <div>
        {keywords &&
          keywords.map((keyword, key) => {
            return (
              <span
                key={key}
                className="inline-block px-3 py-1 bg-gray-200 mr-2 mb-2 rounded-md text-sm"
              >
                {keyword.name}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Keywords;
