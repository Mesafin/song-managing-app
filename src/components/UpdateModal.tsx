import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";
import { updateSong } from "../app/actions/songsActions";
import { enqueueSnackbar } from "notistack";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const DeleteIcon = styled.span`
  position: absolute;
  right: 0px;
  top: 10px;
  color: red;
  zoom: 200%;
  cursor: pointer;
`;

interface Props {
  modalRef: React.RefObject<HTMLDivElement>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
    formData: {
    title: string;
    artist: string;
    album: string;
    genre: string;
  };
}

const UpdateModal: React.FC<Props> = ({
  modalRef,
  setShow,
  formData
}) => {
    const dispatch = useAppDispatch();
  const [updatedData, setUpdatedData] = useState({ ...formData });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateSong(updatedData));
    setShow(false);
    enqueueSnackbar("Song Updated successfully", { variant: "success" });

  };

 


  return (
    <>
      <ModalBackdrop>
        <div style={{ position: "relative", zIndex: "999" }} ref={modalRef}>
          <form
            className="create updateForm"
            style={{ width: "300px" }}
            onSubmit={handleUpdate}
          >
            <p style={{ color: "white", fontSize: "20px" }}>Edit the Song</p>
            <DeleteIcon
              onClick={() => setShow(false)}
            >
              <IoMdClose />
            </DeleteIcon>
            <label >Song Title:</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={updatedData.title}
              required
            />

            <label>Song Artist:</label>
            <input
              type="text"
              name="artist"
              required
              onChange={handleChange}
              value={updatedData.artist}
            />

            <label>Song Album:</label>
            <input
              type="text"
              name="album"
              required
              onChange={handleChange}
              value={updatedData.album}
            />

            <label>Song Genre:</label>
            <input
              type="text"
              name="genre"
              required
              onChange={handleChange}
              value={updatedData.genre}
            />

            <button>Update Song</button>
          </form>
        </div>
      </ModalBackdrop>
    </>
  );
};

export default UpdateModal;
