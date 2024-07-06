import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
// import Typography from '@mui/material/Typography';
// import PrimaryButton from '@/Components/PrimaryButton';
import { useState, useRef } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

export default function ModalAddCate({open, handleOpen, handleClose}) {
  const ImageRef = useRef([]);
  const [imagePreview, setImagePreview] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");
  const [slug, setSlug] = useState("");
  const [link, setLink] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeyword, setMetaKeyword] = useState("");
  const [metaH1, setMetaH1] = useState("");
  const [metaH2, setMetaH2] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);

      // setFormData((prevState) => ({
      //   ...prevState,
      //   image: [file],
      // }));
    }
  };

  const submit = () => {
    console.log(ImageRef.current.files[0])
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("keyword", keyword);
    formData.append("slug", slug);
    formData.append("link", link);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("meta_keyword", metaKeyword);
    formData.append("meta_h1", metaH1);
    formData.append("meta_h2", metaH2);
    formData.append("imageCate", ImageRef.current.files[0]);
  }
  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex justify-between mb-4">
          <p>Add Category</p>
          <button onClick={handleClose}>x</button>
        </div>

        <div className="w-full h-[480px] overflow-auto border">
          <div className='p-3 flex max-lg:flex-col gap-4 '>
            <div className="border w-[250px] p-2 rounded-md">
              <h3 className="mb-4">all category</h3>
              <div>
                <div className="flex items-center gap-1">
                  <Checkbox {...label} />
                  <label htmlFor="checkcate">หมวดหมู่ที่ 1</label>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-2">
              <div className="p-4 border rounded-md flex gap-4">
                <div className="w-[150px] h-[122px] border p-1 hover:scale-[0.95] duration-300 cursor-pointer">
                  <label htmlFor="imageCate">
                    <img 
                      className="w-full h-full rounded-sm" 
                      // src="/image/no-image.png" 
                      src={imagePreview} 
                      alt=""
                    />
                  </label>
                  <input 
                    id="imageCate" type="file" 
                    className="hidden" 
                    ref={ImageRef}
                    onChange={handleFileChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input 
                    className="w-full focus-none rounded-md" 
                    placeholder="Title" type="text" />
                  <input className="w-full focus-none rounded-md" placeholder="alt" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">ลายละเอียด</label>
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Title" type="text" />
                <input 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Description" type="text" 
                />
                <input 
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Keyword" type="text" 
                />
                <input 
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Slug" type="text" 
                />
                <input 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Link" type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Web SEO</label>
                <input 
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Title" type="text" 
                />
                <input 
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Description" type="text" 
                />
                <input 
                  value={metaKeyword}
                  onChange={(e) => setMetaKeyword(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="Keyword" type="text" 
                />
                <input 
                  value={metaH1}
                  onChange={(e) => setMetaH1(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="h1" type="text" 
                />
                <input 
                  value={metaH2}
                  onChange={(e) => setMetaH2(e.target.value)}
                  className="w-full focus-none rounded-md" 
                  placeholder="h2" type="text" 
                />
              </div>

              <div>
                <p>ตั้งหมวด category</p>
                <div className="flex gap-4">
                  <div className="w-24 p-1 border flex items-center flex-col gap-2">
                    <label htmlFor="">แสดงผล</label>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button 
            className="bg-green-600 text-white p-2 rounded-md"
            onClick={submit}
          >บันทึก</button>
          <button 
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={handleClose}
          >ยกเลิก</button>
        </div>
      </Box>
    </Modal>
    </>
  )
}
