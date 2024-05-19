export const NewsCard = ({imageUrl, title, description, link}) => {
    return(
         <div className="max-w-[400px] rounded-lg flex flex-col justify-between items-center mb-5">
          <img src={imageUrl} className="w-full h-[200px] object-cover object-center rounded-xl" alt="" />
          <div className="flex flex-col gap-3 m-2 mt-6">
            <p className="text-xl font-bold">{title}</p>
            <p className="font-normal text-sm text-gray-600">{description}</p>
            <a className="font-bold uppercase text-sm text-blue-500" href={link} target="_blank" rel="noreferrer">Baca selengkapnya</a>
          </div>
        </div>
    );
};
