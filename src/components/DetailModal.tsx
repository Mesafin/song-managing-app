import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";
import { GiLoveSong } from "react-icons/gi";
import { RiAlbumFill } from "react-icons/ri";
import { FcMusic } from "react-icons/fc";
import { format, formatDistanceToNow } from 'date-fns';
import { Song } from "../app/types/types";
import React, { useEffect, useRef } from "react";

interface Props {
  song: Song;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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

const DeleteIcon = styled.span`
  position: absolute;
  right: 6px;
  top: 6px;
  color: red;
  zoom: 150%;
  cursor: pointer;
`;

const StrongIcon = styled.strong`
    margin-right: 6px
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;

const DetailModal: React.FC<Props> = ({ setShowModal, song }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowModal(false);
    }
  };

  

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [setShowModal]);

  const formattedCreatedAt = format(new Date(song.createdAt), "MMM dd yyyy 'at' hh:mm a");
  const formattedUpdatedAt = formatDistanceToNow(new Date(song.updatedAt), { addSuffix: true });

  return (
    <ModalBackdrop>
      <ModalContent className="detail-modal" ref={modalRef}>
      <p>Detail Information About The Song </p>
        <DeleteIcon onClick={() => setShowModal(false)}>
          <IoMdClose />
        </DeleteIcon>

        <div className="song-details" style={{ display: "flex", gap: "3%" }}>
          <FcMusic style={{ height: "auto", width: "80px" }} />
          <div>
            <h4>
              <GiLoveSong />{" "}
              <StrongIcon>Title: </StrongIcon>{" "}
              {song.title}
            </h4>
            <p>
              <StrongIcon >
                <RiAlbumFill />
                Artist:{" "}
              </StrongIcon>{" "}
              {song.artist}
            </p>
            <p>
              <StrongIcon >
                <RiAlbumFill />
                Album:{" "}
              </StrongIcon>
              {song.album}
            </p>
            <p>
              <StrongIcon >
                <RiAlbumFill />
                Genre:{" "}
              </StrongIcon>
              {song.genre}
            </p>
            <p>
              <StrongIcon >
                <RiAlbumFill />
                Created At:{" "}
              </StrongIcon>
              {formattedCreatedAt}
            </p>
            <p>
              <StrongIcon >
                <RiAlbumFill />
                Updated At:{" "}
              </StrongIcon>
              {formattedUpdatedAt}
            </p>
          </div>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default DetailModal;
