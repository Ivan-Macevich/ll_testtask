import "components/features/card/card.scss";

interface ICardProps {
  name: string;
  image: string;
  bgColor: string;
}

export const Card = ({ name, image, bgColor }: ICardProps) => {
  return (
    <div className="card">
      <div className="card-image-container" style={{backgroundColor:bgColor}}>
        <img className="card-image" src={image} alt={name} />
      </div>
      <h3 className="card-title">{name}</h3>
    </div>
  );
};
