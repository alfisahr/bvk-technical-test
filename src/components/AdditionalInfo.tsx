type AdditionalInfoProps = {
  caption: string;
  value: string | number | undefined;
};

const AdditionalInfo = ({ caption, value }: AdditionalInfoProps) => {
  return (
    <div className="mb-3">
      <span className="font-bold">{caption}</span>
      <div>{value}</div>
    </div>
  );
};

export default AdditionalInfo;
