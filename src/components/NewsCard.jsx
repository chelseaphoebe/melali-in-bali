export const NewsCard = ({imageUrl, title, description, link}) => {
    return(
         <div className="border-2 rounded-lg flex justify-between gap-12 items-center mb-5">
          <img src={imageUrl} className="size-60 object-cover object-center" alt="" />
          <div className="flex flex-col w-3/4 gap-3">
            <p className="text-2xl font-bold">{title}</p>
            <p className="font-normal text-base">{description}</p>
          </div>
          <div className="flex flex-col w-1/4 gap-5">
            <p className="font-bold text-sm">Anda bisa baca pada tautan berikut</p>
            <a className="" href={link} target="_blank" rel="noreferrer">Click Here</a>
          </div>
        </div>
    );
};
