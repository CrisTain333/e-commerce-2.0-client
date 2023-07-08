import { useSeller } from '@/libs/Context/sellerProvider';
import styles from '@/styles/styles';
import Image from 'next/image';
import React, { useState } from 'react';

const Setting = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [uploadLoader, setUploadLoader] = useState(false);
    const { currentSeller } = useSeller();

    // Handle Select Image
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    // Remove selected Image
    const handleCancel = () => {
        setSelectedImage('');
    };

    // Change Profile Picture Function
    const changeProfilePicture = async () => {
        setUploadLoader(true);
        const newForm = new FormData();
        newForm.append('profilePicture', selectedImage);
        // try {
        //     const result = await updateProfilePicture(newForm, currentSeller?._id);
        //     if (result?.status === 200) {
        //         toast.success('Profile Picture Updated');
        //         handleCancel();
        //         setUploadLoader(false);
        //         refetch();
        //     }
        //     setUploadLoader(false);
        // } catch (error) {
        //     setUploadLoader(false);
        //     toast.error('Fail To update Profile Picture');
        // }
    };

    const handleSubmit = () => {};

    return (
        <div className="shadow-md w-[60%] my-5 mx-auto rounded-md p-2">
            <div className="flex items-center flex-col justify-start space-x-5 ">
                <div className="relative">
                    <div className="relative overflow-hidden h-32 w-32">
                        <Image
                            src={
                                selectedImage
                                    ? URL.createObjectURL(selectedImage)
                                    : currentSeller?.shopProfile
                            }
                            // src={`${currentSeller?.profilePicture || ''}`}
                            className="w-32 h-32 rounded-full object-cover "
                            alt="profilePicture"
                            height={500}
                            width={500}
                        />
                    </div>
                    {selectedImage && (
                        <button
                            disabled={uploadLoader}
                            className={`absolute cursor-pointer font-bold -top-5 -right-2 ${
                                uploadLoader && 'cursor-not-allowed'
                            }`}
                            onClick={handleCancel}
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div>
                    <div className="p-3  mt-2 space-x-5">
                        {selectedImage ? (
                            <button
                                className={` text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer flex items-center ${
                                    uploadLoader ? 'cursor-not-allowed bg-gray-300' : 'bg-[#ff9900]'
                                }`}
                                disabled={uploadLoader}
                                onClick={changeProfilePicture}
                            >
                                {uploadLoader ? (
                                    <>
                                        <div className={`flex items-center justify-center`}>
                                            <div
                                                className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                role="status"
                                            >
                                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                        <p className="ml-2">Uploading ....</p>
                                    </>
                                ) : (
                                    <>Upload</>
                                )}
                            </button>
                        ) : (
                            <label
                                htmlFor="profile"
                                className="bg-[#ff9900] text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer"
                                // onClick={handleProfileUpdate}
                            >
                                Change Profile
                            </label>
                        )}
                    </div>
                    <input
                        onChange={imageChange}
                        type="file"
                        id="profile"
                        name="profilePicture"
                        className=" w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
                    />
                </div>
            </div>
            <br />
            <br />
            <div className="w-full px-5">
                <form onSubmit={handleSubmit}>
                    <div className="w-full md:flex block pb-3">
                        <div className=" w-[100%] md:w-[50%]">
                            <label className="block pb-2">Shop Name</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                required
                                name="name"
                                defaultValue={currentSeller?.name}
                                readOnly={false}
                                // value={userProfile?.name}
                                // onChange={(e) =>
                                //     setUserProfile((prev: any) => {
                                //         return { ...prev, name: e.target.value };
                                //     })
                                // }
                            />
                        </div>
                        <div className=" w-[100%] md:w-[50%]">
                            <label className="block pb-2">Shop Email</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-1 md:mb-0 cursor-not-allowed`}
                                required
                                readOnly
                                name="email"
                                defaultValue={currentSeller?.email}
                                // value={userProfile?.email}
                                // onChange={(e) =>
                                //     setUserProfile((prev: any) => {
                                //         return { ...prev, email: e.target.value };
                                //     })
                                // }
                            />
                        </div>
                    </div>

                    <div className="w-full md:flex block pb-3">
                        <div className=" w-[100%] md:w-[50%]">
                            <label className="block pb-2">Shop Phone</label>
                            <input
                                type="number"
                                className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                required
                                name="phone"
                                defaultValue={currentSeller?.phoneNumber}
                                // value={userProfile?.phone}
                                // onChange={(e) =>
                                //     setUserProfile((prev: any) => {
                                //         return { ...prev, phone: e.target.value };
                                //     })
                                // }
                            />
                        </div>

                        <div className=" w-[100%] md:w-[50%]">
                            <label className="block pb-2">Shop Address</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                // required
                                name="password"
                                defaultValue={currentSeller?.address}
                                // // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:flex block pb-3">
                        <div className=" w-[100%] md:w-[50%]">
                            <label className="block pb-2">Shop Zip</label>
                            <input
                                type="number"
                                className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                                required
                                name="phone"
                                defaultValue={currentSeller?.zipCode}
                                // value={userProfile?.phone}
                                // onChange={(e) =>
                                //     setUserProfile((prev: any) => {
                                //         return { ...prev, phone: e.target.value };
                                //     })
                                // }
                            />
                        </div>

                        <div className=" w-[100%] md:w-[50%]">
                            <label className="block pb-2">Shop Description</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                // required
                                name="password"
                                defaultValue={currentSeller?.description}
                                // // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center pb-4">
                        <button
                            // onClick={handleSubmit}
                            className={`w-[250px] h-[40px] border  text-center bg-[#ff9900] text-white rounded-md mt-8 cursor-pointer flex justify-center items-center text-base `}
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Setting;
