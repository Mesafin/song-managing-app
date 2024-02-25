import React, { useEffect, useRef, useState } from "react";
import { GiLoveSong } from "react-icons/gi";
import { RiAlbumFill, RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FcMusic } from "react-icons/fc";
import { Song } from "../app/types/types";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { deleteSong } from "../app/actions/songsActions";
import { enqueueSnackbar } from "notistack";
import DetailModal from "./DetailModal";
import UpdateModal from "./UpdateModal";

interface Props {
  song: Song;
}

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
  z-index: 1000;
`;


const StyledStrongIcon = styled.strong`
  margin-right: 6px;
`;

const SongDetails: React.FC<Props> = ({ song }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const handleShow = () => {
    setFormData(song);
    setShow(true);
  };


  const handleInfoClick = () => {
    setShowModal(true);
  };
 

   const handleDelete = () => {
    setShowConfirmation(true);
  };

    const confirmDelete = () => {
    dispatch(deleteSong(song._id));
    enqueueSnackbar("Song Deleted successfully", { variant: "success" });
    setShowConfirmation(false); 
  };

  const cancelDelete = () => {
    setShowConfirmation(false); 
  };

  // modal
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShow(false);
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  return (
    <>
      <div className="song-details" style={{ display: "flex", gap: "3%" }}>
        <FcMusic className='d-none musicIconSize' />
        <div>
          <h4>
            <GiLoveSong />{" "}
            <StyledStrongIcon>Title: </StyledStrongIcon> {song.title}
          </h4>
          <p>
            <StyledStrongIcon>
              <RiAlbumFill style={{ paddingTop: "-10px" }} />
              Artist:{" "}
            </StyledStrongIcon>{" "}
            {song.artist}
          </p>
          <p>
            <StyledStrongIcon>
              <RiAlbumFill />
              Album:{" "}
            </StyledStrongIcon>
            {song.album}
          </p>
          <p>
            <StyledStrongIcon>
              <RiAlbumFill />
              Genre:{" "}
            </StyledStrongIcon>
            {song.genre}
          </p>
          <span
            className="material-symbols-outlined"
            style={{ color: "lightblue"}}
            onClick={handleInfoClick}
          >
            <BsFillInfoCircleFill style={{ zoom: "150%" }} />
          </span>
          <p
            className="material-symbols-outlined"
            style={{ color: "#FF5733" }}
            onClick={handleShow}
          >
            <RiEdit2Fill style={{ zoom: "150%" }} />
          </p>
          <br />
          <p
            className="material-symbols-outlined-2"
            style={{ color: "#dc3545" }}
            onClick={handleDelete}
          >
            <MdDelete style={{ zoom: "150%" }} />
          </p>
        </div>
      </div>

      {/* update modal */}
      {show && (
        <ModalBackdrop>
          <UpdateModal
            modalRef={modalRef}
            setShow={setShow}
            formData={formData}
          />
        </ModalBackdrop>
      )}

      {/* info modal */}

      {showModal && (
        <ModalBackdrop>
          <DetailModal song={song} setShowModal={setShowModal} />
        </ModalBackdrop>
      )}

      {/* Confirmation dialog */}
      {showConfirmation && (
        <ModalBackdrop>
          <div style={{color: "white"}}>
            <p>Are you sure you want to delete this song?</p>
            <div style={{
              display: "flex",
              justifyContent: "space-around",
            }}>
            <button style={{ backgroundColor: "red"}} onClick={cancelDelete}>Cancel</button>
            <button onClick={confirmDelete}>Confirm</button>
            </div>
          </div>
        </ModalBackdrop>
      )}
    </>
  );
};

export default SongDetails;
