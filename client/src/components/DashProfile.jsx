import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import {

  HiArrowSmRight,

} from 'react-icons/hi';




const DashProfile = () => {

  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const filePickerRef = useRef();
  const dispatch = useDispatch();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };


  useEffect(() => {
    if (imageFile) {
      // uploadImage();
    }
  }, [imageFile]);




  const uploadImage = async () => {
    // service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write: if
    //       request.resource.size < 2 * 1024 * 1024 &&
    //       request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }




    // setImageFileUploading(true);
    // setImageFileUploadError(null);
    // const storage = getStorage(app);
    // const fileName = new Date().getTime() + imageFile.name;
    // const storageRef = ref(storage, fileName);
    // const uploadTask = uploadBytesResumable(storageRef, imageFile);
    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    //     setImageFileUploadProgress(progress.toFixed(0));
    //   },
    //   (error) => {
    //     setImageFileUploadError(
    //       'Could not upload image (File must be less than 2MB)'
    //     );
    //     setImageFileUploadProgress(null);
    //     setImageFile(null);
    //     setImageFileUrl(null);
    //     setImageFileUploading(false);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setImageFileUrl(downloadURL);
    //       setFormData({ ...formData, profilePicture: downloadURL });
    //       setImageFileUploading(false);
    //     });
    //   }
    // );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUpdateUserError(null);
    // setUpdateUserSuccess(null);
    // if (Object.keys(formData).length === 0) {
    //   setUpdateUserError('No changes made');
    //   return;
    // }
    // if (imageFileUploading) {
    //   setUpdateUserError('Please wait for image to upload');
    //   return;
    // }
    // try {
    //   dispatch(updateStart());
    //   const res = await fetch(`/api/user/update/${currentUser._id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     dispatch(updateFailure(data.message));
    //     setUpdateUserError(data.message);
    //   } else {
    //     dispatch(updateSuccess(data));
    //     setUpdateUserSuccess("User's profile updated successfully");
    //   }
    // } catch (error) {
    //   dispatch(updateFailure(error.message));
    //   setUpdateUserError(error.message);
    // }

    console.log('hello world')
  };
  const handleDeleteUser = async () => {
    // setShowModal(false);
    // try {
    //   dispatch(deleteUserStart());
    //   const res = await fetch(`/api/user/delete/${currentUser._id}`, {
    //     method: 'DELETE',
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     dispatch(deleteUserFailure(data.message));
    //   } else {
    //     dispatch(deleteUserSuccess(data));
    //   }
    // } catch (error) {
    //   dispatch(deleteUserFailure(error.message));
    // }
    console.log('hello world')
  };

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };




  return (

    <div className="rounded-3xl bg-white w-full lg:px-80 pt-8 pb-16" >
      <h1 className="text-3xl font-semibold text-center my-7 text-primary">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>

          <img src={currentUser.profilePicture} alt="user" className='rounded-full w-full h-full object-cover border-8 border-[#f4d9ff]' />
          
        </div>







      <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />

        <input
          type="text"
          placeholder="username" 
         defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg"
         
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg"
         
        />
        <input
          type="password"
          placeholder="password"
        
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
         type='submit'
          className="transition-colors duration-300 bg-primary opacity-75 text-white rounded-lg p-3 uppercase hover:opacity-100 disabled:opacity-80"
        >
         update
        </button>
        {/* <Link
         to='/dashboard'
          className="transition-colors duration-300 border border-primary opacity-75 text-primary rounded-lg p-3 uppercase hover:bg-primary hover:text-white disabled:opacity-80 text-center"
        >
         dashboard
        </Link> */}
 
      </form>
      <div className="flex justify-between mt-5">
      <button  type='button' onClick={handleSignout} className='text-red-600  hover:text-primary  font-medium  rounded-md flex gap-2'>
             
               Delete Account
             
            </button>
        <button  type='button' onClick={handleSignout} className='text-red-600  hover:text-primary opacity-75 font-medium  rounded-md flex gap-2'>
               <HiArrowSmRight className='w-6 h-6 mr-2'/>
               Sign Out
             
            </button>
      </div>

   
    
    </div>
  

);
}

export default DashProfile



