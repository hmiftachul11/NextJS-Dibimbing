export default function DetailFoodCard({ food }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center p-5 w-full lg:w-3/4 mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-center lg:justify-end">
        <img
          className="rounded-xl w-full lg:w-3/4 h-auto"
          src={food.imageUrl}
          alt={food.name}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-5 text-gray-700">
          {food.name}
        </h2>
        <p className="text-lg text-gray-600 mb-3">
          <span className="font-bold">Rating:</span> {food.rating}
        </p>
        <p className="text-lg text-gray-600 mb-3">
          <span className="font-bold">Likes:</span> {food.totalLikes}
        </p>
        <p className="text-lg text-gray-600 mb-3">
          <span className="font-bold">Ingredients:</span>{" "}
          {food.ingredients.join(", ")}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold">Description:</span> {food.description}
        </p>
      </div>
    </div>
  );
}
