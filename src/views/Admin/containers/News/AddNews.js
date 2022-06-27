import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsPlusLg } from "react-icons/bs";
import { StyledAddNews } from "./News.style";
import Axios from "../../../../utils/axios";
import { Button, Input } from "antd";

const { TextArea } = Input;

function AddNews() {
  const imgRef1 = useRef();
  const [uploadedImgs, setUploadedImgs] = useState();
  const [items, setItems] = useState([]);
  const [uplodedImgsId, setUplodedImgsId] = useState([]);
  const [image,setImage] = useState()
  const [date,setDate] = useState('')
  const [componentId, setComponentId] = useState([]);
  const counts = new Date().getUTCMilliseconds();
  const [description,setDescription] = useState('')
  const [formValues, setFormValues] = useState({
    title: "",
    short_description: "",
  }); 

  let adminInfo = JSON.parse(localStorage.getItem("user_info"));

  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo.token?.access}`,
  };
  const img = useRef()
  console.log(componentId);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: counts,
        description: '',
        image:''
      },
    ]);
  };

  const submitComponent = async()=>{
    const formData = new FormData()
    formData.append("image",img.current.files[0])
    formData.append('text',description)
    try {
      const res = await Axios.post('/blog/component/',formData, {headers: header})
      console.log(res);
      const {status,data} = res
      if(status == 201){
        setComponentId([...componentId,{id:data.id}])
      }
    } catch (error) {
      
    }
  }
  console.log(img);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleFocus = (inp) => {
    inp.current.click();
  };

  // const inputHandler = (e,id) =>{
  //   let filteredItems = items.find(item=> item.id == id)
  //   console.log(filteredItems);
  //   if(e[0]){
  //     console.log(e[0]);
  //     filteredItems.image = e[0]
  //   }else {
  //     filteredItems.description = e
  //   }
  // }

  const uploadImg = async (inpFile) => {
    console.log(inpFile.current.files[0]);
    const formData = new FormData();
    formData.append("image", inpFile.current.files[0]);
    try {
      const res = await Axios.post(`/blog/cover/`, formData, {headers: header});
      setUploadedImgs(res?.data.id);
      console.log(uploadedImgs);
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      const res = await Axios.post("/blog/", {
        components: [...componentId],
        cover_image: {
          id: uploadedImgs,
        },
        ...formValues,
        published_date:date
      }, {headers: header});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledAddNews>
      <div className="main">
        <h1 className="title">
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
              onChange={handleInputChange}
              name="title"
              id="title"
              value={formValues.title}
            />
          </div>
          <div className="input_block">
            <label htmlFor="short_description">Краткое описание</label>
            <TextArea
              rows={4}
              onChange={handleInputChange}
              name="short_description"
              id="short_description"
              value={formValues.short_description}
            />
          </div>
              <div className="extra_news">
                <div className="input_block">
                  <label name="extra_description">Описание</label>
                  <TextArea
                    rows={4}
                    onChange={(e)=> setDescription(e.target.value)}
                    name="short_description"
                    id="short_description"
                  />
                </div>
                <div className="input_block">
                  <input onChange={submitComponent}  type="file" ref={img} />
                </div>
              </div>
          {items.map((item) => {
            const {id,description} = item
            return (
              <div className="extra_news">
                <div className="input_block">
                  <label name="extra_description">Описание</label>
                  <TextArea
                    rows={4}
                    onChange={(e)=> setDescription(e.target.value)}
                    name="short_description"
                    id="short_description"
                  />
                </div>
                <div className="input_block">
                  <input onChange={submitComponent} type="file" ref={img} />
                </div>
              </div>
             );
          })}
          <button className="add-button" onClick={addItem}>+</button>
          <div className="input_block">
            <div className="date_block">
              <label htmlFor="date">Дата</label>
              <Input
                type="date"
                onChange={(e) =>setDate(e.target.value)}
              />
            </div>
          </div>
          {/* </form> */}
        </div>
        <Button type="primary" className="submit_btn" onClick={handleSubmit}> Опубликовать</Button>
      </div>
    </StyledAddNews>
  );
}

export default AddNews;
