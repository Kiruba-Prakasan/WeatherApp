function Card({ Crop, Description, Areas, imageURL }) {
    return (
        <div className="w-[250px] h-auto bg-white opacity-70 p-4 rounded-lg shadow-md m-10 hover:translate-y-[-10px]">
            <img src={imageURL} alt={Crop} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{Crop}</h1>
                <p className="text-gray-700">{Description}</p>
                <p className="text-gray-500">Areas: {Areas}</p>
            </div>
        </div>
    );
}

export default Card;
