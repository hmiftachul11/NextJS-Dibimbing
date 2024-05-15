import DetailFoodCard from "@/components/DetailFoodCard";
import FormFood from "@/components/FormFood";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { show } from "@/redux/reducers/ModalShowReducers";
import usePost from "@/API/usePost";
import Head from "next/head";
import ModalDelete from "@/components/ModalDelete";
import { showModalDelete } from "@/redux/reducers/ModalDeleteReducer";
import useDelete from "@/API/useDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
  );
  return { props: { food: res?.data?.data } };
}

export default function DetailFoodPage({ food }) {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { post } = usePost();
  const { deleteFood } = useDelete();

  const handleEdit = (name, description, imageUrl, ingredients) => {
    post(`update-food/${food.id}`, {
      name,
      description,
      imageUrl,
      ingredients,
    });
  };

  const handleDelete = () => {
    deleteFood(`${food.id}`);
  };

  return (
    <div className="mt-5 py-20">
      <Head>
        <title>Detail Food</title>
      </Head>
      <h1 className=" text-2xl text-customOrange font-mono font-bold text-center mt-5 mb-10">
        Detail Food
      </h1>
      <DetailFoodCard food={food} />
      <div className="flex justify-center gap-5 mt-16">
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-500"
          onClick={() => push("/essen")}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-300"
          onClick={() => dispatch(show())}
        >
          <FontAwesomeIcon icon={faEdit} /> Edit
        </button>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-500"
          onClick={() => dispatch(showModalDelete())}
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
      <FormFood
        food={food}
        title={`Edit ${food.name}`}
        onSubmitForm={handleEdit}
      />
      <ModalDelete onConfirm={handleDelete} title={`Delete ${food.name} ?`} />
    </div>
  );
}
