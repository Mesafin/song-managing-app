import { addSong } from "../app/actions/songsActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Song } from "../app/types/types";
import Summary from "./Summary";
import { useAppDispatch } from "../app/hooks";

const SongForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    artist: Yup.string().required("Artist is required"),
    album: Yup.string().required("Album is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const formik = useFormik<Song>({
    initialValues: {
      title: "",
      artist: "",
      album: "",
      genre: "",
    } as Song,
    validationSchema: validationSchema,

    
    onSubmit: async (values: Song, { setSubmitting, resetForm }) => {
      try {
        console.log('Dispatching addSong action...');
        await dispatch(addSong(values));
        setSubmitting(false);
        resetForm();
        enqueueSnackbar("Song created successfully", { variant: "success" });
      } catch (error: any) {
        setSubmitting(false);
        enqueueSnackbar(error.message || "An error occurred", {
          variant: "error",
        });
      }
    },
  });

  return (
    <form className="create" onSubmit={formik.handleSubmit}>
      <h3>Add a New Song</h3>

      <label>Song Title:</label>
      <input
        type="text"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        className={formik.touched.title && formik.errors.title ? "error" : ""}
      />
      {formik.touched.title && formik.errors.title && (
        <div className="error">{formik.errors.title}</div>
      )}

      <label>Song Artist:</label>
      <input
        type="text"
        name="artist"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.artist}
        className={formik.touched.artist && formik.errors.artist ? "error" : ""}
      />
      {formik.touched.artist && formik.errors.artist && (
        <div className="error">{formik.errors.artist}</div>
      )}

      <label>Song Album:</label>
      <input
        type="text"
        name="album"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.album}
        className={formik.touched.album && formik.errors.album ? "error" : ""}
      />
      {formik.touched.album && formik.errors.album && (
        <div className="error">{formik.errors.album}</div>
      )}

      <label>Song Genre:</label>
      <input
        type="text"
        name="genre"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.genre}
        className={formik.touched.genre && formik.errors.genre ? "error" : ""}
      />
      {formik.touched.genre && formik.errors.genre && (
        <div className="error">{formik.errors.genre}</div>
      )}

      <button type="submit" disabled={formik.isSubmitting}>
        Add Song
      </button>

      <Summary />
    </form>
  );
};

export default SongForm;
