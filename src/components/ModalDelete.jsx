import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/ModalDelete.module.css";
import { hideModalDelete } from "@/redux/reducers/ModalDeleteReducer";
import { useRouter } from "next/router";

export default function ModalDelete({ onConfirm, title }) {
  const isModalShow = useSelector((store) => store.modalDelete.modalDeleteShow);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div
      className={`${styles.modal_delete} ${
        isModalShow ? `${styles.show}` : `${styles.hide}`
      }`}
    >
      <div
        className={` ${styles.modal_delete_content} flex flex-col gap-3 p-5 lg:w-1/4 md:w-1/3 sm:w-2/4 mx-auto rounded-xl `}
      >
        <h1 className="text-center text-xl font-bold">{title}</h1>
        <div className="flex justify-between px-5 mt-5 gap-5">
          <button
            className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
            onClick={() => handleConfirm()}
          >
            Confirm
          </button>
          <button
            className="bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-500"
            onClick={() => dispatch(hideModalDelete())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
