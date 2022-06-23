import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsPlusLg } from "react-icons/bs";
import { StyledAddNews } from "./News.style";
import Axios from "../../../../utils/axios";
import { Input } from "antd";

const { TextArea } = Input;

function AddNews() {
  const imgRef1 = useRef();
  const [uploadedImgs, setUploadedImgs] = useState([]);
  const [items, setItems] = useState([{ id: "", description: "" }]);
  const [uplodedImgsId, setUplodedImgsId] = useState([]);
  const [components, setComponents] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    short_description: "",
    cover_image: uplodedImgsId[0],
  }); 
  const addItem = () => {
    console.log("added");
    setItems([
      ...items,
      {
        id: 45,
        description: 45,
      },
    ]);
  };
  console.log(items);
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleFocus = (inp) => {
    inp.current.click();
  };
  const uploadImg = async (inpFile) => {
    const formData = new FormData();
    formData.append("image", inpFile.current.files[0]);
    try {
      const res = await Axios.post(`/blog/cover/`, formData);
      setUploadedImgs([...uploadedImgs, res.data]);
      setUplodedImgsId([...uplodedImgsId, { id: res?.data.id }]);
      console.log(uploadedImgs);
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      const res = await Axios.post("/blog/", {
        components: [],
        cover_image: {
          id: 1,
        },
        title: "BBC",
        short_description: "Short",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledAddNews>
      <div className="main">
        <h1 className="title" onClick={handleSubmit}>
          Добавить Новость
        </h1>
        <div>
          {/* <form> */}
          <h3>Обложка</h3>
          <div className="img_upload" onClick={() => handleFocus(imgRef1)}>
            {uploadedImgs?.length > 0 ? (
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  "object-fit": "cover",
                }}
                src={uploadedImgs[0]?.image}
                alt="productImg"
              />
            ) : (
              <>
                {" "}
                <BsPlusLg color="#364A7E" size="50" />
                <input
                  required
                  ref={imgRef1}
                  onChange={() => uploadImg(imgRef1)}
                  type="file"
                />
              </>
            )}
          </div>
          <div className="input_block">
            <label htmlFor="title">Название</label>
            <Input
              type="text"
              name="title"
              id="title"
              value={formValues.title}
            />
          </div>
          <div className="input_block">
            <label htmlFor="short_description">Краткое описание</label>
            <TextArea
              rows={4}
              name="short_description"
              id="short_description"
              value={formValues.short_description}
            />
          </div>
          {items.map((item) => {
            return (
              <div className="extra_news">
                <div className="input_block">
                  <label name="extra_description">Описание</label>
                  <TextArea
                    rows={4}
                    name="short_description"
                    id="short_description"
                  />
                </div>
                <div className="input_block">
                  <input type="file" />
                </div>
              </div>
            );
          })}
          <button onClick={addItem}>add</button>
          <div className="input_block">
            <div className="date_bock">
              <label htmlFor="date">Дата</label>
              <Input
                type="date"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </StyledAddNews>
  );
}

export default AddNews;
