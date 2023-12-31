import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import Cookies from "js-cookie";
import SideBar from "../components/Sidebar.js";
import Topbar from "../components/Topbar.js";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { get, put } from "../lib/Requests";
import { Circles } from "react-loader-spinner";
import ChipInput from "material-ui-chip-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditorPage(props) {
  const user = Cookies.get("username");
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const dataFetchedRef = React.useRef(false);

  const loadData = async () => {
    const id = window.location.pathname.split("/")[3];
    let url = `/api/${user}/notes/${id}`;
    if (process.env.REACT_APP_ENV === "development") {
      url = `${process.env.REACT_APP_BACKEND_URL}/api/${user}/notes/${id}`;
    }
    get(url, {
      success: function (data) {
        setIsLoading(false);
        setTitle(data.title);
        setTags(data.tags);
        setContent(data.content);
      },
    });
  };

  React.useEffect(() => {
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    loadData();
  }, []);

  const title_onchange = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const content_onchange = (event) => {
    // console.log(event);
    setContent(event);
  };

  const tags_onchange = (event) => {
    // console.log(event);
    setTags(event);
    // console.log(tags);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const id = window.location.pathname.split("/")[3];
      let url = `/api/${user}/notes`;
      if (process.env.REACT_APP_ENV === "development") {
        url = `${process.env.REACT_APP_BACKEND_URL}/api/${user}/notes`;
      }
      const payload_data = {
        _id: id,
        title: title,
        content: content,
        tags: [...tags],
        username: user,
      };

      put(url, payload_data, {
        success: function () {
          console.log("Success saving content");
          toast.success("Note Saved!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
      });
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  return (
    <article>
      <Topbar title="Editor" />
      <ToastContainer />
      <SideBar />
      <div className="content">
        {isLoading ? (
          <Circles
            height="4em"
            width="4em"
            color="#1D201F"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl style={{ width: "100%" }}>
              <TextField
                label="Title"
                value={title}
                onChange={title_onchange}
                sx={{ marginY: "1rem" }}
              ></TextField>
              <ChipInput
                label="Tags"
                allowDuplicates={false}
                defaultValue={tags}
                style={{
                  marginBottom: "1rem",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
                onChange={tags_onchange}
              />
              <Editor
                value={content}
                init={{
                  height: 550,
                  width: "100%",
                  menubar: false,
                }}
                onEditorChange={content_onchange}
                sx={{ marginY: "10rem" }}
              />
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        )}
      </div>
    </article>
  );
}
